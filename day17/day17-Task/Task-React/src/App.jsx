// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import GrandPerent from './Components/GrandParent/GrandPerent.jsx'
import Nav from './Components/Nav/Nav.jsx'

function App() {
  return (
    <div >
    <Nav/>
    <GrandPerent/>

    </div>
  )
}

export default App
