import React from "react";

function Menu({setMenuOpen, scrollToElement}){
	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<div className="menuContainer">
			<div className="menu">
				<div className="material-symbols-outlined closeButton" onClick={closeMenu}>
					close
				</div>

				<div className="menuIconImageBox" onClick={() => {scrollToElement("#home")}}>
					<img className="menuIconImage" src="https://i.postimg.cc/JnxhpN56/game-Icon-Main.png" draggable="false"/>
				</div>

				<div className="menuLinkContainer">
					<div className="menuLinkButton" onClick={() => {scrollToElement("#games")}}>
						Games
					</div>

					<div className="menuLinkButton" onClick={() => {scrollToElement("#learn")}}>
						Learn
					</div>

					<div className="menuLinkButton" onClick={() => {scrollToElement("#reach")}}>
						Reach
					</div>

					<div className="menuLinkButton" onClick={() => {scrollToElement("#connect")}}>
						Connect
					</div>
				</div>

				<div className="menuFooter">
					💎 Created by Anuj Chowdhury 💎
				</div>
			</div>
		</div>
	);
}

export default Menu;