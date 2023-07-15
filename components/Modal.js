import { useEffect, useRef, useState } from 'react';
import styles from './modal.module.css';

const Modal = ({ setModalOpen}) => {
  const closeModal = () => {
      setModalOpen(false);
      console.log('닫기')
  };

  //4초뒤 사라짐
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setShowImage(false);
    }, 4000);

    return () => clearTimeout(imageTimer);
  }, []);



  const modalRef = useRef(null);

  useEffect(()=>{

    const handler = (event) => {
      if(modalRef.current && !modalRef.current.contains(event.target)){
        setModalOpen(false);
      }
    };


      document.addEventListener('mousedown',handler);

      return () => {
        document.removeEventListener('mousedown', handler);};
    }, [setModalOpen]);

  

  return (

    <div className={styles['modal-back']}>
      <div ref={modalRef} className={styles['modal-container']}>
        <img src='modal_box.png' className={styles['modal-content']}/>
        <div onClick={closeModal}>
        <img src='close_btn.png' onClick={closeModal} className={styles['modal_close']}/>
        </div>
        <div>
        <p className={styles['modal_title']}>시가를 피우는 너구리</p>
        <div>
        {showImage && <img src='/tooltip.png' className={styles['modal_tooltip']}/>}
        </div>
          <img src='/dice.png' className={styles['modal_dice']}/>
            <div className={styles['modal_img']}>
              <img src='/spotImg.png'/>
            </div>
          <div className={styles['modal_hash']}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles['modal-line']}></div>
          <div className={styles['modal-result']}>하이용</div>
          </div>
        </div>
      </div>
  );
};

export default Modal;
