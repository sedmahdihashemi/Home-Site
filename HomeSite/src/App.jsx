import { useState } from 'react'
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import PostAd from './pages/PostAd'
import PostProvider from './store/Store'
import LayOut from './components/LayOut.jsx'
function App() {
  

  return (
    <PostProvider>
      <LayOut>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/postad' element={<PostAd />} />
    </Routes>
      </LayOut>
    </PostProvider>
  )
}

export default App
