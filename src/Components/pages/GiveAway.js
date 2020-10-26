import React from 'react'
// import Gift from "../images/gift.jpg"
import styled from "styled-components"
import "./GiveAway.css"

export default function GiveAway() {
    return (
        <div className="giveaway">
           <div className="giveaway__left" >
               {/* <img src={Gift} alt="gift"/> */}
           </div>
           <div className="giveaway__right">
               <h1>December Give Away</h1>
               <h3>We are doing special giveaway this winter!</h3>
               <p>To participate in this giveaway, click the button below <br />
               and sign up today!</p>
               <ButtonContainerz>LEARN MORE</ButtonContainerz>
           </div>
        </div>
    )
}


const ButtonContainerz = styled.button `
    font-size: 1rem;
    /* height: 2.3rem; */
    border: solid var(--mainGray);
    background-color: var(--mainGray);
    color: var(--mainBlack);
    border-radius: 0.2rem;
    padding: 1rem;
    cursor: pointer;
    &:hover {
        background: var(--mainBlack);
        border: solid var(--mainWhite);
        color: var(--mainWhite);
        transition: 0.3s ease-in;
    }
`;