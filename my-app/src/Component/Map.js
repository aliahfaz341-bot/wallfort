import { Link } from 'react-router-dom'
import PrimaryButton from './PrimaryButton'
const Point = [
    {
        title: 'Wallfort Omega',
        subtitle: 'Commercial',
        Address: 'Ring Road No1 Near P.W.D Bridge , New Ragendra Nagar',
        src: '/Image/wallfort.png',
    },
    {
        title: 'Wallfort Omega',
        subtitle: 'Commercial',
        Address: 'Ring Road No1 Near P.W.D Bridge , New Ragendra Nagar',
        src: '/Image/wallfort.png',
    },
    {
        title: 'Wallfort Omega',
        subtitle: 'Commercial',
        Address: 'Ring Road No1 Near P.W.D Bridge , New Ragendra Nagar',
        src: '/Image/wallfort.png',
    },
    {
        title: 'Wallfort Omega',
        subtitle: 'Commercial',
        Address: 'Ring Road No1 Near P.W.D Bridge , New Ragendra Nagar',
        src: '/Image/wallfort.png',
    },
    {
        title: 'Wallfort Omega',
        subtitle: 'Commercial',
        Address: 'Ring Road No1 Near P.W.D Bridge , New Ragendra Nagar',
        src: '/Image/wallfort.png',
    },
    {
        title: 'Wallfort Omega',
        subtitle: 'Commercial',
        Address: 'Ring Road No1 Near P.W.D Bridge , New Ragendra Nagar',
        src: '/Image/wallfort.png',
    },
    {
        title: 'Wallfort Omega',
        subtitle: 'Commercial',
        Address: 'Ring Road No1 Near P.W.D Bridge , New Ragendra Nagar',
        src: '/Image/wallfort.png',
    },
    {
        title: 'Wallfort Omega',
        subtitle: 'Commercial',
        Address: 'Ring Road No1 Near P.W.D Bridge , New Ragendra Nagar',
        src: '/Image/wallfort.png',
    },
    {
        title: 'Wallfort Omega',
        subtitle: 'Commercial',
        Address: 'Ring Road No1 Near P.W.D Bridge , New Ragendra Nagar',
        src: '/Image/wallfort.png',
    },

]

const Map = () => {
    return (
        <div>
            {/* row-1 */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
                {Point.map((Point, index) => (
                    <div key={index} className={`projectcard-${index}`} >
                        <img className='mapimg' src={Point.src} alt='map'></img>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '70%', marginLeft: '10%' }}>
                            <p className='resedential-title'>{Point.title}</p>
                            <p className='resedentialsubtitle1'>{Point.subtitle}</p>
                            <p className='address1'>{Point.Address}</p>
                        </div>

                        {/* button */}
                        <Link to="/Project">
                            <div style={{ display: 'flex', position: 'relative', left: '10%', marginBottom: '5%', top: '2%' }}>
                                <PrimaryButton text={'View More'} />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Map