import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import OptimizedImage from "@components/common/OptimizedImage";

const Modal = dynamic(() => import("@components/Modal"), {
  ssr: false,
  loading: () => <div>모달 로딩 중...</div>
});
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

const HotSpot = ({ hotPlaces }: hotSpotProps) => {
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
        <OptimizedImage
          className={hotSpotIconStyle}
          src="/hotspot.webp"
          alt="Hotspot icon"
          width={30}
          height={30}
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
            <OptimizedImage
              className={hotSpotImageBorderStyle}
              src="/box_stroke.webp"
              alt="Image border"
              width={200}
              height={150}
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

export default HotSpot;
