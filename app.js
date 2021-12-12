/*----- constants -----*/
const cardsArr = [
	{image: './planets-images/earth.png' },
	{image: './planets-images/earth.png' },
	{image: './planets-images/jupiter.png' },
	{image: './planets-images/jupiter.png' },
	{image: './planets-images/mars.png' },
	{image: './planets-images/mars.png' },
	{image: './planets-images/mercury.png' },
	{image: './planets-images/mercury.png' },
	{image: './planets-images/neptune.png' },
	{image: './planets-images/neptune.png' },
	{image: './planets-images/saturn.png' },
	{image: './planets-images/saturn.png' },
	{image: './planets-images/uranus.png' },
	{image: './planets-images/uranus.png' },
	{image: './planets-images/venus.png' },
	{image: './planets-images/venus.png' },
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
		cards[i].addEventListener('click', flipCard);
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
				for (let i = 0; i <= 15; i++) {}
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
	clickedCards = [];
	matchedCards = [];
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
					cards[
						i
					].style.backgroundImage = `url(${'./GAME_IMAGES/back-image.jpeg'})`;
				}
			}
		}, 2000);
	}
	console.log(matchedCards);
}
