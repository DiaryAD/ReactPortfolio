import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import History from './components/History.jsx'
import NavbarTop from './components/NavbarTop.jsx'
import Contact from './components/Contact.jsx'
import FooterBottom from './components/FooterBottom.jsx'
import Tech from './components/Tech.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NavbarTop/>
        <History/>
        <Tech />
        <Contact/>
        <FooterBottom/>

    </StrictMode>,
)
