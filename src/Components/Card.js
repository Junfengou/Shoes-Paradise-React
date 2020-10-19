import React, { Component } from 'react'
import Red from "../images/nikeFlyknit.jpg"
import { Link } from "react-router-dom"
import { ProductConsumer } from "../context"
import PropTypes from "prop-types"
import "./Card.css"


export default class Card extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
        <div className="card">
            <ProductConsumer>
                {value => (
                    <div className="card__wrapper" onClick={ () => value.handleDetail(id)}>
                        <div className="card__photo">
                            <img src={img} alt="nikeRed" />
                        </div>
                        <div className="card__info">
                            <div className="card_title">
                                <h4>{title}</h4>
                            </div>
                            <div className="card__price">
                                <h4>${price}</h4>
                                <i className="fas fa-cart-plus"/>
                            </div>
                        </div>
                    </div>
                )}
            </ProductConsumer>
        </div>
        )
    }
}

Card.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool,
	}).isRequired
}
