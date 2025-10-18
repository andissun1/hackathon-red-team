import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import style from './modal.module.css';

export const Modal = () => {
  // Все данные для отображения получаем {} и рисуем HTML
  const modalParams = useSelector((store) => store.app.modal);

  const closeModal = () => modalParams.onClose();
  const confirm = () => modalParams.onConfirm();

  console.log(modalParams);

  const modalLayoyt = modalParams && (
    <div className={style.modalContainer} onClick={closeModal}>
      {modalParams && (
        <div className={style.modal}>
          <h2>{modalParams.title}</h2>
          <p>{modalParams.description}</p>
          <button onClick={confirm}>Подтвердить</button>
          <button onClick={closeModal}>Отмена</button>
          <button className={style.closeModal} onClick={closeModal}>
            X
          </button>
        </div>
      )}
    </div>
  );

  return createPortal(modalLayoyt, document.getElementById('modal'));
};
