import React, { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

type MapProps = {
  isLoading: boolean;
  resultData: any;
};

const Map = ({ isLoading, resultData }: MapProps) => {
  const handleMapClick = () => {
    if (
      resultData &&
      resultData.data &&
      resultData.data.result.place.naverUrl
    ) {
      window.location.href = resultData.data.result.place.naverUrl;
    }
  };

  useEffect(() => {
    if (!isLoading && resultData) {
      const script = document.createElement("script");
      script.src =
        "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ljyaizmmy4";
      script.async = true;
      script.onload = () => {
        const mapOptions = {
          center: new window.naver.maps.LatLng(
            resultData.data.result.place.y,
            resultData.data.result.place.x
          ),
          zoom: 15,
        };

        const map = new window.naver.maps.Map("map", mapOptions);

        const markerOptions = {
          position: new window.naver.maps.LatLng(
            resultData.data.result.place.y,
            resultData.data.result.place.x
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
  }, [isLoading, resultData]);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};

export default Map;
