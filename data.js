export const questions = [
  {
    number: '01',
    question: '친구가 요즘 핫플이라고 같이 가자고하면?',
    choices: [
      { text: '사람 많을 것 같은데..', value: 'i' },
      { text: '오 사진 ㄱㄱ 어딘데? ', value: 'e' }
    ]
  },
  {
    number: '02',
    question: '핫플거리에서 누군가가 인터뷰해주면 티켓을 준다고 한다면',
    choices: [
      { text: '일단 무슨 질문이냐고 물어본다', value: 'i' },
      { text: '살며시 웃으며 그냥 지나가버린다', value: 'e' }
    ]
  },
  { 
    number: '03',
    question: '이벤트에 당첨돼서 전시회 티켓 한 장이 생긴 나는',
    choices: [
      { text: '한 장 뿐이네.. 쩔수없.. 주변에 혼밥할 곳을 찾아본다.', value: 'i' },
      { text: '내 친구를 설득해서 같이 갈 전시회 티켓을 사게 만든다', value: 'e' }
    ]
  },
  { 
    number: '03',
    question: '블로그에서 최강 맛집을 찾았는데, 웨이팅이 너무 길 때 나는',
    choices: [
      { text: '그냥 다른데 갈까? 언젠가 또 올 날이 있겠지', value: 's' },
      { text: '야 여기 진짜 맛있나보다 무조건 먹어야할 듯', value: 'n' }
    ]
  },
  { 
    number: '03',
    question: '인스타에서 가고싶은 핫플을 발견한 나는',
    choices: [
      { text: '사진을 캡쳐해서 같이 갈 사람을 모집한다', value: 's' },
      { text: '사진을 보며 즐기고 있는 나를 상상하며 설레한다', value: 'n' }
    ]
  },
  { 
    number: '03',
    question: '소품샵에서 오픈기념으로 선물을 준다고 하면 나는',
    choices: [
      { text: '그나마 그 중에 쓸만할 것 같은 귀염뽀짝한 메모장선택3_1', value: 's' },
      { text: '귀염뽀짝해서 책상위에 올려놓으면 흐뭇할 것 같은 미니어처', value: 'n' }
    ]
  },
  { 
    number: '03',
    question: '지방에서 올라온 친구, 서울 스팟을 찾아 일정을 짠 나에게 힘나게 하는 말은?',
    choices: [
      { text: '알아보느라 고생했네 밥은 내가 살게', value: 't' },
      { text: '센스 짱이다 어떻게 이런 곳을 발견했어?', value: 'f' }
    ]
  },
  { 
    number: '03',
    question: '오늘 다녀온 전시회가 어땠는지 묻는 친구에게 나는',
    choices: [
      { text: '돈 주고 한번쯤은 가볼만 한 곳인 것 같애.', value: 't' },
      { text: '작가의 갬성이 담긴 사진들을 보니까 마음이 편안해지더라', value: 'f' }
    ]
  },
  { 
    number: '03',
    question: '핫플에서 사람들에게 치여 넘어진 친구에게 나는',
    choices: [
      { text: '걸을 수 있겠어? 밴드 사다줄까?', value: 't' },
      { text: '헐 어떡해 괜찮아? 다친데 없어?', value: 'f' }
    ]
  },
  { 
    number: '03',
    question: '이번주 주말 약속이 잡힌 나는',
    choices: [
      { text: '알찬 하루를 보내기 위해 요즘 핫플이 어딘지 인스타를 열심히 서칭하고 리스트를 뽑아본다', value: 'j' },
      { text: '내가 아닌 다른 누군가가 요즘 괜찮은 핫플로 날 데려가주겠지 믿어본다', value: 'p' }
    ]
  },
  { 
    number: '03',
    question: '친구가 갑자기 오늘 아침에 나오라고 한다면',
    choices: [
      { text: '아놔 나 오늘 ##할려했는데 .. 고민되게하네', value: 'j' },
      { text: '무조건이지 ㅇㄷ갈까', value: 'p' }
    ]
  },
  { 
    number: '03',
    question: '핫플거리에서 시간이 남아 뭐 할지 고민될 때',
    choices: [
      { text: '네이버를 켜서 마땅히 할 것을 검색한다', value: 'j' },
      { text: '일단 사람많은 곳으로 가본다', value: 'p' }
    ]
  },
];

export const results = [
  {
    title: '출근 시간은<br>내가 정해!',
    character: '/images/result_character1.png',
    results: [
      '혼자서 멘탈 케어가 가능해요!<br>소속이 없어도, 벌이가 불안정해도 저는 지금이 좋아요!',
      '일에 대한 욕심이 많아요.<br>행복한 야근이라고 할 수 있어요!',
      '자유로운 환경에서 더 잘해요!<br>하지만 누구보다 스스로 시간 관리가 철저해요:)',
      '리더십 있다는 소리를 자주 들어요.<br>추진력이 있는 편이죠~ (뿌듯)'
    ],
    jobs: ['프리랜서', '창업가'],
    lectureImg: '/images/result_lecture1.png',
    lectureUrl: 'https://bit.ly/3Wr0kt6'
  },
  // 나머지 결과들...
];

export const mbtis = {
  entj: 0,
  entp: 1,
  estp: 2,
  esfp: 3,
  esfj: 4,
  enfj: 5,
  infp: 6,
  isfp: 7,
  isfj: 8,
  infj: 9,
  estj: 10,
  istp: 11,
  intj: 12,
  intp: 13,
  istj: 14,
  enfp: 15
};