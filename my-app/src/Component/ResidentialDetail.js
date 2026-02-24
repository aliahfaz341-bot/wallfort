import PrimaryButton from './PrimaryButton';
import { Checkbox } from 'antd';

const propertyInfo1 = [
    {
        img: "/Image/p1.png",
        title: "Property Type",
        value: "Commercial",
    },
    {
        img: "/Image/p2.png",
        title: "Super Built-Up Area",
        value: "996 to 1395 Sq.Ft",
    },
];
const propertyInfo2 = [
    {
        img: "/Image/p3.png",
        title: "Commercial Units",
        value: "132",
    },
    {
        img: "/Image/p4.png",
        title: "Land Area",
        value: "8.5 Acre",
    },
];

const ResidentialDetail = () => {
    return (
        <div>
            {/* Section-1 */}
            <img className='building' src='/Image/building.png' alt='building' />

            {/* Section-2 */}
            <div className='section1' style={{ display: 'flex', justifyContent: 'center', gap: '10%', flexWrap: 'wrap' }}>
                <img className='waterfall' src='/Image/waterfall.png' alt='water' />
                <div>
                    <p className='residential-heading'>Wallfort Heights</p>
                    <p className='residential-para'>Lorem ipsum dolor sit amet consectetur. Augue nisl lectus justo purus vulputate pellentesque fringilla nunc. Sit tincidunt faucibus hac feugiat mi adipiscing. Nunc nulla condimentum est quis tellus magna magna. Vitae egestas vel integer massa tincidunt porttitor. Lorem ipsum dolor sit amet consectetur. Augue nisl lectus justo purus vulputate pellentesque fringilla nunc. Sit tincidunt faucibus hac feugiat mi adipiscing. Nunc nulla condimentum est quis tellus magna magna. Vitae egestas vel integer massa tincidunt porttitor.</p>

                    <div className='four-img' style={{ display: 'flex' }}>
                        <div className="project "
                            style={{ width: '40%' }}>
                            {propertyInfo1.map((item, index) => (
                                <div key={index}>
                                    <img src={item.img} alt='imgp1' />
                                    <p className="imgp1-text">{item.title}</p>
                                    <p className="imgp1-text2">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="project"
                            style={{ width: '35%', marginLeft: '5%' }}
                        >
                            {propertyInfo2.map((item, index) => (
                                <div key={index}>
                                    <img src={item.img} alt='img1' />
                                    <p className="imgp1-text">{item.title}</p>
                                    <p className="imgp1-text2">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '1%', marginLeft: '5%', marginTop: '1%' }}>
                <img className='fourimg' src='/Image/waterfall.png' alt='waterfall' />
                <img className='fourimg' src='/Image/waterfall.png' alt='waterfall2' />
                <img className='fourimg' src='/Image/waterfall.png' alt='waterfall3' />
                <img className='fourimg' src='/Image/waterfall.png' alt='waterfall4' />
            </div>

            {/* Section-3 */}
            <p className='residential-heading1'>Features</p>

            <div className='feature' style={{ display: 'flex', flexWrap: 'wrap' }} >
                <div style={{ display: 'flex', gap: '8%', flexWrap: 'wrap' }}>
                    <img className='ac-img' src='/Image/Ac.png' alt='ac' />
                    <img className='ac-img' src='/Image/microwave.png' alt='microwave' />
                    <img className='ac-img' src='/Image/Half.png' alt='half' />
                </div>

                {/* Enquire Card */}
                <div className='resedential-card'>
                    <p className="resedential-heading">Enquiry Now</p>
                    <p style={{ textAlign: 'center', marginTop: '-9%' }} > Please enter your details to know more</p>
                    <input type="text" placeholder="Full Name" className="fname" />
                    <input type="text" placeholder="Mobile no." className="fname" />
                    <input type="text" placeholder="Select-Project" className="fname" />
                    <input type="text" placeholder="Your Message" style={{ paddingBottom: '8%' }} className="fname" />
                    <Checkbox style={{ marginLeft: '10%' }}><p>By submitting this form I agree to terms of use</p></Checkbox>
                    <div style={{ marginLeft: '60%', marginTop: '5%' }}>
                        <PrimaryButton text={'Submit Now'} />
                    </div>
                </div>

                {/* <div className='feature' style={{ display: 'flex', justifyContent: 'center', width: '50%', marginTop: '-17%', marginBottom: '16%' }}>
                    <img style={{ width: '10%' }} src='/Image/left-right.png' />
                </div> */}
            </div>

            {/* Section-4 */}
            <p className='detail-heading' >Details</p>
            <div className='detail-img'>
                <div className="project " style={{ marginLeft: '10%' }}>
                    {propertyInfo1.map((item, index) => (
                        <div key={index}>
                            <img src={item.img} alt='item1' />
                            <p className="imgp1-text">{item.title}</p>
                            <p className="imgp1-text2">{item.value}</p>
                        </div>
                    ))}
                </div>
                <div className="project" style={{ width: '40%', marginLeft: '2%' }}>
                    {propertyInfo2.map((item, index) => (
                        <div key={index}>
                            <img src={item.img} alt='item' />
                            <p className="imgp1-text">{item.title}</p>
                            <p className="imgp1-text2">{item.value}</p>
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '50%', marginBottom: '16%' }}>
                </div>
            </div>
            {/* <img src='/Image/left-right.png' /> */}

            <div >
                <p className='location-heading'>Location</p>
                <div className='location-para' >
                    <img src='/Image/Address.png' alt='address' />
                    <p>linking bridge, Wallfort Omega,near Canal Road, Ring Road No. 1, Mahaveer Nagar, Raipur, Chhattisgarh 492001</p>
                </div>
            </div>
            <img className='lastimg' src='/Image/location (2).png' alt='lastimg' />
        </div >
    )
}
export default ResidentialDetail
