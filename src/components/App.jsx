import  { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import {  getIsLoading } from "redux/selectors";
import Layout from "./Layout/Layout";
import Home from "Pages/Home/Home";
import Contacts from "Pages/Contacts/Contacts";
import Login from "Pages/Login/Login";
import Register from "Pages/Register/Register";

const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  useEffect(() => {
   dispatch(fetchContacts())
 }, [dispatch])

    return (
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          
          <Route path='contacts' element={<Contacts/>}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register/>}></Route>
             
          

          <Route path="*" element={<Home />} />
        </Route>
        </Routes>
      </Suspense>
      
    )

  }



export default App

{/* <Container>
        <h1>PhoneBook</h1>
        <Section>
          
          <Form/>
        </Section>
        <Section title="Contacts" >
          <Filter />
          {isLoading && <h2>Loading...</h2>}
          < ContactList/>
        </Section>
      </Container> */}
