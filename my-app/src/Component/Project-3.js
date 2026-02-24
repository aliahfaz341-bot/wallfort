import SimpleSlider from "./projectSlider"

const Project3 = ({ currentData }) => {
    console.log("currentData====>>>>", currentData)
    return (
        <div className="project3">
            <p className="project7-heading">{currentData?.title?.rendered}</p>

            <div className="mobilesize">
                <img className="left" src="/Image/left.png" alt="left" />

                {/* image-1 */}
                <img className="projectimg-pack" src="/Image/Air.png" alt="pack1" />
                <img className="projectimg-pack" src="/Image/Garden.png" alt="pack2" />
                <img className="projectimg-pack" src="/Image/Security.png" alt="pack3" />
                <img className="projectimg-pack" src="/Image/electricity.png" alt="pack4" />
                <img className="right" src="/Image/right.png" alt="right" />
            </div>
            <SimpleSlider className="projectSlider" />
        </div>
    )
}

export default Project3
