import LocationSlider from '../LocationSlider';
import GallerySlider from './GallerySlider';

// const locationAdvantages = [
//     { img: "/Image/Market.png", title: "Super market", distance: "300m", className: 'locationimg' },
//     { img: "/Image/Hospital.png", title: "Hospital", distance: "500m" },
//     { img: "/Image/university.png", title: "University", distance: "200m" },
//     { img: "/Image/railway.png", title: "Railwaay Station", distance: "1km" },
//     { img: "/Image/park.png", title: "Park", distance: "100m" },
//     { img: "/Image/bus-station.png", title: "Bus Station", distance: "1km" },
//     { img: "/Image/bank.png", title: "Bank", distance: "100m" },
//     { img: "/Image/airport.png", title: "Airport", distance: "100m" }
// ];

const galleryImages = [
    "/Image/gallery-1.png",
    "/Image/gallery-2.png",
    "/Image/gallery-3.png",
    "/Image/gallery-4.png"
];

const Project4 = ({ currentData }) => {
    console.log("currentData====>>>>", currentData)
    return (

        <div className="project4">
            {/* Plans */}
            <p className="project7-heading" style={{ marginTop: '10%' }}>Plans</p>
            <p className="project7-heading" style={{ marginTop: '10%' }}>{currentData.plans_images}</p>

            <div className='plans'>
                <img className="left" style={{ marginTop: '16%' }} src="/Image/left.png" alt='left' />
                <img className="plan-img" src="/Image/plans.png" alt='plain' />
                <img className="right" style={{ marginTop: '16%' }} src="/Image/right.png" alt='right' />
            </div>

            {/* Location Advantage */}

            <p style={{ marginTop: '5%' }} className="project7-heading">Location Advantage</p>
            <div className="local-advantage">
                {currentData.map((loc, index) => (
                    <div key={index} className="location">
                        <img src={loc.img} alt='location' />
                        <p className="imgp1-text" style={{ marginTop: '0%' }}>{currentData.title}</p>
                        <p className="imgp1-text2" style={{ marginTop: '-1%' }}>{currentData.location_advantages?.distance}</p>
                        <p className="imgp1-text2" style={{ marginTop: '-1%' }}>{currentData.location_advantages?.place_name}</p>
                    </div>
                ))}
            </div>

            <LocationSlider className='localslider' />

            <div style={{ textAlign: 'center' }}>
                <img className="location-img" src="/Image/location (2).png" alt='location' />
            </div>

            {/* Gallery */}

            <p style={{ marginTop: '5%' }} className="project7-heading">Gallery</p>
            <div className='gallerypack'>
                <img style={{ marginTop: '9%' }} className="left" src="/Image/left.png" alt='left' />
                {galleryImages.map((imgSrc, index) => (
                    <img key={index} className="gallery-img" src={imgSrc} alt='galleryimg' />
                ))}
                <img style={{ marginTop: '9%' }} className="right" src="/Image/right.png" alt='right' />
            </div>
            < GallerySlider />
        </div>
    );
};

export default Project4;