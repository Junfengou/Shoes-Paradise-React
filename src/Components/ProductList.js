import React, { Component } from 'react'
import Card from "./Card"
import { ProductConsumer } from "../context"
import "./ProductList.css"

export default class ProductList extends Component {
    render() {
        return (
            <div className="productList">
            <div className="productList__wrapper">
                <div className="productList__title">
                    <h1>FEATURED PRODUCTS</h1>
                </div>
                <div className="productList__body">

                    {/* <Card />
                    <Card />
                    <Card />
                    <Card /> */}
                    <ProductConsumer>
                        {value => {
                            console.log("List of products", value)
                             return value.products.map(product => {
                                 return <Card key={product.id} product={product} />
                             })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </div>
        )
    }
}
