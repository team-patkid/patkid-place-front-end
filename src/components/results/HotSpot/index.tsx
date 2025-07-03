import { Fragment } from "react";
import Modal from "@components/Modal";
import { Place } from "@/models/place";
import {
  hotSpotIconStyle,
  hotSpotImageBorderStyle,
  hotSpotImageBoxStyle,
  hotSpotImageStyle,
  hotSpotImagesBox,
  hotSpotStyle,
  hotSpotTitleBoxStyle,
  hotSpotTitleStyle,
} from "./HotSpot.css";

type hotSpotProps = {
  hotPlaces: Place[];
  isOpen: boolean;
  openModal: (isOpen: boolean) => () => void;
};

const hotSpot = ({ isOpen, hotPlaces, openModal }: hotSpotProps) => {
  return (
    <div className={hotSpotStyle}>
      <div className={hotSpotTitleBoxStyle}>
        <img
          className={hotSpotIconStyle}
          src="/hotspot.webp"
          draggable={false}
        />
        <p className={hotSpotTitleStyle}>가장 많은 선택을 받은 핫스팟</p>
      </div>

      <div className={hotSpotImagesBox}>
        {hotPlaces?.map((item) => (
          <Fragment key={`hotspot-${item.placeId}`}>
            <div className={hotSpotImageBoxStyle} onClick={openModal(true)}>
              <img
                className={hotSpotImageStyle}
                src={item.imageUrl}
                draggable={false}
              />
              <img
                className={hotSpotImageBorderStyle}
                src="/box_stroke.webp"
                draggable={false}
              />
            </div>
            {isOpen && <Modal handleOpen={openModal} data={item} />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default hotSpot;
