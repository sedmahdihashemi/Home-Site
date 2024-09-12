import { useState } from 'react'
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

function App() {
  const [isLogin , setIsLogin] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
    
    </Routes>
  )
}

export default App
