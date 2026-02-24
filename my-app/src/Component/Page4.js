import React, { useState } from "react";
const projects = [
    {
        title: "Wallfort Omega",
        subtitle1: "High Street Shops & Office Spaces",
        subtitle2: "New Rajendra Nagar, Ring Road No.1, Raipur",
        src: '/Image/image (5).png'
    },
    {
        title: "Wallfort Ananda",
        subtitle1: "Developed Plots",
        subtitle2: "Khariar Road",
        src: "/Image/image (2).png ",
    },
    {
        title: "Wallfort Ananda",
        subtitle1: "Developed Plots",
        subtitle2: "Khariar Road",
        src: "/Image/image (1).png"

    },
    {
        title: "Wallfort Ananda",
        subtitle1: "Developed Plots",
        subtitle2: "Khariar Road",
        src: "/Image/image (3).png"

    },
    {
        title: "Wallfort Ananda",
        subtitle1: "Developed Plots",
        subtitle2: "Khariar Road",
        src: "/Image/image (2).png"

    },
];

const Page4 = () => {
    const [selected, setselected] = useState(1);

    console.log(selected)
    return (
        <div className="page4">
            <p className="heading4">Featured Projects</p>
            <div className="img-hover" style={{ display: "flex" }}>
                {projects.map((project, index) => (
                    <div key={index} style={{ display: "flex", gap: 0, width: "100%", backgroundColor: 'black 0.5', position: "relative" }}
                        // className={selected === index ? "image0hover" : "image0"}
                        onMouseEnter={() => {
                            setselected(index)
                        }}>
                        <img className={
                            selected === index ? "featured-image-selected" : "featured-image"
                        } src={project.src} alt="feature" />
                        <div className="black-opacity" />

                        <div className={selected === index ? "featured-image-text-selected" : "featured-image-text"}>
                            <h2 className="page4-title">{project.title}</h2>
                            <h2 className="page4-subtitle1">{project.subtitle1}</h2>
                            <h2 className="subtitle2">{project.subtitle2}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Page4;