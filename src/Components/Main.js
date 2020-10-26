import React, { Component } from 'react'
import Banner from "./pages/Banner"
import ProductList from "./ProductList"
import SecBanner from "./pages/Second_Banner"
import Comment from ".//pages/Comment"
import GiveAway from "./pages/GiveAway"

export default class Main extends Component {
    render() {
        return (
            <div>
                <Banner />
                <ProductList />
                <SecBanner />
                <Comment />
                <GiveAway />
            </div>
        )
    }
}
