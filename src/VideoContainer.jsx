import React from "react";

function VideoContainer(){
    return (
        <div id="learn" className="videoContainer">
            <div className="contentTitle">
                <h2 className="contentText">
                    Learn Game Development
                </h2>
            </div>

            <div className="videoBox">
                <iframe className="videoBoxVideo" src="https://www.youtube.com/embed/7BHs1BzA4fs"></iframe>
                
                <div className="videoBoxDetail">
                    <h3 className="videoBoxTitle">
                        Basic Web Game
                    </h3>

                    <p className="videoBoxText">
                        Get started with basic game development using HTML/CSS/JS with this tutorial on FreeCodeCamp.
                    </p>
                </div>
            </div>

            <div className="videoBox">
                <iframe className="videoBoxVideo" src="https://www.youtube.com/embed/GFO_txvwK_c"></iframe>

                <div className="videoBoxDetail">
                    <h3 className="videoBoxTitle">
                        Complete Javascript Game Development
                    </h3>

                    <p className="videoBoxText">
                        Learn how to make games using Javascript from this tutorial on FreeCodeCamp.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoContainer;