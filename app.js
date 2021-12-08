// console.log('check from app');

/*----- constants -----*/
const cardsArr = [
	{ card: 0, image: './planets-images/earth.png' },
	{ card: 1, image: './planets-images/earth.png' },
	{ card: 2, image: './planets-images/jupiter.png' },
	{ card: 3, image: './planets-images/jupiter.png' },
	{ card: 4, image: './planets-images/mars.png' },
	{ card: 5, image: './planets-images/mars.png' },
	{ card: 6, image: './planets-images/mercury.png' },
	{ card: 7, image: './planets-images/mercury.png' },
	{ card: 8, image: './planets-images/neptune.png' },
	{ card: 9, image: './planets-images/neptune.png' },
	{ card: 10, image: './planets-images/saturn.png' },
	{ card: 11, image: './planets-images/saturn.png' },
	{ card: 12, image: './planets-images/uranus.png' },
	{ card: 13, image: './planets-images/uranus.png' },
	{ card: 14, image: './planets-images/venus.png' },
	{ card: 15, image: './planets-images/venus.png' },
];
/*----- app's state (variables) -----*/
let matchedCards = [];

/*----- cached element references -----*/
const resetBtn = document.querySelector('#reset');
const DarkModeBtn = document.querySelector('#dark-mode');
const sneakPeekBtn = document.querySelector('#sneak-peek');
const gameContainer = document.querySelector('.game-container');
const cards = document.querySelectorAll('.card');
const h2Counter = document.querySelector('h2');
console.log(cards)
/*----- event listeners -----*/
resetBtn.addEventListener('click', init);
DarkModeBtn.addEventListener('click', darkTheme);

// sneakPeekBtn.addEventListener('click', checkCards);

/*----- functions -----*/
function init(event) {
	console.log('i am a button');
	shuffle(cardsArr);
	// console.log(cardsArr);
	for (let i = 0; i <= 15; i++) {
		cards[i].addEventListener('click', flipCard);
		function flipCard(event) {
			cards[i].style.backgroundImage = `url(${cardsArr[i].image})`;
		}
	}
}

//https://javascript.info/task/shuffle
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
// shuffle(cardsArr)
// console.log(cardsArr)

function darkTheme() {
	let body = document.querySelector('body');
	// console.log("i am a dark button")
	body.classList.toggle('dark-mode');
	let body1 = document.querySelector('.dark-mode');
	if (body1 !== null) {
		DarkModeBtn.innerText = 'Light Mode';
	} else {
		DarkModeBtn.innerText = 'Dark Mode';
	}
}
