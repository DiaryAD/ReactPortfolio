import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import History from './components/History.jsx'
import NavbarTop from './components/NavbarTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <NavbarTop />
    <History />
  </StrictMode>,
)
