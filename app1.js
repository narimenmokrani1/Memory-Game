/*----- constants -----*/

/*----- app's state (variables) -----*/
/*----- cached element references -----*/
const earthPara = document.querySelector('.earth-info');
const jupiterPara = document.querySelector('.jupiter-info');
const marsPara = document.querySelector(".mars-info")
const mercuryPara = document.querySelector(".mercury-info")
const neptunePara = document.querySelector(".neptune-info")
const saturnPara = document.querySelector(".saturn-info")
const uranusPara = document.querySelector(".uranus-info")
const venusPara = document.querySelector(".venus-info")
const earth = document.querySelector('#earth');
const jupiter = document.querySelector("#jupiter")
const mars = document.querySelector("#mars")
const mercury = document.querySelector("#mercury")
const neptune = document.querySelector("#neptune")
const saturn = document.querySelector("#saturn")
const uranus = document.querySelector("#uranus")
const venus = document.querySelector("#venus")
const closeBtn = document.querySelector('#close');
const shadow = document.querySelector('.shadows');
/*----- event listeners -----*/
earth.addEventListener('click', showModalEarth);
jupiter.addEventListener('click', showModalJupiter);
mars.addEventListener("click", showModalMars)
mercury.addEventListener("click", showModalMercury)
neptune.addEventListener("click", showModalNeptune)
saturn.addEventListener("click", showModalSaturn)
uranus.addEventListener("click", showModalUranus)
venus.addEventListener("click", showModalvenus)
closeBtn.addEventListener('click', closeModalEarth);
closeBtn.addEventListener('click', closeModalJupiter);
closeBtn.addEventListener('click', closeModalMars);
closeBtn.addEventListener('click', closeModalMercury);
closeBtn.addEventListener('click', closeModalNeptune);
closeBtn.addEventListener('click', closeModalSaturn);
closeBtn.addEventListener('click', closeModalUranus);
closeBtn.addEventListener('click', closeModalVenus);

/*----- functions -----*/

const cardsArray = [
	{ card: 'earth', image: './planets-images/earth.png' },
	{ card: 'jupiter', image: './planets-images/jupiter.png' },
	{ card: 'mars', image: './planets-images/mars.png' },
	{ card: 'mercury', image: './planets-images/mercury.png' },
	{ card: 'neptune', image: './planets-images/neptune.png' },
	{ card: 'saturn', image: './planets-images/saturn.png' },
	{ card: 'uranus', image: './planets-images/uranus.png' },
	{ card: 'venus', image: './planets-images/venus.png' },
];

const planets = document.querySelectorAll('.planets');
for (let i = 0; i <= 7; i++) {
	planets[i].style.backgroundImage = `url(${'./planets-images'}/${
		cardsArray[i].card
	}.png)`;
}

for (let i = 0; i <= 7; i++) {
	planets[i].addEventListener('click', spreadImage);
	function spreadImage(event) {
		console.log('i am a planet');
	}
}

function showModalEarth() {
	console.log('i am earth');
	earthPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModalEarth() {
	console.log('i am closing');
	earthPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModalJupiter() {
	jupiterPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModal() {
	console.log('i am closing');
	jupiterPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModalMars() {
	console.log('i am earth');
	earthPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModal() {
	console.log('i am closing');
	earthPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModal() {
	console.log('i am earth');
	earthPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModal() {
	console.log('i am closing');
	earthPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModal() {
	console.log('i am earth');
	earthPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModal() {
	console.log('i am closing');
	earthPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModal() {
	console.log('i am earth');
	earthPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModal() {
	console.log('i am closing');
	earthPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModal() {
	console.log('i am earth');
	earthPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModal() {
	console.log('i am closing');
	earthPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModal() {
	console.log('i am earth');
	earthPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModal() {
	console.log('i am closing');
	earthPara.classList.add('hidden');
	shadow.classList.add('hidden');
}
