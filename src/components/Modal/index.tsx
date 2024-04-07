import { Place } from "@/models/place";
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
  handleOpen: (isOpen: boolean) => () => void;
};

const Modal = ({ handleOpen, data }: ModalProps) => {
  console.log(data);

  return (
    <div className={modalBackDropStyle} onClick={handleOpen(false)}>
      <div className={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
        <img src="modal_box.webp" className={modalBackgroundStyle} />
        <button onClick={handleOpen(false)}>
          <img src="close_btn.webp" className={modalCloseStyle} />
        </button>
        <div className={modalContentStyle}>
          <p className={modalTitleStyle}>{data.name}</p>
          <div></div>
          <div className={modalImgBoxStyle}>
            <img className={modalImgStyle} src={data.imageUrl} />
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
