import React, { useState } from "react";
import { Button } from "bootstrap";

//create your first component
export function Home() {
	const [btnClassRed, setBtnClassRed] = useState("");
	const [btnClassYellow, setBtnClassYellow] = useState("");
	const [btnClassGreen, setBtnClassGreen] = useState("");

	const handleClickRed = () => {
		setBtnClassRed("selected"), setBtnClassYellow(""), setBtnClassGreen("");
	};

	const handleClickYellow = () => {
		setBtnClassRed(""), setBtnClassYellow("selected"), setBtnClassGreen("");
	};

	const handleClickGreen = () => {
		setBtnClassRed(""), setBtnClassYellow(""), setBtnClassGreen("selected");
	};

	return (
		<div className="main-container">
			<div className="top-traffic-light"></div>
			<div className="bottom-traffic-light">
				<button
					onClick={handleClickRed}
					className={"redLight ${btnClassRed}"}></button>
				<button className="yellow-light"></button>
				<button className="green-light"></button>
			</div>
		</div>
	);
}
