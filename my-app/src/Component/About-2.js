const About2 = () => {
    const images = [
        { className: "about-img2", src: "/Image/upper.png" },
        { className: "about-img3", src: "/Image/lower.png" }
    ];

    return (
        <div className="about2">
            <div className="about-text">
                <p className="about-heading">About Wallfort</p>
                <p className="about-para">
                    With a passion for properties and a commitment to our clients, we bring years of experience,
                    local expertise, and personalized service to help you find your perfect place or make the right investment.
                </p>
            </div>
            <div className="aboutimg-pack">
                {images.map((img, index) => (
                    <img key={index} className={img.className} src={img.src} alt="img2"/>
                ))}
            </div>
        </div>
    );
};

export default About2;
