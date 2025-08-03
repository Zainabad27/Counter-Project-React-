import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Card from './cards.jsx'
import Colors from './bgc_changer.jsx'
import Myapp from './password_generator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <Myapp />

  </StrictMode>,
)
