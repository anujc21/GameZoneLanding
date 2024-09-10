import React, {useState} from "react";
import Header from "./Header.jsx";
import Menu from "./Menu.jsx";
import Information from "./Information.jsx";
import ContentContainer from "./ContentContainer.jsx";
import VideoContainer from "./VideoContainer.jsx";
import Form from "./Form.jsx";
import Socials from "./Socials.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App(){
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToElement = (id) => {
        location.href = "#";
        location.href = id;
    };

    return (
        <div className="container">
            {(menuOpen) &&
                <Menu setMenuOpen={setMenuOpen} scrollToElement={scrollToElement}/>
            }

            <Header setMenuOpen={setMenuOpen} scrollToElement={scrollToElement}/>

            <div className="content">
                <Information scrollToElement={scrollToElement}/>
                <ContentContainer/>
                <VideoContainer/>
                <Form/>
                <Socials/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;