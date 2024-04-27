import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <li className={css.contactWrapper}>
      <div>
        <h2 className={css.userInfo}>
       <FaUser size={18} /> {name}
        </h2>
        <p className={css.userInfo}>
          <FaPhone size={18} /> {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}
export default Contact;