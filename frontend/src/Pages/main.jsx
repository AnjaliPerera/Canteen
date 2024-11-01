import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Food from './Food.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Food />
  </StrictMode>,
)
