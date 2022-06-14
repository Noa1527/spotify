import React, { useEffect, useState, useCallback } from 'react'
import Albums from '../components/Albums'
import Navigation from '../components/Navigation'
import { useParams } from 'react-router-dom'
import { AlbumDetail } from '../components/AlbumDetail'

const AlbumsD = (props) => {

    const [album, setAlbum] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const {id} = useParams()

    const getAlbum = useCallback(async () => {

        setIsLoading(true)
        const response = await fetch("http://localhost:3001/album?id=" + id, {
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }})
            
        if (response.ok) {
            const responseData = await response.json()
                
            setIsLoading(false)
            setAlbum(responseData)
                
        } else {
            setIsLoading(false)
            return null
        }
    })

    useEffect(() => {
        if (!album) {
            getAlbum()
        }        

    }, [album, getAlbum])
    
    return (
        <div className='content'>
            <Navigation />
            <h1>Detail des albums</h1>
            {isLoading ?
                <div>Chargement...</div> :
                album ?
                    <AlbumDetail
                        cover={album.album[0].cover}
                        id={album.album[0].id}
                        key={album.album[0].id}
                        title={album.album[0].name}
                        desciption={album.album[0].desciption}
                        popularity={album.album[0].popularity}
                        tracks={album.tracks}
                        release_date={album.album[0].release_date} />
                    :
                    <p>Aucun album n'a été chargé</p>
            }
        </div>
    )
}

export default AlbumsD