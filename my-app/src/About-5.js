const journeyData = [
    {
        year: "2025",
        image: "/Image/blue.png",
        bgColor: "",
        textColor: "",
    },
    {
        year: "2024",
        image: "/Image/golden.png",
        bgColor: "#F8FDE9",
        textColor: "#ABA614",
    },
    {
        year: "2023",
        image: "/Image/purpel.png",
        bgColor: "#ECE9FD",
        textColor: "#4114AB",
    },
    {
        year: "2022",
        image: "/Image/blue (2).png",
        bgColor: "#E9F3FD",
        textColor: "#1437AB",
    },
    {
        year: "2021",
        image: "/Image/pink.png",
        bgColor: "#FDE9F8",
        textColor: "#AB1444",
    },
];

const About5 = () => {
    return (
        <div className="about5">
            <div className="imgtext">
                <div className='text5-1'>
                    <p className="about5-heading">Our Story</p>
                    <p className="about5-title">Our journey</p>
                    <p className="about5-para">
                        For over three decades, CADD Centre has been a trusted institution, enriching the careers of over 2.5 million learners worldwide with cutting-edge courses. Our recent launch of Electric Vehicle Technology and Generative AI job.
                    </p>
                </div>
                <img className="img5" src="/Image/about5.png" alt="about" />
            </div>
            {/* NUMBER-CARD */}
            <div className="number-card">
                <img
                    style={{ marginTop: '3%', width: '100%', position: 'absolute' }}
                    src="/Image/bg.png"
                    alt="background"
                />
                <div className="about5-pack">
                    {journeyData.map((item, index) => (
                        <div
                            className="about-card"
                            key={index}
                            style={{ marginLeft: item.marginLeft, marginTop: item.marginTop }}>

                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <img className="img-left" src={item.image} alt={`year-${item.year}`} />
                            </div>

                            <div
                                className="inside-card"
                                style={{ backgroundColor: item.bgColor || undefined }}>
                                <p className="year">{item.year}</p>
                                <p className="card-title" style={{ color: item.textColor || undefined }}>
                                    Our Journey
                                </p>
                                <p className="card-text">
                                    For over three decades, CADD Centre has been a trusted institution, enriching the careers of over 2.5 million learners worldwide with cutting-edge courses.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default About5;
