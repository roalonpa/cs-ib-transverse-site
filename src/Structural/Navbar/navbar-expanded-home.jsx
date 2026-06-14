

export default function NavbarExpandedHome() {

    const today = new Date()
    const targetdate = new Date("2027-11-1")
    const difference = targetdate - today
    const daysdifference = Math.floor(difference / (1000 * 60 * 60 * 24))
    let message = ''

    if (daysdifference > 0) {
        message = "days for the exam"
    } else {
        message = "days since the exam"
    }

    return (
        <>
            <div className="nav-expanded-home-box title">
                <span>IB Computer Science (HL)</span>
            </div>
            <div className="nav-expanded-home-box countdown">
                <span><span>{Math.abs(daysdifference)}</span> {message}</span>
            </div>
            <div className="nav-expanded-home-box site-info">
                <span>What is this site about?</span>
                <p>This site is the proof of Rocio's journey in IB Computer Science (HL). It contains all types of resources, projects, class activities, artifacts, and more. It serves as a record of her progress and achievements. Hope you find it useful!</p>
            </div>
        </>
    )
}