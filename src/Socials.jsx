import React from "react";
import notify from "./notify.jsx";

function Socials(){
	const openSocial = (url) => {
		if (url){
	        window.open(url, "_blank").focus();
		}
		else{
			notify("Coming soon!", 2000);
		}
	};

	return (
		<div id="connect" className="socialsContainer">
			<div className="socialBox">
				<div className="socialBoxIcon">
					<img className="socialBoxIconImage" src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" draggable="false"/>
				</div>

	            <div className="contentBoxButton socialBoxButton" onClick={() => {openSocial(false)}}>
	                Follow
	            </div>
			</div>

			<div className="socialBox">
				<div className="socialBoxIcon">
					<img className="socialBoxIconImage" src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" draggable="false"/>
				</div>

	            <div className="contentBoxButton socialBoxButton" onClick={() => {openSocial("https://www.linkedin.com/in/anuj-chowdhury-a5aab6263")}}>
	                Follow
	            </div>
			</div>

			<div className="socialBox">
				<div className="socialBoxIcon">
					<img className="socialBoxIconImage" src="https://cdn-icons-png.flaticon.com/128/4494/4494485.png" draggable="false"/>
				</div>

	            <div className="contentBoxButton socialBoxButton" onClick={() => {openSocial(false)}}>
	                Follow
	            </div>
			</div>
		</div>
	);
}

export default Socials;