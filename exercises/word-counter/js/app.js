// 🤖: create 2 constants with references to textarea input and the stats section from the DOM

const textboxarea = document.getElementById('text');
const statsarea = document.getElementById('stat');

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

textboxarea.addEventListener('input', function (e) {
  const textinput = textboxarea.value;

  const chars = textinput.split('');
  const words = textinput.split(' ');

  let characterslength = chars.length;
  let wordlength = words.length;

  statsarea.innerText = "You've written " + wordlength + " words and " + characterslength + " characters."
});