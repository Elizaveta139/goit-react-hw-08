import Modal from 'react-modal';
import { customStyles } from '../defaultSettings';
import css from './DeleteContactModal.module.css';

Modal.setAppElement('#root');

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
