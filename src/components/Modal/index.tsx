import { Place } from "@/models/place";
import OptimizedImage from "../common/OptimizedImage";
import { getImageAlt } from "@/utils/imageHelpers";
import {
  modalBackDropStyle,
  modalCloseStyle,
  modalContentStyle,
  modalHashSyle,
  modalImgBoxStyle,
  modalImgStyle,
  modalLineStyle,
  modalResultStyle,
  modalTitleStyle,
  modalContainerStyle,
  modalBackgroundStyle,
} from "./Modal.css";

type ModalProps = {
  data: Place;
  handleOpen: (isOpen: boolean, index?: number) => () => void;
};

const Modal = ({ handleOpen, data }: ModalProps) => {
  return (
    <div className={modalBackDropStyle} onClick={handleOpen(false)}>
      <div className={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
        <OptimizedImage 
          src="/modal_box.webp" 
          className={modalBackgroundStyle} 
          alt={getImageAlt("/modal_box.webp")}
          width={467}
          height={821}
        />
        <button onClick={handleOpen(false)} style={{ position: "absolute", top: "20px", right: "20px", background: "none", border: "none", zIndex: 10 }}>
          <OptimizedImage 
            src="/close_btn.webp" 
            className={modalCloseStyle} 
            alt={getImageAlt("/close_btn.webp")}
            width={33}
            height={33}
          />
        </button>
        <div className={modalContentStyle}>
          <p className={modalTitleStyle}>{data.name}</p>
          <div></div>
          <div className={modalImgBoxStyle}>
            <OptimizedImage 
              className={modalImgStyle} 
              src={data.imageUrl} 
              alt={`${data.name} 이미지`}
              width={400}
              height={281}
            />
          </div>
          <div className={modalHashSyle}>
            {data.tags.map((v, index) => (
              <p className="isaText" key={`hotspot-modal-${index}`}>
                #{v.tag}
              </p>
            ))}
          </div>
          <div className={modalLineStyle}></div>
          <div className={modalResultStyle}>
            {data.content.split("\n").map((v, index, array) => (
              <li
                key={index}
                style={{
                  marginBottom: index !== array.length - 1 ? "30px" : "0",
                }}
              >
                {v}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
