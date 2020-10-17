import React from 'react'
import styled from "styled-components"
import "./Second_Banner.css"


export default function Second_Banner() {
    return (
        <div className="second__banner">
            <div className="overlay">
                <div className="second__banner__wrapper">
                    <div className="second__banner__title">
                        <h1>THE BEST AFTERMARKET SHOES HUB</h1>
                    </div>
                    <div className="second__banner__btn">
                        <ButtonContainerz>LEARN MORE</ButtonContainerz>
                    </div>
                </div>
            </div>
        </div>
    )
}



const ButtonContainerz = styled.button `
    font-size: 1rem;
    /* height: 2.3rem; */
    border: solid var(--mainWhite);
    border-radius: 0.2rem;
    padding: 1rem;
    cursor: pointer;
    &:hover {
        background: var(--mainBlack);
        border: solid var(--mainBlack);
        color: var(--mainWhite);
        transition: 0.3s ease-in;
    }
`;
