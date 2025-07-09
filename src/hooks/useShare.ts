import { useCallback } from "react";

interface ShareOptions {
  title?: string;
  text?: string;
  url?: string;
}

export const useShare = () => {
  const shareViaWebAPI = useCallback(async (options: ShareOptions) => {
    if (!navigator.share) return false;
    
    try {
      await navigator.share(options);
      return true;
    } catch (error) {
      console.log("Share cancelled or failed:", error);
      return false;
    }
  }, []);

  const copyToClipboard = useCallback(async (text: string) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (error) {
        console.error("Clipboard copy failed:", error);
        return false;
      }
    }
    return false;
  }, []);

  const fallbackCopy = useCallback((text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    textArea.style.top = "0";
    textArea.style.left = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      console.error("Fallback copy failed:", err);
      document.body.removeChild(textArea);
      return false;
    }
  }, []);

  const share = useCallback(async (options: ShareOptions) => {
    const shareUrl = options.url || window.location.href;
    
    // Try native share first (mobile)
    const webShareSuccess = await shareViaWebAPI(options);
    if (webShareSuccess) return;

    // Try clipboard copy (desktop)
    const clipboardSuccess = await copyToClipboard(shareUrl);
    if (clipboardSuccess) {
      return;
    }

    // Fallback method
    const fallbackSuccess = fallbackCopy(shareUrl);
    if (!fallbackSuccess) {
      prompt("링크를 복사하세요:", shareUrl);
    }
  }, [shareViaWebAPI, copyToClipboard, fallbackCopy]);

  return { share };
};