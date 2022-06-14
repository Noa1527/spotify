import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Navpagination from '../components/Navpagination'

const Artists420_504 = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:3001/artists")
            .then((res) => setdata(res.data));
    }, [])

    return (
        <div className='DisplayWrap'>
            <h1>Liste des artistes </h1>

            <ul className='scrollArtist'>
                {data
                    .slice(420, 504)
                    .map((artistes, index) => (
                        <Card key={index} artistes={artistes} />
                    ))}
            </ul>
            <Navpagination />
        </div>
    )
}

export default Artists420_504