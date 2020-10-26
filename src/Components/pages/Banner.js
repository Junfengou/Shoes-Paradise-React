import React from 'react'
import styled from "styled-components"
import "./Banner.css"

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner__wrapper">
                <div className="banner__text">
                    <div className="banner__text__left">
                        <h4>ELEVATE YOUR</h4> 
                    </div>

                    <div className="banner__text__right">
                        <h4>SHOES GAME</h4>
                    </div>
                </div>

                
            </div>           
        </div>
    )
}


const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.8rem;
	background: transparent;
	//border: 5rem soild var(--customColor);
	border: solid var(--customColor);
	border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--customColor)"};
	margin: 0.5rem;
	color: ${props => props.cart ? "var(--mainYellow)" : "var(--customColor)"};
	border-radius: 0.5rem;
	padding: 0.2rem, 0.5rem;
	cursor: pointer;
	margin: 0.2rem, 0.5rem, 0.2rem, 0;
	transition: all 0.5s ease-in-out;
	&:hover {
		background: ${props => props.cart ? "var(--mainYellow)" : "var(--customColor)"};
		color: ${props => props.cart ? "var(--mainWhite)" : "var(--mainWhite)"};
	}
	&:focus {
		outline: none;
	}
`;
