import React from 'react'
import Albums from '../components/Albums'
import Navigation from '../components/Navigation'

const AlbumsL = () => {
    return (
        <div>
            <Navigation/>
            <h1>Liste des albums</h1>
            <Albums/>
        </div>
    )
}

export default AlbumsL