import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.item}>
              <Contact name={name} number={number} id={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
