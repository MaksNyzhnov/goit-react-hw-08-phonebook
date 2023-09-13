import React, { useEffect } from "react";
import Section from "./Section/Section";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import {  getIsLoading } from "redux/selectors";


const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  useEffect(() => {
   dispatch(fetchContacts())
 }, [dispatch])

    return (
      
      <>
        <h1>PhoneBook</h1>
        <Section>
          
          <Form/>
        </Section>
        <Section title="Contacts" >
          <Filter />
          {isLoading && <h2>Loading...</h2>}
          < ContactList/>
        </Section>
      </>
    )

  }



export default App
