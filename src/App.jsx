import { useState } from 'react'
import { createContext } from 'react'
import './App.css'

import Navbar from './Structural/Navbar/navbar'
import Home from './Home/home'

import {contents} from './contents-data.js'

export const ContentsContext = createContext(contents)
export const NavbarContext = createContext('home')

export default function App() {

  const [navOpen, setNavOpen] = useState(false)
  const [navCurrent, setNavCurrent] = useState('home')

  return (
    <ContentsContext.Provider value={contents}>
    <NavbarContext.Provider value={{ navCurrent, setNavCurrent, navOpen, setNavOpen }}>
      <section className="app">
        <Navbar/>
        <main>
          {navCurrent === 'home' && <Home/>}
        </main>
      </section>
    </NavbarContext.Provider>
    </ContentsContext.Provider>
  )
}