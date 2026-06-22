import { useContext, Fragment } from 'react'
import { ContentsContext } from '../App'
import { CurrentContentContext } from '../App'
import { CurrentResourceContext } from '../App'

import { VscArrowSmallLeft } from "react-icons/vsc";

import ContentsOrigin from './contents-origin.jsx'

export default function Contents() {

    const contents = useContext(ContentsContext)
    const { currentContent, setCurrentContent } = useContext(CurrentContentContext)
    const { currentResource, setCurrentResource } = useContext(CurrentResourceContext)

    return (
        <>
            {currentContent === '' && (
                <ContentsOrigin/>
            )}
            {currentContent !== '' && currentResource == '' && contents.map((unit) => unit.chapters.map((chapter) => chapter.topics.map((topic) => {
                if (topic.topic === currentContent) {
                    return (
                        <Fragment key={topic.topic}>
                            {currentContent !== '' && <button className='contents-go-back-btn' onClick={() => setCurrentContent('')}><VscArrowSmallLeft size={24} color="var(--text)"/></button>}
                            <h1 className='contents-topic-detail'>{topic.topic} {topic.topicName}</h1>
                            <span className='contents-topic-detail'>{topic.resources.length} resource{topic.resources.length !== 1 ? 's' : ''} available for this topic</span>
                            {topic.resources.length > 0 && (
                                <>
                                    <h2 className='contents-topic-detail'>Resources:</h2>
                                    <div className='contents-topic-resource-boxes-wrapper'>
                                        {topic.resources.map((resource, index) => (
                                            <div key={resource.resourceName} className="contents-topic-resource-box" onClick={() => { setCurrentResource(resource.resource)}}>
                                                <h3>{resource.resourceName}</h3>
                                                <span>Type: {resource.resourceType}</span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </Fragment>
                    )
                }
            })))}
            {currentResource !== '' && (
                <>
                    {currentContent !== '' && <button className='contents-go-back-btn' onClick={() => setCurrentResource('')}><VscArrowSmallLeft size={24} color="var(--text)"/></button>}
                    {currentResource}
                </>
            )}
        </>
    )

}