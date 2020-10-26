import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__links">
                <h3>
                    <span>Order Information</span>
                    <span>Contact Us</span>
                    <span>FAQ</span>
                    {/* <span>Social media</span> */}
                    <span>Shipping Information</span>
                    <span>Return & Exchange Policy</span>
                </h3>
            </div>
            <div className="copyright">
                <p>© 2020, SHOES PARADISE ALL RIGHT RESERVED</p>
            </div>
        </div>
    )
}

export default Footer
