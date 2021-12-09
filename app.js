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
let clickedCards = [];
/*----- cached element references -----*/
const resetBtn = document.querySelector('#reset');
const DarkModeBtn = document.querySelector('#dark-mode');
const sneakPeekBtn = document.querySelector('#sneak-peek');
const cards = document.querySelectorAll('.card');
const h2Counter = document.querySelector('h2');
/*----- event listeners -----*/
resetBtn.addEventListener('click', reset);
DarkModeBtn.addEventListener('click', darkTheme);
sneakPeekBtn.addEventListener('click', sneakingOnCards);

/*----- functions -----*/
function init(event) {
	for (let i = 0; i <= 15; i++) {
		cards[i].style.backgroundImage = `url(${'./GAME_IMAGES/back-image.jpeg'})`;
	}
	shuffle(cardsArr);
	for (let i = 0; i <= 15; i++) {
		cards[i].addEventListener('click',flipCard)
		function flipCard(event) {
			cards[i].style.backgroundImage = `url(${cardsArr[i].image})`;
			clickedCards.push(cards[i]);
			//check match with an if else
			if (clickedCards.length === 2) {
				if (
					clickedCards[0].style.backgroundImage ===
					clickedCards[1].style.backgroundImage
				) {
					matchedCards.push(clickedCards[0]);
					matchedCards.push(clickedCards[1]);
					clickedCards = [];
				} else {
					setTimeout(function () {
						clickedCards[0].style.backgroundImage = `url(${'./GAME_IMAGES/back-image.jpeg'})`;
						clickedCards[1].style.backgroundImage = `url(${'./GAME_IMAGES/back-image.jpeg'})`;
						clickedCards = [];
					}, 1000);
				}
			}
			if (matchedCards.length === 16) {
				h2Counter.innerHTML = 'You Have Found All The Planets!';
				h2Counter.classList.add('win');
			}
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

function darkTheme() {
	let body = document.querySelector('body');
	body.classList.toggle('dark-mode');
	let body1 = document.querySelector('.dark-mode');
	if (body1 !== null) {
		DarkModeBtn.innerText = 'Light Mode';
	} else {
		DarkModeBtn.innerText = 'Dark Mode';
	}
}

function reset() {
	matchedCards = [];
	clickedCards = [];
	h2Counter.innerHTML = 'Still Looking For Our Solar System Planets';
	h2Counter.classList.remove('win');
	init();
}

function sneakingOnCards() {
	for (let i = 0; i <= 15; i++) {
		cards[i].style.backgroundImage = `url(${cardsArr[i].image})`;
	
	setTimeout(function () {
		for (let i = 0; i <= 15; i++) {
			if (matchedCards.includes(cards[i])) {
			} else {
				cards[i].style.backgroundImage = `url(${'./GAME_IMAGES/back-image.jpeg'})`;
			}
		}
		
	}, 2000);
}
}



