import PrimaryButton from "./PrimaryButton";

const contactInfo = [
    {
        label: "Address",
        icon: "/Image/Address.png",
        text: "Wallfort Corporate House Ring Road No.1 Opposite Wallfort City Bhatagaon , Raipur, Chhattisgarh 492013"
    },
    {
        label: "Phone Number",
        icon: "/Image/Call (2).png",
        text: "8234900900"
    },
    {
        label: "E-Mail",
        icon: "/Image/email.png",
        text: "digital@wallfort.com"
    }
];

const Page6 = () => {
    return (
        <div className="page6">
            <div className="bigcard">
                <div className="page6-leftSection" >
                    <p className="title6">
                        Get in <span style={{ color: 'rgba(20, 171, 167, 1)' }}>Touch </span>
                    </p>
                    <p className="heading6">
                        Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
                    </p>

                    {/* Contact Info Mapped */}
                    {contactInfo.map((item, index) => (
                        <div className="main6" key={index}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img style={{ marginTop: '3%' }} className="smallimg" src={item.icon} alt={item.label} />
                                <p style={{ marginLeft: '10px' }} className="text6">{item.label}</p>
                            </div>
                            <p className="para6">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Card */}
                <div className="page6-rightSection">
                    <div className="card6">
                        <p className="card-Title">Send A Message</p>
                        <input type="text" placeholder="Full Name" className="fname" />
                        <input type="text" placeholder="Mobile no." className="fname" />
                        <input type="text" placeholder="Email-Id" className="fname" />
                        <input type="text" placeholder="Your Message" style={{ paddingBottom: '8%' }} className="fname" />
                        <div style={{ marginLeft: '60%', marginTop: '5%' }}>
                            <PrimaryButton text={'View Projects'} />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Page6;
