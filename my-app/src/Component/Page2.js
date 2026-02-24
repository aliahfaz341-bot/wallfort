import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import PrimaryButton from "./PrimaryButton";

const cardData = [
    {
        imgSrc: '/Image/Mask group.png',
        title: 'Transparency',
        text: 'We pride ourselves on keeping you informed at every stage of the process, ensuring you’re always confident in your decision. Our transparent approach sets us apart from the rest.',
        cardClass: 'transparency',
    },
    {
        imgSrc: '/Image/Mask group (1).png',
        title: 'Commitment',
        text: 'Our years of experience and dedication to customer satisfaction have earned us the loyalty of many. We’re here to offer you the same exceptional service.',
        cardClass: 'commitement',
    },
    {
        imgSrc: '/Image/percent.png',
        title: 'Expertise',
        text: 'With our deep understanding of the Raipur property market, we guide you in finding the perfect property that fits your needs.',
        cardClass: 'expertise',
    },
    {
        imgSrc: '/Image/trophy.png',
        title: 'Availability',
        text: 'No matter the time, our team is always available to help with any inquiries. You can count on us to be there whenever you need assistance.',
        class: 'availability',
    }
];

const Page2 = () => {
    return (
        <div className='page2'>
            <div className="page2-main">
                <div className="page2-leftSection">
                    <h1 className="heading">Why Wallfort Properties?</h1>
                    <p className="paragraph">
                        With 20+ years of excellence and 30+ landmark projects, Wallfort Properties is Central India's most admired real estate brand.
                        Trusted by 12,000+ families, with a legacy of quality and innovation, 2.5 Cr+ sq. ft. land developed and still growing strong.
                    </p>
                    <div className='main-button3'>
                        <PrimaryButton text={'View Projects'}></PrimaryButton>
                    </div>
                </div>

                <div className="page2-rightSection">
                    {cardData.map((card, index) => (
                        <div key={index} className={`contentcard card-${index}`} style={card.style}>
                            <div className="opacity">
                                <img className='cardimg' src={card.imgSrc} alt={card.title} />
                                <p className='title'>{card.title}</p>
                                <p className='cardtext'>{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Page3 />

            <Page4 />

            <Page5 />

            <Page6 />

        </div>
    );
};

export default Page2;
