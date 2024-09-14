import { useState } from 'react'
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import PostAd from './pages/PostAd'
import PostProvider from './store/Store'
import LayOut from './components/LayOut.jsx'
import {toast , ToastContainer, Zoom} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import OneHome from './pages/OneHome.jsx'

function App() {
  

  return (
    <PostProvider>
      <LayOut>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/postad' element={<PostAd />} />
      <Route path='/OneHome/:id' element={<OneHome />} />
    </Routes>
      </LayOut>
      <ToastContainer position='top-center' theme='colored' transition={Zoom}></ToastContainer>
    </PostProvider>
  )
}

export default App

// npx json-server --watch HomeSite/src/data/db.json --port 8000
