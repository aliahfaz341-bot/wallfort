const Page3 = () => {
    const images = [
        { src: "/Image/image-pg3.png", className: "img1" },
        { src: "/Image/img-pg3.png", className: "img2" },
        { src: "/Image/img2-pg3.png", className: "img3" },
        { src: "/Image/img3-pg3.png", className: "img4" },
        { src: "/Image/img4-pg3.png", className: "imgh5" },
    ];

    // const cards = [
    //     {
    //         id: 1,
    //         heading: "30+",
    //         subHeading: "Projects",
    //         image: "/Image/small-img.png",
    //         imgClass: "small-img",
    //         cardClass: "card3-1",
    //         type: "upper-card",
    //     },
    //     {
    //         id: 2,
    //         heading: "20+",
    //         subHeading: "Years on rich experience",
    //         image: "/Image/small2-img.png",
    //         imgClass: "small-img1",
    //         cardClass: "card3-2",
    //         type: "lower-card",
    //     },
    //     {
    //         id: 3,
    //         heading: "2.5Cr",
    //         subHeading: "Sqft Land Developed",
    //         image: "/Image/small-img.png",
    //         imgClass: "small-img3",
    //         cardClass: "card3-1",
    //         type: "upper-card",
    //     },
    //     {
    //         id: 4,
    //         heading: "1Cr",
    //         subHeading: "Sq.Ft Developement in Progress",
    //         image: "/Image/small2-img.png",
    //         imgClass: "small-img4",
    //         cardClass: "card3-2",
    //         type: "lower-card",
    //     },
    //     {
    //         id: 5,
    //         heading: "12000+",
    //         subHeading: "Happy families",
    //         image: null,
    //         imgClass: "",
    //         cardClass: "card3-1",
    //         type: "upper-card",
    //     },
    // ];

    return (

        <div className="page3">
            <div className="page3-pack">
                {images.map((img, index) => (
                    <img key={index} src={img.src} className={img.className} alt="imgpack" />
                ))}
            </div>
        </div>
    );
};

export default Page3;
