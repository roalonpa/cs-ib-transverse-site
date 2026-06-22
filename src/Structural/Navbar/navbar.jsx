import { useState } from "react";
import { useContext } from "react";

import { VscLayoutActivitybarLeft } from "react-icons/vsc";
import { VscLayoutActivitybarRight } from "react-icons/vsc";
import { VscHome } from "react-icons/vsc";
import { VscFolder } from "react-icons/vsc";
import { VscSymbolFile } from "react-icons/vsc";

import NavbarExpandedHome from "./navbar-expanded-home";
import NavbarExpandedContents from "./navbar-expanded-contents";
import { NavbarContext } from "../../App";
import { CurrentContentContext } from "../../App";
import { CurrentResourceContext } from "../../App";

export default function Navbar() {

    const { navCurrent, setNavCurrent, navOpen, setNavOpen } = useContext(NavbarContext)
    const { setCurrentContent } = useContext(CurrentContentContext)
    const { setCurrentResource } = useContext(CurrentResourceContext)

    return (
        <>
            <nav className={`navbar ${navOpen ? 'open' : ''}`}>
                <button onClick={() => setNavOpen(!navOpen)} className="nav-menu-btn toggle">{navOpen ? <VscLayoutActivitybarRight size={18} color="var(--text)"/> : <VscLayoutActivitybarLeft size={18} color="var(--text)"/>}</button>
                <button className={`nav-menu-btn ${navCurrent === 'home' ? 'current' : ''}`} onClick={() => setNavCurrent('home')} id="home-nav-btn"><VscHome size={22} color="var(--text)"/></button>
                <label htmlFor="home-nav-btn" className="nav-btn-label">Home</label>
                <button className={`nav-menu-btn ${navCurrent === 'contents' ? 'current' : ''}`} onClick={() => { setNavCurrent('contents'); setCurrentContent(''); setCurrentResource(''); }} id="contents-nav-btn"><VscFolder size={22} color="var(--text)"/></button>
                <label htmlFor="contents-nav-btn" className="nav-btn-label">Contents</label>
                <button className={`nav-menu-btn ${navCurrent === 'guide' ? 'current' : ''}`} onClick={() => setNavCurrent('guide')} id="guide-nav-btn"><VscSymbolFile size={22} color="var(--text)"/></button>
                <label htmlFor="guide-nav-btn" className="nav-btn-label">Guide</label> 
            </nav>
            <div className={`nav-expanded ${navOpen ? 'open' : ''}`}>
                {navCurrent === 'home' &&
                    <NavbarExpandedHome/>
                }
                {navCurrent === 'contents' &&
                    <NavbarExpandedContents/>
                }
            </div> 
        </>
    )
}