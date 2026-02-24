import PrimaryButton from "./PrimaryButton"

const Slider = () => {
    return (
        <div className="slider">
            <img className="firstimg" src="/Image/Group 48.png" alt="firstimg"></img>

            {/* Card */}
            <div className="page1-card">
                <div style={{ display: 'flex', justifyContent: "space-around", paddingTop: '0.5%' }}>
                    <div style={{ display: 'flex' }}>
                        <p className="select">Project Type</p>
                        <img className="downimg" src="/Image/down.png" alt="select" />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <p className="select">Location</p>
                        <img className="downimg" src="/Image/down.png" alt="location" />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <p className="select">Status</p>
                        <img className="downimg" src="/Image/down.png" alt="downimg" />
                    </div>
                </div>
                <div className="search">
                    <p className="project">Search by Project Name</p>
                    <div className="search-button" >
                        <PrimaryButton text={'Search'} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Slider
