import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);

  return (
    <div className={css.wrap}>
      {contacts.length === 0 && filter === '' ? (
        <p className={css.textNoContacts}>You don`t have any contacts yet</p>
      ) : (
        <ul className={css.list}>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={css.item}>
                <Contact name={name} number={number} id={id} />
              </li>
            );
          })}
        </ul>
      )}
      {contacts.length === 0 && filter !== '' && (
        <p className={css.textNoContacts}>Nothing was found for your request...</p>
      )}
    </div>
  );
}
