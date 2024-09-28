import { useState } from 'react'
import Login from './pages/login/Login'
import SignUp from './pages/signup/Signup'
import Home from './pages/home/Home'
function App() {

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center min-w-96 mx-auto">
        {/* <Login /> */}
        {/* <SignUp /> */}
        <Home />
      </div>

    </>
  )
}

export default App
