const boardMembers = [
    {
        name: "Anil Parakh",
        title: "Chairman",
        description:
            "Anil Parakh is the Chairman of Wallfort Properties. With over 30 years of experience in the real estate industry and a C.A. degree, he brings a wealth of knowledge and expertise to the company. In addition to his professional accomplishments, he is recognized for his moral duties and has been awarded for his contributions to society.",
        image: "/Image/zigzag.png",
        zigzag: "/Image/zigzag1.png",
    },
];

const About3 = () => {
    return (
        <div className="about3">
            <p className="about-heading3">Board Of Directors</p>
            <p className="about-para3">
                Wallfort Group is a Most Admired Real estate Brand in Central India. Wallfort is a name synonymous with Quality, Delivery and Transparency.
            </p>
            <img style={{ float: 'right' }} className="zigzag" src="/Image/upper-zigzag.png" alt="zigzag" />
            <img className="left-right1" style={{ float: 'right' }} src="/Image/left-right.png" alt="zigzag" />

            {boardMembers.map((member, index) => (
                <div className='flex' >
                    <div className="person1-img" >
                        <img className="person1" src="/Image/person1.png" alt="person1" />
                    </div>
                    <div className="maincard" key={index}>
                        <img
                            src={member.image}
                            alt={`${member.name} zigzag`} className="arrow" />

                        <p className="name" >
                            {member.name}
                        </p>
                        <p className="name"  >
                            {member.title}
                        </p>
                        <p className="aboutText" >
                            {member.description}
                        </p>
                        <img className="zigzag" src={member.zigzag} alt="zigzag" />
                    </div>
                </div>
            ))}

            <img className="zigzag" src="/Image/upper-zigzag.png" alt="zigag" />
        </div>
    );
};

export default About3;
