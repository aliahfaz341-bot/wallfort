const quickLinks = ["About Us", "Projects", "Blog", "Awards & Achivement"];

const contactDetails = [
    {
        icon: "/Image/Address.png",
        text: "Wallfort Corporate House Ring Road No.1 Opposite Wallfort City Bhatagaon , Raipur, Chhattisgarh 492013",
        style: { width: '298px', marginLeft: '10px' }
    },
    {
        icon: "/Image/Call (2).png",
        text: "8234900900",
        style: { marginLeft: '10px' }
    },
    {
        icon: "/Image/email.png",
        text: "digital@wallfort.com",
        style: { marginLeft: '10px' }
    }
];

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-upper">
                <div className="footer-heading1">
                    <img className="footer-img" src="/Image/W 2.png" alt="Wallfort Logo" />
                    <p className="footer-para">
                        At Wallfort Properties, we are known for our outstanding design, which is not only fashionable, functional, and elegant but also trendy.
                        We strive to make our client's dreams come true. Our guiding principle is to think ahead and create a better tomorrow.
                        Our every step brings sustainability and combines outstanding infrastructure with affordable homes.
                    </p>
                </div>

                <div className="middle">
                    <p className="footer-heading2">Quick Links</p>
                    {quickLinks.map((link, index) => (
                        <p key={index} className="footer-text">{link}</p>
                    ))}
                </div>

                <div className="footer-right">
                    <p className="footer-heading2">Contact Us On</p>
                    {contactDetails.map((item, index) => (
                        <div key={index} style={{ display: 'flex' }}>
                            <img className="smallimg1" src={item.icon} alt="Contact Icon" />
                            <p style={item.style}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <p>© Copyright Wallfort Buildings 2024. All Right Reserved.</p>
                <p className="term">terms of use </p>
                <p className="privacy" >privacy policy</p>
            </div>
        </div>
    );
};

export default Footer;
