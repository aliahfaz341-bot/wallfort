import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function GallerySlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <img className="projectimg-pack" src="/Image/gallery-1.png" alt="gallery" />
            </div>
            <div>
                <img className="projectimg-pack" src="/Image/gallery-2.png" alt="gallery" />
            </div>
            <div>
                <img className="projectimg-pack" src="/Image/gallery-3.png" alt="gallery" />
            </div>
            <div>
                <img className="projectimg-pack" src="/Image/gallery-4.png" alt="gallery" />
            </div>

        </Slider>
    );
}
export default GallerySlider