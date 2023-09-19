import  { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";

import { refreshCurrentUser } from "redux/auth/auth-operations";
import Layout from "./Layout/Layout";
import Home from "Pages/Home/Home";
import Contacts from "Pages/Contacts/Contacts";
import Login from "Pages/Login/Login";
import Register from "Pages/Register/Register";

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
   dispatch(fetchContacts())
 }, [dispatch])

  useEffect(() => {dispatch(refreshCurrentUser())}, [dispatch])
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

