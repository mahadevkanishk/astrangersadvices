import React, { useRef, useState, useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { AuthContext } from "../Context/auth";
import db from "../firebase";
import "../CSS/chatBox.css";
import firebase from "firebase";

export default function ChatBox() {
	const { user } = useContext(AuthContext);
	const dummy = useRef();
	const messagesRef = db.collection("messages");
	const query = messagesRef.orderBy("createdAt").limit(25);

	const [messages] = useCollectionData(query, { idField: "id" });

	const [formValue, setFormValue] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault();

		const uid = user.username;

		await messagesRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
		});

		setFormValue("");
		dummy.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className='message-box'>
			<div className='message-subcontainer'>
				<div className='message-container'>
					{messages &&
						messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

					<span ref={dummy}></span>
				</div>

				<form onSubmit={sendMessage} className='message-form'>
					<input
						className='message-input'
						value={formValue}
						onChange={(e) => setFormValue(e.target.value)}
						placeholder='say something nice'
					/>

					<button className='msg-btn' type='submit' disabled={!formValue}>
						🕊️
					</button>
				</form>
			</div>
		</div>
	);
}

function ChatMessage(props) {
	const { user } = useContext(AuthContext);
	const { text, uid } = props.message;

	const messageClass = uid === user.username ? "sent" : "received";

	return (
		<>
			<div className={`message ${messageClass}`}>
				<img src='https://www.w3schools.com/w3images/avatar2.png' />
				<p>{text}</p>
			</div>
		</>
	);
}
