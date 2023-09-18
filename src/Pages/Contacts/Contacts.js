import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selectors';
import css from './Contacts.module.css';
import Section from 'components/Section/Section';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Section title="Contacts">
      <div className={css.contacts_content}>
        <Form />
        <Filter />
        {isLoading && <h2>Loading...</h2>}
        <ContactList />
      </div>
    </Section>
  );
};

export default Contacts;
