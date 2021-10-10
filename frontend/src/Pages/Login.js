import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import "../CSS/Login.css";
import Logo from "../Logo.png";
function Login() {
	const singIn = (e) => {
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};
	return (
		<div className='login'>
			<div className='login__logo'>
				<img src={Logo} alt='logo'></img>
			</div>
			<Button onClick={singIn}>Sign Into Stanger's Advice</Button>
		</div>
	);
}

export default Login;
