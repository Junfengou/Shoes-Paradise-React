import React, { Fragment } from 'react'
import Logo from "../images/Logo.png"
import "./Navbar.css"


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>

                <div className="navbar__items">
                    <i class="fas fa-user" />
                    <i class="fas fa-comment-dots"/>
                    <i class="fas fa-shopping-bag" />
                    
                    {/* <h3>Links</h3> */}
                    {/* <h3>Links</h3> */}
                </div>

            </div>
        </div>
    )
}

