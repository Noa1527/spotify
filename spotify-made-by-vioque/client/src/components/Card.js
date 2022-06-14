import React from 'react'

const Card = ({ artistes }) => {

    return (
        <li>
            <div id='MyCard' className='myCard'>
                <div className='imgCard'>
                    <div className='imgDime'>
                        <img
                            src={artistes.photo}
                            alt={"photo de " + artistes.name}
                        />
                    </div>
                    <h1>{artistes.name}</h1>
                </div>
                <div className='infoCard'>
                    <p>{artistes.description}</p>
                    <div className='scrollBio'>
                        <p className='bio'>{artistes.bio}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Card