import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Card from './cards.jsx' // Card component
import Colors from './bgc_changer.jsx' // background color changer
import Myapp from './password_generator.jsx' // password generator
import Myapp2 from './currency_converter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <Myapp2 />

  </StrictMode>,
)
