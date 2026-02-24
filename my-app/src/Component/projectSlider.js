import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <img className="projectimg-pack" src="/Image/Air.png" alt="air" />
            </div>
            <div>
                <img className="projectimg-pack" src="/Image/Garden.png" alt="garden" />
            </div>
            <div>
                <img className="projectimg-pack" src="/Image/Security.png" alt="security" />
            </div>
            <div>
                <img className="projectimg-pack" src="/Image/electricity.png" alt="electricity" />
            </div>

        </Slider>
    );
}