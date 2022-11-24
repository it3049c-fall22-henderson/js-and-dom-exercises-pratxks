// 🤖: create 2 constants with references to the password input and the reveal button from the DOM


// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.


// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
	e.preventDefault();
});

const togglebutton = document.getElementById('togglePassword');
togglebutton.addEventListener('click', function (e) {
	if (document.getElementById('password').type == 'password') {
		document.getElementById('password').type = 'text';
	}
	else if (document.getElementById('password').type == 'text') {
		document.getElementById('password').type = 'password';
	}
});
