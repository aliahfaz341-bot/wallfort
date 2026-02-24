import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from './PrimaryButton'
import { useEffect } from 'react'

const Map = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://admin.wallfortproperties.com/wp-json/wp/v2/project?page=1&per_page=12')
            .then((response) => response.json())
            .then((json) => { setData(json) })
    }, [])
    console.log(data)

    return (
        <div>
            {/* row-1 */}
            <img className="firstimg" src="/Image/Group 48.png" alt='firstimg'></img>

            {/* <Card> */}
            <div className="page1-card">
                <div style={{ display: 'flex', justifyContent: "space-around", paddingTop: '0.5%' }}>
                    <div style={{ display: 'flex' }}>
                        <p className="select">Project Type</p>
                        <img className="downimg" src="/Image/down.png" alt='down' />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <p className="select">Location</p>
                        <img className="downimg" src="/Image/down.png" alt='down' />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <p className="select">Status</p>
                        <img className="downimg" src="/Image/down.png" alt='downimg' />
                    </div>
                </div>

                <div className="search">
                    <p className="project">Search by Project Name</p>
                    <div className="search-button" >
                        <PrimaryButton text={'Search'} />
                    </div>
                </div>
            </div>

            {/* Wallfort */}
            <div className='cardcollection'>
                {data?.map((Point, index) => (
                    <div key={index} className={`projectcard`}>
                        <img className='mapimg' src={Point?.acf?.banner_image?.link} alt='mapimage'></img>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '100%', marginLeft: '4%' }}>
                            <p className='resedential-title'>{Point.title.rendered}</p>
                            <p className='resedentialsubtitle1'>{Point.slug}</p>
                        </div>

                        {/* button */}
                        <Link to={`/Project1?id=${index}&slug=${Point.slug}`}>
                            <div style={{ display: 'flex', marginLeft: '5%', marginBottom: '5%' }}>
                                <PrimaryButton text={'View More'} />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Map
