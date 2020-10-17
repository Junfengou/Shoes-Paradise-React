import React from 'react'
// import Red from "../images/nikeAir.jpg"
import Red from "../images/nikeFlyknit.jpg"
import "./Card.css"

export default function Card() {
    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__photo">
                    <img src={Red} alt="nikeRed" />
                </div>
                <div className="card__info">
                    <div className="card_title">
                        <h4>Nike Air <strong>Limited Edition</strong></h4>
                    </div>
                    <div className="card__price">
                        <h4>$240</h4>
                        <i className="fas fa-cart-plus"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
