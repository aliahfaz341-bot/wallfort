const card = [
    {
        title: 'Name',
        heading: 'Age',
        subHeading: 'Qualification'
    },
    {
        title: 'Ahfaz',
        heading: '19',
        subHeading: 'xii',
    }
]

const Box = () => {
    return (
        <div>
            <div style={{ backgroundColor: 'yellow', width: '20%', height: '40%', display: 'flex', gap: 20, marginTop: '1%', marginLeft: '1%' }}>
                {card.map((card, index) => (
                    <div>
                        <p key={index}>{card.title}</p>
                        <p key={index}>{card.heading}</p>
                    </div>
                ))}
            </div>

            <div style={{ backgroundColor: 'yellowgreen', width: '10%', display: 'flex', gap: 20, height: '40%', marginTop: '1%', marginLeft: '1%' }}>
                {card.map((card, index) => (
                    <div>
                        <p key={index}>{card.title}</p>
                        <p key={index}>{card.heading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Box
