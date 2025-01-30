import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import History from './components/History.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <History />
  </StrictMode>,
)
