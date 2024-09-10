import React from "react";
import notify from "./notify.jsx";

function Form(){
	const submitForm = () => {
		notify("Form submitted!", 2000);
	};

	return (
		<>
            <div id="reach" className="contentTitle contentTitle2">
                <h2 className="contentText">
                    Social Media
                </h2>
            </div>

			<div className="formContainer">
				<h2 className="formTitle">
					Connect with Me
				</h2>

				<div className="formName">
					<p className="formNameTitle"> Name: </p>

					<input className="formNameInput" type="text"/>
				</div>

				<div className="formEmail">
					<p className="formEmailTitle"> Email: </p>

					<input className="formEmailInput" type="text"/>
				</div>

				<div className="formRating">
					<p className="formRatingTitle"> Rating: </p>

					<select className="formRatingInput">
						<option> Amazing </option>
						<option> Good </option>
						<option> Fine </option>
						<option> Bad </option>
					</select>
				</div>

				<div className="formMessage">
					<p className="formMessageTitle"> Message: </p>

					<textarea className="formMessageInput"></textarea>
				</div>

	            <div className="contentBoxButton" onClick={submitForm}>
	                Submit
	            </div>
			</div>
		</>
	);
}

export default Form;