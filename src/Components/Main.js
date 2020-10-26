import React, { Component } from 'react'
import Banner from "./page/Banner"
import ProductList from "./page/ProductList"
import SecBanner from "./page/Second_Banner"
import Comment from "./page/Comment"
import GiveAway from "./page/GiveAway"

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
