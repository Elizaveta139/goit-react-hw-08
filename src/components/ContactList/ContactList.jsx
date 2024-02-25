import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {contacts.map(({ id, name, phone }) => {
          return (
            <li key={id} className={css.item}>
              <Contact name={name} number={phone} id={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
