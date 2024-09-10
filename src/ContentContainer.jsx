import React from "react";

function ContentContainer(){
    const openGame = (url) => {
        window.open(url, "_blank").focus();
    };

    return (
        <div id="games" className="contentContainer">
            <div className="contentTitle">
                <h2 className="contentText">
                    Explore my Games
                </h2>
            </div>

            <div className="contentBox">
                <div className="contentBoxBackground contentBoxBackground1"></div>

                <div className="contentBoxInformation">
                    <h3 className="contentBoxTitle">
                        FantaWorld
                    </h3>

                    <p className="contentBoxText">
                        A multiplayer fantasy game.
                    </p>

                    <div className="contentBoxButton" onClick={() => {openGame("https://fantaworld.pages.dev")}}>
                        Play
                    </div>
                </div>
            </div>

            <div className="contentBox">
                <div className="contentBoxBackground contentBoxBackground2"></div>

                <div className="contentBoxInformation">
                    <h3 className="contentBoxTitle">
                        MusicStar
                    </h3>

                    <p className="contentBoxText">
                        A game about musical instruments.
                    </p>

                    <div className="contentBoxButton" onClick={() => {openGame("https://musicstar.pages.dev")}}>
                        Play
                    </div>
                </div>
            </div>

            <div className="contentBox">
                <div className="contentBoxBackground contentBoxBackground3"></div>

                <div className="contentBoxInformation">
                    <h3 className="contentBoxTitle">
                        GalaxyInvaders
                    </h3>

                    <p className="contentBoxText">
                        A platformer game held in space.
                    </p>

                    <div className="contentBoxButton" onClick={() => {openGame("https://galaxy-invaders.pages.dev")}}>
                        Play
                    </div>
                </div>
            </div>

            <div className="contentBox">
                <div className="contentBoxBackground contentBoxBackground4"></div>

                <div className="contentBoxInformation">
                    <h3 className="contentBoxTitle">
                        SkyWars
                    </h3>

                    <p className="contentBoxText">
                        A multiplayer jet shooting game.
                    </p>

                    <div className="contentBoxButton" onClick={() => {openGame("https://skywargame.pages.dev")}}>
                        Play
                    </div>
                </div>
            </div>

            <div className="contentBox">
                <div className="contentBoxBackground contentBoxBackground5"></div>

                <div className="contentBoxInformation">
                    <h3 className="contentBoxTitle">
                        JusticeSword
                    </h3>

                    <p className="contentBoxText">
                        An action platformer game with swords.
                    </p>

                    <div className="contentBoxButton" onClick={() => {openGame("https://justicesword.pages.dev")}}>
                        Play
                    </div>
                </div>
            </div>

            <div className="contentBox">
                <div className="contentBoxBackground contentBoxBackground6"></div>

                <div className="contentBoxInformation">
                    <h3 className="contentBoxTitle">
                        CrateStacker
                    </h3>

                    <p className="contentBoxText">
                        A game where you need to stack crates.
                    </p>

                    <div className="contentBoxButton" onClick={() => {openGame("https://cratestacker.pages.dev")}}>
                        Play
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentContainer