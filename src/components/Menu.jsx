import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <ul className="nav d-flex gap-4 my-3 justify-content-center  ">
            <li className="nav-item">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/pays">Pays</Link>
            </li>
            <li className="nav-item">
                <Link to="/anneeIndependance">Annee Independance</Link>
            </li>
        </ul>
    )
}

export default Menu