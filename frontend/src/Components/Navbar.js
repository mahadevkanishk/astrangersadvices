import * as React from "react";
import Button from "@mui/material/Button";
import Logo from "./images/Logo.jpeg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/auth";
import "./style.css";

export default function ButtonAppBar() {
	const { user, logout } = useContext(AuthContext);
	return (
		<div className='nav-main'>
			<Link to='/' className='home-link'>
				<div className='div-left'>
					<span className='nav-heading'>Just Talk</span>
				</div>
			</Link>
			{user ? (
				<div className='logout-button'>
					<Button color='inherit' className='Login-Button' onClick={logout}>
						LOG OUT
					</Button>
				</div>
			) : (
				<div className='div-right'>
					<Link to='/login' className='login-link'>
						<Button color='inherit' className='Login-Button'>
							SIGN IN
						</Button>
					</Link>
				</div>
			)}
		</div>
	);
}
