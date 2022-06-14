import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import { AnAlbum } from '../components/AnAlbum'
import { useCallback } from 'react'

const Home = () => {

    const [albums, setAlbums] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const getAlbums = useCallback(async () => {

        setIsLoading(true)
        const response = await fetch("http://localhost:3001/randomAlbums", {
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (response.ok) {

            const responseData = await response.json()

            setIsLoading(false)
            setAlbums(responseData)

        } else {

            setIsLoading(false)
            return null
        }


    })

    useEffect(() => {

        if (!albums) {
            getAlbums()
        }
        console.log(albums)

    }, [albums, getAlbums])

    return (
        <>
            <div>
                <Navigation />
                <h1>Home page </h1>
            </div>


            {isLoading ?
                <div>Chargement...</div> :
                albums ?
                    <div className='albumswrap'>
                        {albums.map(album =>
                            <AnAlbum id={album.id} key={album.id} cover_small={album.cover_small} title={album.name} />
                        )}
                    </div>
                    :
                    <p>Aucun album n'a été chargé</p>
            }
        </>
    )
}

export default Home