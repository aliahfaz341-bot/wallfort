const About6 = () => {
    const awards = [
        {
            img: "/Image/award.png",
            title: "Maruti Lifestyle - 2014",
            text: "B2B Companies Poland"
        },
        {
            img: "/Image/award.png",
            title: "Maruti Lifestyle - 2014",
            text: "B2B Companies Poland"
        },
        {
            img: "/Image/award.png",
            title: "Maruti Lifestyle - 2014",
            text: "B2B Companies Poland"
        }
    ];

    return (
        <div className="about6">
            <div className="about6-text">
                <p className="about6-heading">Awards</p>
                <p className="about6-title">Our Awards & Recognition</p>
                <p className="about6-para">Celebrating Excellence–Wallfort Group Awards and Achievements</p>
                <img style={{ marginTop: '2%' }} src="/Image/left-right.png" alt="left" />
            </div>

            {awards.map((award, index) => (
                <div className="award-card" key={index}>
                    <img style={{ width: '100px' }} src={award.img} alt={`award-${index}`} />
                    <p className="award-title">{award.title}</p>
                    <p className="award-text">{award.text}</p>
                </div>
            ))}
        </div>
    );
};

export default About6;
