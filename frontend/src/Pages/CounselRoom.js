import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CounselChat from "../Components/CounselChat";
import { selectUser } from "../features/userSlice";
import Login from "../Pages/Login";
import { auth } from "../firebase";
import { login, logout } from "../features/userSlice";
import "../CSS/chatrooms.css";

function ChatRooms() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				//userloggedin
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName,
					})
				);
			} else {
				//userloggedout
				dispatch(logout());
			}
		});
	}, [dispatch]);
	return (
		//Bem naming convention
		<div className='chatrooms'>
			{user ? (
				<>
					<CounselChat />
				</>
			) : (
				<Login />
			)}
		</div>
	);
}

export default ChatRooms;
