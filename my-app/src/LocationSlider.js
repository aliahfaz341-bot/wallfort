import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const locationAdvantages = [
    { img: "/Image/Market.png", title: "Super market", distance: "300m" },
    { img: "/Image/Hospital.png", title: "Hospital", distance: "500m" },
    { img: "/Image/university.png", title: "University", distance: "200m" },
    { img: "/Image/railway.png", title: "Railwaay Station", distance: "1km" },
    { img: "/Image/park.png", title: "Park", distance: "100m" },
    { img: "/Image/bus-station.png", title: "Bus Station", distance: "1km" },
    { img: "/Image/bank.png", title: "Bank", distance: "100m" },
    { img: "/Image/airport.png", title: "Airport", distance: "100m" }
];

const LocationSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (

        // <div className="local-advantage">
        <Slider {...settings}>
            {locationAdvantages.map((loc, index) => (
                <div key={index} className="location">
                    <img style={{ marginLeft: '39%' }} src={loc.img} alt="location" />
                    <div style={{ lineHeight: '120%' }}>
                        <p className="imgp1-text" >{loc.title}</p>
                        <p className="imgp1-text2" >{loc.distance}</p>
                    </div>
                </div>
            ))}
        </Slider>
        // </div>
    );
}
export default LocationSlider