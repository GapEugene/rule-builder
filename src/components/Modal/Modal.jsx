import clsx from 'clsx';
import styles from './Modal.module.css';

const Modal = ({ isOpen, handleClose, title, controls, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) handleClose();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop} onClick={handleBackdropClick}>
        <div className={styles.content}>
          <div className={styles.header}>
            <p className="mb-0 h6">{title}</p>
            <button
              className={clsx(styles.close, 'btn btn-outline-secondary px-1 py-0')}
              onClick={handleClose}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className={styles.body}>
            {children}
          </div>
          <div className={styles.controls}>
            {controls && controls()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
