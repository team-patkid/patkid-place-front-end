import React, { useEffect } from "react";
import { Result } from "@/models/result";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

type MapProps = {
  isLoading: boolean;
  result: Result;
};

const Map = ({ isLoading, result }: MapProps) => {
  const handleMapClick = () => {
    const url = result.place.naverUrl;
    if (!url) return;

    console.log('result.place.naverUrl ::: ', url);

    // intent 스킴이면 browser_fallback_url 파싱
    if (url.startsWith('intent://')) {
      const match = url.match(/S\.browser_fallback_url=([^;]+)/);
      if (match && match[1]) {
        const fallbackUrl = decodeURIComponent(match[1]);
        console.log('fallbackUrl ::: ', fallbackUrl);
        window.location.href = fallbackUrl;
        return;
      }
    }

    // 일반 URL 또는 intent parsing 실패 시
    window.location.href = url;
  };

  useEffect(() => {
    if (!isLoading) {
      const script = document.createElement("script");
      script.src =
        "https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=9xwpq60lp1";
      script.async = true;
      script.onload = () => {
        const mapOptions = {
          center: new window.naver.maps.LatLng(result.place.y, result.place.x),
          zoom: 15,
        };

        const map = new window.naver.maps.Map("map", mapOptions);
        const markerOptions = {
          position: new window.naver.maps.LatLng(
            result.place.y,
            result.place.x
          ),
          map: map,
        };

        new window.naver.maps.Marker(markerOptions);

        // 지도 클릭 이벤트 처리
        map.addListener("click", handleMapClick);
      };
      script.onerror = (error) => {
        console.error("Error loading Naver Map script:", error);
      };
      document.body.appendChild(script);
    }
  }, [isLoading, result]);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};

export default Map;
