import { useEffect, useRef, useState } from "react";
import styles from "./modal.module.css";

const Modal = ({ handleOpen, data }) => {
  return (
    <div className={styles["modal-back"]} onClick={handleOpen(false)}>
      <div
        className={styles["modal-container"]}
        onClick={(e) => e.stopPropagation()}
      >
        <img src="modal_box.webp" className={styles["modal-content"]} />
        <button onClick={handleOpen(false)}>
          <img src="close_btn.webp" className={styles["modal_close"]} />
        </button>
        <div>
          <p className={styles["modal_title"]}>{data.name}</p>
          <div>
          </div>
          <div className={styles["modal_img"]}>
            <img src={data.imageUrl} />
          </div>
          <div className={`${styles["modal_hash"]}`}>
            {data.tags.map((v, index) => (
              <p className='isaText modal_hashtag' key={`hotspot-modal-${index}`}>#{v.tag}</p>
            ))}
          </div>
          <div className={styles["modal-line"]}></div>
          <div className={styles["modal-result"]}>
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
