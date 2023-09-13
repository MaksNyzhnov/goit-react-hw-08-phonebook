import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={css.contact_name}>
      <div className={css.contacts__list__item__content}>
        <span>
          {name}: {number}
        </span>
        <button
          type="button"
          className={css.delete_btn}
          onClick={onDeleteContact}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
export default Contact;
