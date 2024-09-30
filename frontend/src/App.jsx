import { useState } from 'react'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from './context/AuthContext';

function App() {
  const {authUser, setAuthUser} = useAuthContext();

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<ToastContainer />
		</div>
    </>
  )
}

export default App
