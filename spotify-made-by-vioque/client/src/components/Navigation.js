import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="Navigation">
            <ul className='display'>
      
                <NavLink to="/">
                <li>Accueil</li>
                </NavLink>
      
                <NavLink to="/albumsListings">
                <li>Liste des albums</li>
                </NavLink>
      
                <NavLink to="/artistesListings">
                <li>Liste des artistes</li>
                </NavLink>
      
            </ul>
        </div>
    )
}

export default Navigation