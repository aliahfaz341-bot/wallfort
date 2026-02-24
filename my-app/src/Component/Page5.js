const Page5 = () => {
    return (
        <div className="page5">
            {/* Image Group at the Top */}
            <div className="img-package">
                <img className="image5-1" src="/Image/person-1.png" alt="Person 1" />
                <img className="image5-2" src="/Image/person-2.png" alt="Person 2" />
                <img className="image5-3" src="/Image/person-3.png" alt="Person 3" />
                <img className="image5-4" src="/Image/person-4.png" alt="Person 4" />
                <img className="image5-5" src="/Image/person-5.png" alt="Person 5" />
                <img className="image5-2" src="/Image/person-1.png" alt="Person 1" />
                <img className="image5-6" src="/Image/person-6.png" alt="Person 6" />
                <img className="image5-4" src="/Image/person-7.png" alt="Person 7" />
                <img className="image5-5" src="/Image/person-4.png" alt="Person 4" />
            </div>

            <div >
                <img className="image5-7" src="/Image/person-7.png" alt="Person 7" />
            </div>
            <div>
                <img className="image5-8" src="/Image/person-8.png" alt="Person 8" />
            </div>

            {/* Right Side Images */}
            <div className="right-images" style={{ display: 'flex' }}>
                <img className="right-img" src="/Image/image (6).png" alt="Decorative" />
                <img className="right-img2" src="/Image/person-5.png" alt="Person 5 again" />
            </div>

            <div className="section" style={{ marginTop: '-17%' }}>
                <button className="button5">Testimonial</button>
                <p className="title5">What Our Clients Say, Says It All</p>
                <p className="sub-title">Client Voices, Real Experiences</p>
                <p className="para-5">
                    From first-time buyers to seasoned investors, our clients share how we made their real estate
                    <br />
                    journey smooth, stress-free, and truly memorable.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="card5">
                        <img className="img5-0" src="/Image/Ellipse 189.png" alt="Client avatar" />
                        <p className="title5-1">Marko</p>
                        <img className="star" src="/Image/star (3).png" alt="Star rating" />
                        <p className="text5">
                            The team was incredibly knowledgeable about the local market and provided valuable insights
                            that helped me make informed decisions. They curated a list of properties that perfectly matched
                            my criteria and were always available for showings.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page5;
