import dynamic from "next/dynamic";
import OptimizedImage from "@components/common/OptimizedImage";

const Map = dynamic(() => import("@components/Map"), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '200px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>지도 로딩 중...</div>
});
import { Result } from "@/models/result";
import {
  LocationStyle,
  locationIconStyle,
  locationMapBorderStyle,
  locationMapBoxStyle,
  locationMapStyle,
  locationTitleBoxStyle,
  locationTitleStyle,
} from "./Location.css";

type LocationProps = {
  isLoading: boolean;
  result: Result;
};

const Location = ({ isLoading, result }: LocationProps) => {
  return (
    <div className={LocationStyle}>
      <div className={locationTitleBoxStyle}>
        <OptimizedImage className={locationIconStyle} src="/location.webp" alt="Location icon" width={30} height={30} />
        <p className={locationTitleStyle}>위치를 알려줄게!</p>
      </div>
      <div className={locationMapBoxStyle}>
        <OptimizedImage
          className={locationMapBorderStyle}
          src="/box_stroke.webp"
          alt="Map border"
          width={350}
          height={250}
          draggable={false}
        />
        <div className={locationMapStyle} id="map">
          <Map isLoading={isLoading} result={result} />
        </div>
      </div>
    </div>
  );
};

export default Location;
