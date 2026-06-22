import { useContext } from "react"
import { ContentsContext } from "../../App"
import { CurrentContentContext } from "../../App"
import { span } from "motion/react-client"

export default function NavbarExpandedContents() {

    const contents = useContext(ContentsContext)
    const { setCurrentContent } = useContext(CurrentContentContext)

    return (
        <>
            <h2 className="nav-expanded-contents-title">Contents</h2>
            <ul className="nav-expanded-contents-list units">
            {contents.map((unit) => {
                return (
                    <div className="nav-expanded-contents-unit" key={unit.unit}>
                        <li>{unit.unit}. {unit.unitName}</li>
                        <ul className="nav-expanded-contents-list chapters">
                            {unit.chapters.map((chapter) => {
                                return (
                                    <div className="nav-expanded-contents-chapter" key={chapter.chapter}>
                                        <li>{chapter.chapter}. {chapter.chapterName}</li>
                                        <ul className="nav-expanded-contents-list topics">
                                            {chapter.topics.map((topic) => (<li key={topic.topic} onClick={() => setCurrentContent(topic.topic)}>{topic.topic}. {topic.topicName}</li>))}
                                        </ul>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
            </ul>
            
        </>
    )
}