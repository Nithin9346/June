import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { BrowserRouter } from 'react-router-dom'
// import Main from './03-08-2026/Main.jsx'
import Practice from './04-08-2026/Nested routing/Routing.jsx'
// import Index from './04-08-2026/Dynamic/Index.jsx'
// import Login from './04-08-2026/Navigation/Index.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
 <BrowserRouter>
    <Practice/>
    {/* <Login/> */}
    {/* <Index/> */}
  </BrowserRouter>

 </StrictMode>
)
