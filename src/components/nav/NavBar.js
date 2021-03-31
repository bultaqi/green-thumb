import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <>
        <div className="navigation">
        <div className="home-button">
            <Link className="poopybutt" to="/plants">Plants</Link>
        </div>
        <ul className="navbar">
            <li className="navbar__item tab">
                <Link className="navbar__link" to="/plants/create">Add Plant</Link>
            </li>
            <li className="navbar__item tab">
                <Link className="navbar__link" to="/budget">Budget</Link>
            </li>
        </ul>
        </div>
        </>
    )
}