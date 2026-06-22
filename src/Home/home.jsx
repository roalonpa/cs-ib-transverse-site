import { useContext } from "react"
import { ContentsContext } from "../App"
import { NavbarContext } from "../App"

import { VscArrowSmallRight } from "react-icons/vsc";

export default function Home() {

    const contents = useContext(ContentsContext)
    const { setNavCurrent } = useContext(NavbarContext)

    return (
        <section className="home">
            <h1 className="home-title">Computer Science Transverse Site for the IB</h1>
            <div className="home-contents-wrapper">
                {contents.map((unit) => {
                    return (
                        <div className="home-contents-unit" key={unit.unit}>
                            <h2 className="home-contents-unit-title"><span>{unit.unit}</span> {unit.unitName}</h2>
                            <div className="home-contents-chapters-wrapper">
                                {
                                    unit.chapters.map((chapter) => {
                                        return (
                                            <div className="home-contents-chapter" key={chapter.chapter}>
                                                <h3><span>{chapter.chapter}</span> {chapter.chapterName}</h3>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
                <button className="home-contents-unit-more" onClick={() => setNavCurrent("contents")}>
                    <span>Go to contents</span>
                </button>
            </div>
        </section>
    )
}