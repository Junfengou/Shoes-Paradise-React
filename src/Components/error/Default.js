import React from 'react'
import Footer from "../pages/Footer"
import styled from "styled-components"
import { Link } from "react-router-dom"
import "./Default.css"

function Default() {
    return (
        <div className="default">
            <div className="error__message__section">
                <h1>404 Page Not Found</h1>
                <p>The page you requested does not exist</p>
                <Link to="/">
                    <ButtonContainerz>Continue shopping</ButtonContainerz>
                </Link>
            </div>
            {/* <div className="footer__section">
                <Footer />
            </div> */}
        </div>
    )
}

export default Default


const ButtonContainerz = styled.button `
    font-size: 1rem;
    /* height: 2.3rem; */
    border: solid var(--mainBlack);
    background-color: var(--mainBlack);
    color: var(--mainWhite);
    border-radius: 0.2rem;
    padding: 1rem;
    cursor: pointer;
    &:hover {
        background: var(--mainGray);
        border: solid var(--mainGray);
        color: var(--mainBlack);
        transition: 0.3s ease-in;
    }
`;