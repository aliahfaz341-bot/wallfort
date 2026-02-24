import About5 from "../About-5"
import About2 from "./About-2"
import About3 from "./About-3"
import About4 from "./About-4"
import About6 from "./About-6"
import About7 from "./About-7"

const About1 = () => {
    return (
        <div id="about">

            <img className="about-img1" src="/Image/About1.png" alt="img1"/>

            {/* about */}
            <About2 />

            <About3 />

            <About4 />

            <About5 />

            <About6 />

            <About7 />
        </div>
    )
}
export default About1
