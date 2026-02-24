const cardData = [
    {
        heading: "Our Vision",
        text: "To be the most trusted and admired real estate brand, shaping vibrant communities and creating timeless landmarks that enrich lives for generations.",
        imgSrc: "/Image/eye.png",
        imgStyle: { width: '165px', height: '165px', marginTop: '8%', marginLeft: '10%' },
        reverse: false
    },
    {
        heading: "Our Mission",
        text: "At Wallfort, our mission is to deliver exceptional real estate solutions through innovation, integrity, and quality. We are committed to developing sustainable spaces that offer value, comfort, and a sense of belonging — while consistently exceeding the expectations of our customers, partners, and stakeholders.",
        imgSrc: "/Image/card2.png",
        imgStyle: { width: '165px', height: '165px', float: 'right', marginRight: '10%' },
        headingStyle: { marginTop: '35%' },
        reverse: true
    }
];

const About4 = () => {
    return (
        <div className="about4" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {cardData.map((card, index) => (
                <div key={index} className="card1">
                    {!card.reverse && (
                        <>
                            <div className="about-heading4">
                                <p style={card.headingStyle}>{card.heading}</p>
                            </div>
                            <div className="about-text4">
                                <p>{card.text}</p>
                            </div>
                            <img style={card.imgStyle} src={card.imgSrc} alt="imgstyle" />

                        </>
                    )}
                    {card.reverse && (
                        <>
                            <img className="imgstyle" style={card.imgStyle} src={card.imgSrc} alt="card" />
                            <div className="about-heading4">
                                <p style={card.headingStyle}>{card.heading}</p>
                            </div>
                            <div className="about-text4">
                                <p>{card.text}</p>
                            </div>
                        </>
                    )}
                </div>
            ))
            }
        </div >
    );
}
export default About4;