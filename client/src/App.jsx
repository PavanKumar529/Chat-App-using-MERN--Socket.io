import './App.css'
import Home from './pages/home/Home'
import Login from './pages/signin/Login'
import Register from './pages/signup/Register'

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Register />
      <Login />
      <Home />
    </div>
  )
}

export default App
