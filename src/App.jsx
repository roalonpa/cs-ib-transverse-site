import { useState } from 'react'
import { createContext } from 'react'
import './App.css'

import Navbar from './Structural/Navbar/navbar'
import Home from './Home/home'
import Contents from './Contents/contents'
import Guide from './Guide/guide'

import {contents} from './contents-data.jsx'

export const ContentsContext = createContext(contents)
export const NavbarContext = createContext('home')
export const CurrentContentContext = createContext('')
export const CurrentResourceContext = createContext('')

export default function App() {

  const [navOpen, setNavOpen] = useState(false)
  const [navCurrent, setNavCurrent] = useState('home')
  const [currentContent, setCurrentContent] = useState('')
  const [currentResource, setCurrentResource] = useState('')

  return (
    <ContentsContext.Provider value={contents}>
    <CurrentContentContext.Provider value={{ currentContent, setCurrentContent }}>
    <CurrentResourceContext.Provider value={{ currentResource, setCurrentResource }}>
    <NavbarContext.Provider value={{ navCurrent, setNavCurrent, navOpen, setNavOpen }}>
      <section className="app">
        <Navbar/>
        <main className={`${navCurrent === 'contents' ? 'main-contains-content' : ''}`}> 
        <div>
          {navCurrent === 'home' && <Home/>}
          {navCurrent === 'contents' && <Contents/>}
          {navCurrent === 'guide' && <Guide/>}
        </div>
        </main>
      </section>
    </NavbarContext.Provider>
    </CurrentResourceContext.Provider>
    </CurrentContentContext.Provider>
    </ContentsContext.Provider>
  )
}