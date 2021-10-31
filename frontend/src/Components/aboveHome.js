import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Above() {
	const [showBtns, setShowBtns] = useState(false);
	return (
		<React.Fragment>
			<div className='above'>
				<h1 className='above_h1'>Just Talk</h1>
				<p className='above_p'>One stop shop for all your therapeutic needs.</p>
			</div>
		</React.Fragment>
	);
}

export default Above;
