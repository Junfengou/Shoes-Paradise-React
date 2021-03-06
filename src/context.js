import React, { Component } from 'react'
import { storeProducts, detailProduct} from "./data"
import Axios from "axios"



//Important to note that once the context is created, it need provider and consumer

//create context object
const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products: [],
        userData: {
            token: undefined,
            user: undefined,
        },
       
    }
    componentDidMount() 
    {
        this.setProduct();
        this.checkLoggedIn();
        
    }

    componentWillUpdate() {
        localStorage.setItem("Item", JSON.stringify(this.state.cart));
    }


    checkLoggedIn = async () => {
        let token = localStorage.getItem("auth-token");
        if(token === null)
        {
            localStorage.setItem("auth-token", "");
            token = "";
        }

        const tokenRes = await Axios.post("http://localhost:5000/users/tokenIsValid",
        null,
        {headers: {"x-auth-token" : token}});

        console.log(tokenRes);
        if(tokenRes.data)
        {
            const userRes = await Axios.get("http://localhost:5000/users/",
            {header : {"x-auth-token" : token}
        });
        console.log("userRes: ", userRes);
        
        this.setState(() => {
            return {
                token,
                user : userRes.data
            }
        })
        }
    }


    //This method will fix the reference problem
    setProduct = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
            

        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }


    //This target the id of the selected item
    getItem = (id) => {
        //If the id that's passed in matches the current item id
        const product = this.state.products.find(item => item.id === id)
        return product;
    }

    handleDetail = (id) => {
        //console.log("hello from details");
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct:product,}
        })
    }
 
    render() {
        return (
            <ProductContext.Provider value={{
                //products: this.state.products,
                ...this.state,
                handleDetail: this.handleDetail,
            }}>
                {this.props.children} {/**Must handle children in here */}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};

//The context API should live in the highest point of the component. 
    //Only place is Index.js because it wrapp in APP.js


//ProductProvider wrap around all component in the highest point

// ProductConsumer is being used by each individual component