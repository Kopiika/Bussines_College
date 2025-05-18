"use strict"


/*dark and light theme*/
window.addEventListener("load", windowLoad);

function windowLoad() {
	const htmlBlock = document.documentElement;

	const saveUserTheme = localStorage.getItem('user-theme');

	let userTheme;
	if (window.matchMedia) {
		userTheme = window.matchMedia('(prefers-colorsheme: dark)').matches ? 'dark' : 'light';
	}
	window.matchMedia('(prefers-colorsheme: dark)').addEventListener('change', e => {
		!saveUserTheme ? changeTheme() : null;
	});

	const themeButton = document.querySelector('.page__theme');
	if (themeButton) {
		themeButton.addEventListener("click", function (e) {
			changeTheme(true);
		})
	}

	function setThemeClass() {
		if(saveUserTheme) {
			htmlBlock.classList.add(saveUserTheme)
		} else {
			htmlBlock.classList.add(userTheme);
		}
	}

	setThemeClass();

	function changeTheme(saveTheme = false) {
		let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
		let newTheme;

		if (currentTheme === 'light') {
			newTheme = 'dark';
		} else if (currentTheme === 'dark') {
			newTheme = 'light';
		}
		htmlBlock.classList.remove(currentTheme);
		htmlBlock.classList.add(newTheme);
		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
	}
}

/* prenting text */
const phrases = [
  "Junior web developer 💻",
  "Focused on frontend 🎯",
  "Lifelong learner ☕️",
  "UI/UX design enthusiast 🎨"
];

const el = document.getElementById("typewriter-text");
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  el.textContent = currentPhrase.substring(0, letterIndex);

  let speed = isDeleting ? 40 : 100;

  if (!isDeleting && letterIndex === currentPhrase.length) {
    speed = 1200; // Пауза перед стиранням
    isDeleting = true;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 500; // Пауза перед наступною фразою
  }

  setTimeout(type, speed);
}

type();




