import React from "react";

type WebShareButtonProps = {
  title?: string;
  text?: string;
  url?: string;
  style?: React.CSSProperties;
  className?: string;
  src: string;
};

const WebShareButton = ({ 
  title = "두근두근 핫스팟 테스트 in seoul", 
  text = "나의 성향에 딱 맞는 요즘 핫스팟은 어디일까?", 
  url, 
  style, 
  className,
  src 
}: WebShareButtonProps) => {
  const handleShare = async () => {
    const shareUrl = url || window.location.href;
    
    // 네이티브 웹 공유 API 지원 확인 (주로 모바일)
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        });
        console.log("공유 성공");
      } catch (error) {
        console.log("공유 취소됨", error);
      }
    } 
    // 클립보드 API 지원 확인 (웹 브라우저)
    else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("링크가 클립보드에 복사되었습니다!");
      } catch (error) {
        console.error("클립보드 복사 실패:", error);
        fallbackCopyToClipboard(shareUrl);
      }
    } 
    // 대체 방법: 텍스트 선택 후 복사
    else {
      fallbackCopyToClipboard(shareUrl);
    }
  };

  // 대체 클립보드 복사 방법
  const fallbackCopyToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        alert("링크가 클립보드에 복사되었습니다!");
      } else {
        prompt("링크를 복사하세요:", text);
      }
    } catch (err) {
      console.error("복사 실패:", err);
      prompt("링크를 복사하세요:", text);
    }

    document.body.removeChild(textArea);
  };

  return (
    <img
      className={className}
      style={{
        cursor: "pointer",
        ...style,
      }}
      src={src}
      onClick={handleShare}
      alt="공유하기"
    />
  );
};

export default WebShareButton;