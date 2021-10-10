import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export default function AuthRoute({ component: Component, ...rest }) {
	const user = useSelector(selectUser);

	return (
		<Route
			{...rest}
			render={(props) =>
				user ? <Redirect to='/chatroom' /> : <Component {...props} />
			}
		/>
	);
}
