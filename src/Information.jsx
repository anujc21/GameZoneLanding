import React from "react";

function Information({scrollToElement}){
	return (
		<div id="home" className="informationContainer">
			<div className="information information1">
				<div className="informationBox">
					<h2 className="informationBoxTitle">
						My Game Collection
					</h2>

					<h3 className="informationBoxTitle">
						Made using HTML/CSS/JS
					</h3>

					<div className="informationButton" onClick={() => {scrollToElement("#games")}}>
						Explore
					</div>
				</div>
			</div>

			<div className="information information2">
				<div className="informationBox">
					<h2 className="informationBoxTitle">
						Learn To Make Games
					</h2>

					<h3 className="informationBoxTitle">
						Learn on YouTube
					</h3>

					<div className="informationButton" onClick={() => {scrollToElement("#learn")}}>
						Learn
					</div>
				</div>
			</div>

			<div className="information information3">
				<div className="informationBox">
					<h2 className="informationBoxTitle">
						Check Out My Socials
					</h2>

					<h3 className="informationBoxTitle">
						Connect on Social Media
					</h3>

					<div className="informationButton" onClick={() => {scrollToElement("#connect")}}>
						Check
					</div>
				</div>
			</div>
		</div>
	);
}

export default Information;