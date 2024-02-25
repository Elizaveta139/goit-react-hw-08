import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { IoIosContact, IoIosCall, IoIosTrash } from 'react-icons/io';
import toast from 'react-hot-toast';
import css from './Contact.module.css';

import { deleteContact } from '../../redux/operations';
import DeleteContactModal from '../DeleteContactModal/DeleteContactModal';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [selectedContactId, setSelectedContactId] = useState(null);

  // const handleDelete = () => dispatch(deleteContact(id));

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

      <button type="button" className={css.btn} onClick={() => handleDeleteContact(id)}>
        Delete
        <IoIosTrash className={css.icon} size="24" />
      </button>

      <DeleteContactModal
        isOpen={!!selectedContactId}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
