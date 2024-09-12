import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LayOut from './components/LayOut.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LayOut>
      <App />
    </LayOut>
  </BrowserRouter>,
)
