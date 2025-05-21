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

/* printing text in Hero section */
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
    speed = 1200; // pause before erasing
    isDeleting = true;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 500; // Pause before the next phrase
  }

  setTimeout(type, speed);
}

type();

/* --animate stuck section */

const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.2,
}

const callback = (entries, observer) => {
	entries.forEach(entry => {
		const currentElement = entry.target
		if (entry.isIntersecting) {
			currentElement.classList.add('--animate')
		} else {
			currentElement.classList.remove('--animate')
		}
	})
}

const observer = new IntersectionObserver(callback, options)

const animElements = document.querySelectorAll('[class*="--anim"]')
animElements.forEach (animElement => {
	observer.observe(animElement)
})


/* modal in projects section*/
document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('project-modal');
	const modalImage = modal.querySelector('.modal__image');
	const modalTitle = modal.querySelector('.modal__title');
	const modalDescription = modal.querySelector('.modal__description');
	const modalTools = modal.querySelector('.modal__tools');
	const modalLinks = modal.querySelector('.modal__links');
	const closeBtn = modal.querySelector('.modal__close');
	const overlay = modal.querySelector('.modal__overlay');
 
	const projectCards = document.querySelectorAll('.project-card');
 
	projectCards.forEach(card => {
	  card.addEventListener('click', () => {
		 const image = card.querySelector('img')?.src;
		 const title = card.querySelector('h3')?.textContent;
		 const description = card.querySelectorAll('p')[1]?.textContent || '';
		 const tools = card.querySelectorAll('p')[0]?.textContent || '';
		 const links = card.querySelectorAll('p')[2]?.innerHTML || '';
 
		 modalImage.src = image;
		 modalTitle.textContent = title;
		 modalDescription.textContent = description;
		 modalTools.textContent = tools;
		 modalLinks.innerHTML = links;
 
		 modal.style.display = 'block';
		 document.body.style.overflow = 'hidden';
	  });
	});
 
	const closeModal = () => {
	  modal.style.display = 'none';
	  document.body.style.overflow = '';
	};
 
	closeBtn.addEventListener('click', closeModal);
	overlay.addEventListener('click', closeModal);
 });
 
/* Smooth scrolling */
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function (e) {
	  e.preventDefault();
 
	  const targetId = this.getAttribute("href").substring(1);
	  const target = document.getElementById(targetId);
 
	  const header = document.getElementById("site-header");
	  const headerHeight = header.offsetHeight;
 
	  const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
 
	  window.scrollTo({
		 top: targetPosition,
		 behavior: "smooth"
	  });
	});
 });
 
 
 /* Scroll to Top Button */
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});