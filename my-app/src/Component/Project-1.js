import { useLocation } from "react-router-dom"
import Project2 from "./Project-2"
import Project3 from "./Project-3"
import Project4 from "./Project-4"
import { useEffect, useState } from "react"

const Project1 = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id'); // This will get "2"
    const slug = queryParams.get('slug'); // This will get "2"
    console.log("slug", slug)

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://admin.wallfortproperties.com/wp-json/wp/v2/project?slug=${slug}`)
            .then((response) => response.json())
            .then((json) => { setData(json) })
    }, [])
    console.log("data=====>>>", data)

    return (
        <div>
            <img className="project-img" src="/Image/First-Card.jpg" alt="project" />

            <Project2 currentData={data} />

            <Project3 currentData={data[0]} />

            <Project4 currentData={data} />

        </div>
    )
}

export default Project1
