import { useState } from 'react'
import './App.css'

import Navbar from './Structural/Navbar/navbar'
import Home from './Home/home'

export default function App() {

  const [navopen, setNavopen] = useState(false)
  const [navCurrent, setNavCurrent] = useState('home')

  return (
    <section className="app">
      <Navbar open={navopen} setOpen={setNavopen} navCurrent={navCurrent} setNavCurrent={setNavCurrent}/>
      <main>
        {navCurrent === 'home' && <Home/>}
      </main>
    </section>
  )
}