import Modal from 'react-modal';
import css from './DeleteContactModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '30px',
    transform: 'translate(-50%, -50%)',
    objectFit: 'cover',
    overflow: 'hidden',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
};

export default function DeleteContactModal({ isOpen, onCancel, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      style={customStyles}
      contentLabel="Confirm Modal"
      className={css.wrapModal}
    >
      <h2>Are you sure you want to delete the contact?</h2>
      <button className={css.btnModal} onClick={onConfirm}>
        Confirm
      </button>
      <button className={css.btnModal} onClick={onCancel}>
        Cancel
      </button>
    </Modal>
  );
}
