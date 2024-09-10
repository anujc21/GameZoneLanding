import React from "react";

function Header({setMenuOpen, scrollToElement}){
    const openMenu = () => {
        setMenuOpen(true);
    };

    return (
        <div className="header">
            <h1 className="headerText">
                Anuj's Game Zone
            </h1>

            <div className="headerLink" onClick={() => {scrollToElement("#games")}}>
                Games
            </div>

            <div className="headerLink" onClick={() => {scrollToElement("#learn")}}>
                Learn
            </div>

            <div className="headerLink" onClick={() => {scrollToElement("#reach")}}>
                Reach
            </div>

            <div className="headerLink" onClick={() => {scrollToElement("#connect")}}>
                Connect
            </div>

            <div className="material-symbols-outlined menuIcon" onClick={openMenu}>
                menu
            </div>
        </div>
    );
}

export default Header;