import Map from "@components/Map";
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
        <img className={locationIconStyle} src="/location.webp" />
        <p className={locationTitleStyle}>위치를 알려줄게!</p>
      </div>
      <div className={locationMapBoxStyle}>
        <img
          className={locationMapBorderStyle}
          src="/box_stroke.webp"
          id="cross"
          draggable={false}
        ></img>
        <div className={locationMapStyle} id="map">
          <Map isLoading={isLoading} result={result} />
        </div>
      </div>
    </div>
  );
};

export default Location;
