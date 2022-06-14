import {React, useState, useEffect } from 'react'

const Albums = () => {

    function AlbumsListing() {
        const [error, setError] = useState(null)
        const [isLoaded, setIsLoaded] = useState(false)
        const [items, setItems] = useState([])
    
        useEffect(() => {
            setIsLoaded(true)
            fetch("http://localhost:3001/albums")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setItems(result)
                    console.log(items)
                    setIsLoaded(false)
                },
                (error) => {
                    setIsLoaded(false)
                    setError(error)
                }
            )
        }, [])
    
        if(error) {
            return <div>Erreur : {error.message}</div>
        } else if(isLoaded) {
            return <div>Chargement...</div>
        } else {
            return (
                <div className='scrollAlbum'>
                    {items.map(item => (
                        <div className='width' key={item.id}>
                            <div className='imgCover'><img src={item.cover_small}></img></div>
                            <a href={"/albumsdetails/"+item.id}>{item.id}</a> 
                            <strong> {item.name}</strong>
                        </div>
                    ))}
                </div>
            )
        }
    }
    
    return (
        <div>
            {AlbumsListing()}
        </div>
    )
}

export default Albums