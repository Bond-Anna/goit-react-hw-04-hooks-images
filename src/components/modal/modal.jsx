import { useEffect, useCallback } from 'react';
import css from './modal.module.css';
export const Modal = ({ selectedPicture, onCloseModal }) => {
  const handleKeyDown = useCallback(
    e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        onCloseModal();
      }
    },
    [onCloseModal],
  );

  const handleBackdropClick = useCallback(
    e => {
      if (e.target === e.currentTarget) {
        onCloseModal();
      }
    },
    [onCloseModal],
  );
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleBackdropClick);
  }, [handleBackdropClick, handleKeyDown]);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleBackdropClick);
    };
  }, [handleBackdropClick, handleKeyDown]);

  return (
    <div className={css.Overlay} onClick={onCloseModal}>
      <div className={css.Modal}>
        <img src={selectedPicture} alt="" />
      </div>
    </div>
  );
};
