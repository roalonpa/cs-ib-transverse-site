import { useContext } from 'react'
import { ContentsContext } from '../App'
import { CurrentContentContext } from '../App'

export default function ContentsOrigin() {

    const contents = useContext(ContentsContext)
    const { setCurrentContent } = useContext(CurrentContentContext)

    return (
        <>
            <h1 className="contents-title">Contents</h1>
            <div className="contents-list units">
            {contents.map((unit) => {
                return (
                    <div className="contents-list-unit" key={unit.unit}>
                        <h2>{unit.unit}. {unit.unitName}</h2>
                        <ul className="contents-list chapters">
                            {unit.chapters.map((chapter) => {
                                return (
                                    <div className="contents-list-chapter" key={chapter.chapter}>
                                        <h3>{chapter.chapter}. {chapter.chapterName}</h3>
                                        <ul className="contents-list topics">
                                            {chapter.topics.map((topic) => (<li key={topic.topic} onClick={() => setCurrentContent(topic.topic)}>{topic.topic}. {topic.topicName}</li>))}
                                        </ul>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
            </div>
        </>
    )
}