function processForm(event) {
	event.preventDefault();
	const name = document.getElementById("name").ariaValueMax;
	document.getElementById("userForm").addEventListener("submit", processForm);
}