import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { editContact } from '../../redux/contacts/operations';
import css from './EditContactModal.module.css';

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

export default function EditContactModal({ isOpen, onClose, contact }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleEdit = () => {
    dispatch(editContact({ contactId: contact.id, name, number }));
    onClose();
    toast.success('Contact successfully edited');
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Edit Contact Modal"
      className={css.wrapModal}
    >
      <div>
        <h2 className={css.titleModal}>Edit Contact</h2>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
        <input
          className={css.input}
          type="text"
          name="number"
          value={number}
          onChange={handleChangeNumber}
        />
        <button className={css.btnModal} onClick={handleEdit}>
          Save Changes
        </button>
        <button className={css.btnModal} onClick={onClose}>
          Cancel
        </button>
      </div>
      {/* <div>
        <h2>Edit Contact</h2>
        <input type="text" name="name" value={editedContact.name} onChange={handleChange} />
        <input type="text" name="number" value={editedContact.number} onChange={handleChange} />
        <button className={css.btnModal} onClick={handleSubmit}>
          Save Changes
        </button>
        <button className={css.btnModal} onClick={onClose}>
          Cancel
        </button>
      </div> */}
    </Modal>
  );
}

{
  /* <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
  <Form className={css.form}>
    <div className={css.div}>
      <label htmlFor={nameFieldId} className={css.label}>
        <IoIosContact size="24" />
        Name
      </label>
      <Field className={css.field} type="text" name="name" id={nameFieldId} />
      <ErrorMessage className={css.error} name="name" component="span" />
    </div>

    <div className={css.div}>
      <label htmlFor={numberFieldId} className={css.label}>
        <IoIosCall size="24" />
        Number
      </label>
      <Field className={css.field} type="tel" name="number" id={numberFieldId} />
      <ErrorMessage className={css.error} name="number" component="span" />
    </div>

    <button className={css.btn} type="submit">
      <IoMdPersonAdd className={css.svg} />
      Add contact
    </button>
  </Form>
</Formik>; */
}
