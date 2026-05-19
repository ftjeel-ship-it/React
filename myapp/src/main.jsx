import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Myapp from './Myapp.jsx'
import Com1 from './Comp1.jsx'
import Comp2 from './Comp2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Myapp/> */}
    {/* <Com1/> */}
      <Comp2/>
  </StrictMode>,
)
