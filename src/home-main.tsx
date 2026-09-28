import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CedroadHome } from './pages/CedroadHome'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CedroadHome />
  </StrictMode>,
)
