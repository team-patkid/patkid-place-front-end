#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

function getGitChanges() {
  try {
    const staged = execSync('git diff --cached --name-only', { encoding: 'utf8' });
    
    if (!staged.trim()) {
      console.log('📝 스테이징된 변경사항이 없습니다.');
      return null;
    }

    const changedFiles = staged.trim().split('\n').filter(file => file);
    const diffOutput = execSync('git diff --cached --stat', { encoding: 'utf8' });
    
    return {
      files: changedFiles,
      stats: diffOutput
    };
  } catch (error) {
    console.error('❌ Git 변경사항 조회 오류:', error.message);
    return null;
  }
}

function analyzeChanges(changes) {
  const { files, stats } = changes;
  const date = new Date().toISOString().split('T')[0];
  
  // 파일 타입별 분류
  const fileTypes = {
    components: files.filter(f => f.includes('components/')),
    pages: files.filter(f => f.includes('pages/')),
    hooks: files.filter(f => f.includes('hooks/')),
    styles: files.filter(f => f.match(/\.(css|scss)\.ts$/)),
    config: files.filter(f => f.match(/(config|package\.json|tsconfig)/)),
    docs: files.filter(f => f.match(/\.(md)$/i)),
    public: files.filter(f => f.startsWith('public/')),
    tests: files.filter(f => f.includes('test') || f.includes('spec'))
  };

  return {
    date,
    totalFiles: files.length,
    fileTypes,
    stats
  };
}

function updateCLAUDE_MD(analysis) {
  const claudePath = 'CLAUDE.md';
  
  if (!fs.existsSync(claudePath)) {
    console.log('❌ CLAUDE.md 파일을 찾을 수 없습니다.');
    return;
  }

  let content = fs.readFileSync(claudePath, 'utf8');
  const updateLogIndex = content.indexOf('## 업데이트 기록');
  
  if (updateLogIndex === -1) {
    console.log('❌ CLAUDE.md에 "업데이트 기록" 섹션을 찾을 수 없습니다.');
    return;
  }

  const newEntry = generateCLAUDEEntry(analysis);
  const afterHeader = content.indexOf('\n', updateLogIndex) + 1;
  const nextSection = content.indexOf('\n### ', afterHeader);
  
  if (nextSection !== -1) {
    content = content.slice(0, nextSection) + '\n' + newEntry + content.slice(nextSection);
  } else {
    content = content + '\n' + newEntry;
  }
  
  fs.writeFileSync(claudePath, content);
  console.log('✅ CLAUDE.md 업데이트 완료');
}

function updateREADME(analysis) {
  const readmePath = 'README.md';
  
  if (!fs.existsSync(readmePath)) {
    console.log('❌ README.md 파일을 찾을 수 없습니다.');
    return;
  }

  let content = fs.readFileSync(readmePath, 'utf8');
  const updateLogIndex = content.indexOf('## 📝 업데이트 로그');
  
  if (updateLogIndex === -1) {
    console.log('❌ README.md에 "업데이트 로그" 섹션을 찾을 수 없습니다.');
    return;
  }

  const newEntry = generateREADMEEntry(analysis);
  const afterHeader = content.indexOf('\n', updateLogIndex) + 1;
  const nextSection = content.indexOf('\n### ', afterHeader);
  
  if (nextSection !== -1) {
    content = content.slice(0, nextSection) + '\n' + newEntry + content.slice(nextSection);
  } else {
    const separatorIndex = content.lastIndexOf('\n---');
    if (separatorIndex !== -1) {
      content = content.slice(0, separatorIndex) + '\n' + newEntry + content.slice(separatorIndex);
    } else {
      content = content + '\n' + newEntry;
    }
  }
  
  fs.writeFileSync(readmePath, content);
  console.log('✅ README.md 업데이트 완료');
}

function generateCLAUDEEntry(analysis) {
  const { date, totalFiles, fileTypes, stats } = analysis;
  
  let entry = `### ${date} - 코드 업데이트\n`;
  entry += `#### 📊 변경 통계\n`;
  entry += `- 총 ${totalFiles}개 파일 수정\n`;
  
  // 파일 타입별 변경사항
  Object.entries(fileTypes).forEach(([type, files]) => {
    if (files.length > 0) {
      const typeNames = {
        components: '컴포넌트',
        pages: '페이지',
        hooks: '훅',
        styles: '스타일',
        config: '설정',
        docs: '문서',
        public: '정적파일',
        tests: '테스트'
      };
      entry += `- ${typeNames[type]}: ${files.length}개\n`;
    }
  });
  
  entry += `\n#### 📋 변경된 파일 목록\n`;
  Object.entries(fileTypes).forEach(([type, files]) => {
    if (files.length > 0) {
      files.forEach(file => {
        entry += `- ${file}\n`;
      });
    }
  });
  
  return entry;
}

function generateREADMEEntry(analysis) {
  const { date, totalFiles, fileTypes } = analysis;
  
  let entry = `### ${date} - 코드 업데이트\n`;
  entry += `- ${totalFiles}개 파일 수정\n`;
  
  // 주요 변경사항만 요약
  const majorChanges = [];
  if (fileTypes.components.length > 0) majorChanges.push(`컴포넌트 ${fileTypes.components.length}개`);
  if (fileTypes.pages.length > 0) majorChanges.push(`페이지 ${fileTypes.pages.length}개`);
  if (fileTypes.config.length > 0) majorChanges.push(`설정파일 ${fileTypes.config.length}개`);
  
  if (majorChanges.length > 0) {
    entry += `- 주요 변경: ${majorChanges.join(', ')}\n`;
  }
  
  return entry;
}

function main() {
  console.log('🔍 PATKID 프로젝트 변경사항 분석 중...');
  
  const changes = getGitChanges();
  if (!changes) return;
  
  console.log(`📝 ${changes.files.length}개 파일 변경 감지`);
  
  const analysis = analyzeChanges(changes);
  
  console.log('📄 문서 업데이트 중...');
  updateCLAUDE_MD(analysis);
  updateREADME(analysis);
  
  console.log('🎉 문서 업데이트 완료!');
}

main();