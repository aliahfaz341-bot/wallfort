const cardData = [
    {
        imgSrc: "/Image/same-building.png",
        title: "WOW Magazine Issue",
        day: "14",
        date: "November ",
        year: "2025",
    },
    {
        imgSrc: "/Image/same-building.png",
        title: "WOW Magazine Issue",
        day: "14",
        date: "November ",
        year: "2025"
    },
    {
        imgSrc: "/Image/same-building.png",
        title: "WOW Magazine Issue",
        day: "14",
        date: "November",
        year: "2025"
    },
    {
        imgSrc: "/Image/same-building.png",
        title: "WOW Magazine Issue",
        day: "14",
        date: "November ",
        year: "2025"

    },
    {
        imgSrc: "/Image/same-building.png",
        title: "WOW Magazine Issue",
        day: "14",
        date: "November ",
        year: "2025"

    }
];

const About7 = () => {
    return (
        <div className="about7">
            <p className="about7-title">News and events</p>
            <div
                className="img-pack7"
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    gap: '30px',
                }}
            >
                {cardData.map((card, index) => (
                    <div className="imgborder"
                        key={index}
                    >
                        <img className="bulding-img" src={card.imgSrc} alt="building" />
                        <p className="about7-text">{card.title}</p>
                        <div className="schedule">
                            <p style={{ fontSize: '48px', marginTop: '0%', fontWeight: '500', fontFamily: 'Playfair Display' }}>{card.day}</p>
                            <div style={{ fontSize: '20px', fontWeight: '500', marginLeft: '13px', marginTop: '-12px', fontFamily: 'Playfair Display' }}>
                                <p>{card.date}</p>
                                <p className="son">{card.year}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default About7;
