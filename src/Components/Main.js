import React, { Component } from 'react'
import Banner from "./Banner"
import ProductList from "./ProductList"
import SecBanner from "./Second_Banner"
import Comment from "./Comment"
import GiveAway from "./GiveAway"
import Footer from "./Footer"

export default class Main extends Component {
    render() {
        return (
            <div>
                <Banner />
                <ProductList />
                <SecBanner />
                <Comment />
                <GiveAway />
                <Footer />
            </div>
        )
    }
}
