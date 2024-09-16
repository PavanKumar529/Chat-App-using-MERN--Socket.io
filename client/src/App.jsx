import './App.css'
import Home from './pages/home/Home'
import {Route, Routes } from 'react-router-dom'
import Login from './pages/signin/Login'
import Register from './pages/signup/Register'

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Register />
      <Login />
      <Home /> */}
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
