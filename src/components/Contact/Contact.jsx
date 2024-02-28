import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { IoIosContact, IoIosCall, IoIosTrash } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import toast from 'react-hot-toast';
import css from './Contact.module.css';

import { deleteContact } from '../../redux/contacts/operations';
import DeleteContactModal from '../DeleteContactModal/DeleteContactModal';
import EditContactModal from '../EditContactModal/EditContactModal';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //видалення
  const handleDeleteContact = contactId => {
    setSelectedContactId(contactId);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(selectedContactId));
    setSelectedContactId(null);
    toast.success(`Contact ${name} deleted successfully`);
  };

  const handleCancelDelete = () => {
    setSelectedContactId(null);
  };

  //редагування
  const handleEdit = contact => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.wrap}>
      <div className={css.infoContacts}>
        <p className={css.text}>
          <IoIosContact className={css.icon} size="24" />
          {name}
        </p>
        <p className={css.text}>
          <IoIosCall className={css.icon} size="24" />
          {number}
        </p>
      </div>
      <div className={css.btnWrap}>
        <button type="button" className={css.btn} onClick={() => handleEdit({ id, name, number })}>
          <FaEdit className={css.icon} size="22" />
        </button>
        <button type="button" className={css.btn} onClick={() => handleDeleteContact(id)}>
          <IoIosTrash className={css.icon} size="25" />
        </button>
      </div>

      {selectedContact && (
        <EditContactModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          contact={selectedContact}
        />
      )}

      <DeleteContactModal
        isOpen={!!selectedContactId}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
