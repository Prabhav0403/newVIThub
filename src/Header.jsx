import React from "react";

export default function Header({ onCartClick, onJoinUsClick }) { 
    return (
        <div className="header">
            <div className="site-name">
                <img src="../images/siteLogo.png" alt="site-logo" />
                <h1>VIThub</h1>
            </div>
            <div className="search">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                    //onChange
                    />
                </div>
                <button className="search-button">
                    Search
                </button>
            </div>
            <div className="misc-buttons">
                <button className="join-us" onClick={onJoinUsClick}>
                    <p>Join us</p>
                </button>
                <button className="shopping-cart" onClick={onCartClick}> 
                    <img src="../images/shoppingCart.jpg" alt="shopping-cart" />
                </button>
            </div>
        </div>
    )
}
