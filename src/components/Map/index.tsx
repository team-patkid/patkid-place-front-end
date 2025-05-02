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
    if (result.place.naverUrl) {
      console.log('result.place.naverUrl ::: ', result.place.naverUrl)
      window.location.href = result.place.naverUrl;
    }
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
