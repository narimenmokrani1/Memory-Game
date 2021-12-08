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
let clickedCards = []
/*----- cached element references -----*/
const resetBtn = document.querySelector('#reset');
const DarkModeBtn = document.querySelector('#dark-mode');
const sneakPeekBtn = document.querySelector('#sneak-peek');
const gameContainer = document.querySelector('.game-container');
const cards = document.querySelectorAll('.card');
const h2Counter = document.querySelector('h2');
// console.log(cards);
/*----- event listeners -----*/
resetBtn.addEventListener('click', reset);
DarkModeBtn.addEventListener('click', darkTheme);
// cards.addEventListener("click", init)
// sneakPeekBtn.addEventListener('click', sneakingOnCards);

/*----- functions -----*/
function init(event) {

	// console.log('i am a button');
	//first loop through the cards and add their original backgrounf image
	for (let i = 0; i <= 15; i++) {
		cards[i].style.backgroundImage = `url(${'./GAME_IMAGES/back-image.jpeg'})`;
	}
	shuffle(cardsArr);
	// console.log(cardsArr);
	for (let i = 0; i <= 15; i++) {
		cards[i].addEventListener('click', flipCard);
		function flipCard(event) {
			cards[i].style.backgroundImage = `url(${cardsArr[i].image})`;
			console.log(event.target.style.backgroundImage)
			clickedCards.push(event.target);
			//check match with an if else
			if (clickedCards.length === 2) {
				if (clickedCards[0].style.backgroundImage === clickedCards[1].style.backgroundImage) {
					console.log("there is a match")
					clickedCards = []
					matchedCards.push(clickedCards[0])
					matchedCards.push(clickedCards[1])
				} else {
					setTimeout(function() {
						clickedCards[0].style.backgroundImage = `url(${'./GAME_IMAGES/back-image.jpeg'})`;
						clickedCards[1].style.backgroundImage = `url(${'./GAME_IMAGES/back-image.jpeg'})`;
						clickedCards = []
					}, 1000)
				}

			} 
			if (matchedCards.length === 16) {
				h2Counter.innerHTML = "You Have Found All The Planets!"
				h2Counter.classList.add("win")
				console.log("you won")
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

function render() {}

// function matchedCards () {

// }

// function sneakingOnCards () {
// 	setTimeout (function () {
		
// 	}, 3000)
// }
function reset () {
	init()
	h2Counter.innerHTML = 'Still Looking For Planets';
	h2Counter.classList.remove('win');
}