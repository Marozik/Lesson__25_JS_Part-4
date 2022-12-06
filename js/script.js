// Строгий режим
"use strict"

const searchForm = document.querySelector('.form');
const sendButton = document.querySelector('.form__button');
const formLine = document.querySelector('.form__line');

const formInput = document.querySelector('.form__input');
const maxText = formInput.getAttribute('maxlength');
const textCounter = document.querySelector('.form__couter span');
const staticTextCounter = document.querySelector('.form__couter');

textCounter.innerHTML = 0;

document.addEventListener('click', search);
document.addEventListener('keyup', onTypeActions);
formInput.addEventListener('keyup', textSetCounter);
formInput.addEventListener('keydown', textInputRepeat);

function search(e) {
	if(e.target.closest('.form__open-button')) {
		searchForm.classList.toggle('_active');
		e.preventDefault();
	}
	if(!e.target.closest('.form')) {
		searchForm.classList.remove('_active');
	}
	if(e.target === sendButton) {
		e.preventDefault();
	}
}
function onTypeActions(e) {
	if (e.code === "Escape") {
		searchForm.classList.remove('_active');
	}
	if(e.code === "Enter" && formLine.hasAttribute('tabindex')) {
		searchForm.classList.add('_active');
	}
};

function textInputRepeat(e) {
	if(e.repeat) {
		textSetCounter();
	};
};

function textSetCounter() {
	if(formInput) {
		const textCounterResult = formInput.value.length;
		textCounter.innerHTML = textCounterResult;

	} if(textCounter.innerHTML === '30') {
		staticTextCounter.classList.add('red');
		searchForm.classList.add('error');
		formInput.style.cssText = `
		border-bottom: 1px solid red;
		`;
	} else {
		staticTextCounter.classList.remove('red');
		searchForm.classList.remove('error');
		formInput.style.cssText = `
		border-bottom: 1px solid rgba(95, 92, 92, 0.292);
		`;
	};
};

