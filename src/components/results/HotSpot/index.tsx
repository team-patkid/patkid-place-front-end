import { useState, useCallback } from "react";
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
};

const hotSpot = ({ hotPlaces }: hotSpotProps) => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const handleOpenModal = useCallback((place: Place) => {
    setSelectedPlace(place);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPlace(null);
  }, []);

  const createModalHandler = useCallback((isOpen: boolean) => () => {
    if (!isOpen) {
      handleCloseModal();
    }
  }, [handleCloseModal]);

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
          <div 
            key={`hotspot-${item.placeId}`}
            className={hotSpotImageBoxStyle} 
            onClick={() => handleOpenModal(item)}
          >
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
        ))}
      </div>

      {selectedPlace && (
        <Modal 
          handleOpen={createModalHandler} 
          data={selectedPlace} 
        />
      )}
    </div>
  );
};

export default hotSpot;
