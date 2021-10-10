import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export default function GuestRoute({ component: Component, ...rest }) {
	const user = useSelector(selectUser);

	return (
		<Route
			{...rest}
			render={(props) =>
				!user ? <Redirect to='/test' /> : <Component {...props} />
			}
		/>
	);
}
