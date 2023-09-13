import { useSelector } from 'react-redux/es/hooks/useSelector';
import css from './ContactList.module.css';

import Contact from 'components/Contact/Contact';
import { getContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.contacts.filter);
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ul className={css.contacts__list}>
      {filteredContacts.map(({ id, number, name }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default ContactList;
