function notify(message, duration){
	const notificationBox = document.createElement("div");

	notificationBox.classList.add("notificationBox");

	notificationBox.innerText = message;

	document.body.appendChild(notificationBox);

	setTimeout(() => {
		notificationBox.remove();
	}, duration);
}

export default notify;