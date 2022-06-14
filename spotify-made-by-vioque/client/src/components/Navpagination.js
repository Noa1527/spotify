import React from 'react'
import { NavLink } from 'react-router-dom'

const Navpagination = () => {
    return (
        <div class="pagination">
            <NavLink to="/artistesListings">
                <div>0</div>
            </NavLink>

            <NavLink to="/artistesListings168">
                <div>1</div>
            </NavLink>

            <NavLink to="/artistesListings252">
                <div>2</div>
            </NavLink>

            <NavLink to="/artistesListings336">
                <div>3</div>
            </NavLink>

            <NavLink to="/artistesListings420">
                <div>4</div>
            </NavLink>

            <NavLink to="/artistesListings504">
                <div>5</div>
            </NavLink>

            <NavLink to="/artistesListings588">
                <div>6</div>
            </NavLink>

        </div>
    )
}

export default Navpagination