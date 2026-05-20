import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Myapp from './Myapp.jsx'
// import Com1 from './Comp1.jsx'
// import Comp2 from './Comp2.jsx'
// import Con3 from './Con3.jsx'
// import Mf1  from './Mf1.jsx'
// import Mf2 from './Mf2'
import Parent from './Parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Myapp/> */}
    {/* <Com1/> */}
      {/* <Comp2/> */}
      {/* <Con3/> */}
      {/* <Mf2/> */}
      <Parent/>
  </StrictMode>,
)
