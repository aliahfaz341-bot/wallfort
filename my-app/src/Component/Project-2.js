const Project2 = ({ currentData }) => {
    console.log("currentData in Project2:", currentData);

    return (
        <div>
            {currentData.map((item, index) => (
                <div key={item.id || index}>
                    <img src={item?.link} alt="item"></img>
                    <img src={item?.guid.rendered} alt="project2"></img>
                </div>
            ))}
        </div>
    );
};

export default Project2;