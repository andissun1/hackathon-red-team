import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import style from './modal.module.css';
import { Title } from '../../Shared/Title/Title';
import { Text } from '../../Shared/Text/Text';
import { Button } from '../../Shared/Button/Button';

export const Modal = () => {
  // Все данные для отображения получаем {} и рисуем HTML
  const modalParams = useSelector((store) => store.app.modal);

  const closeModal = () => modalParams.onClose();
  const confirm = () => modalParams.onConfirm();

  const modalLayoyt = modalParams && (
    <div className={style.modalContainer} onClick={closeModal}>
      {modalParams && (
        <div className={style.modal}>
          <Title>{modalParams.title}</Title>
          {modalParams.description && <Text>{modalParams.description}</Text>}
          <Button onClick={confirm}>Подтвердить</Button>
          <Button cancel={true} onClick={closeModal}>
            Отмена
          </Button>
          <button className={style.closeModal} onClick={closeModal}>
            X
          </button>
        </div>
      )}
    </div>
  );

  return createPortal(modalLayoyt, document.getElementById('modal'));
};
