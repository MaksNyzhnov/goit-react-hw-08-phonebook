import  { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";

import { refreshCurrentUser } from "redux/auth/auth-operations";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import Layout from "./Layout/Layout";


const Home = lazy(() => import('../Pages/Home/Home'));
const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));
const Login = lazy(() => import('../Pages/Login/Login'));
const Register = lazy(() => import('../Pages/Register/Register'));
const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
   dispatch(fetchContacts())
 }, [dispatch])

  useEffect(() => {dispatch(refreshCurrentUser())}, [dispatch])
    return (
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route element={<PublicRoute />}>

            
              
            <Route index element={<Home />} />
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
              
        

          </Route>
          <Route element={<PrivateRoute redirectTo={'/login'} />}>
            <Route path='contacts' element={<Contacts />}></Route>
          </Route>
            <Route path="*" element={<Home />} />
            </Route>
        </Routes>
      </Suspense>
      
    )

  }

  


export default App

