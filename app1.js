/*----- constants -----*/
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
/*----- cached element references -----*/
const earthPara = document.querySelector('.earth-info');
const jupiterPara = document.querySelector('.jupiter-info');
const marsPara = document.querySelector('.mars-info');
const mercuryPara = document.querySelector('.mercury-info');
const neptunePara = document.querySelector('.neptune-info');
const saturnPara = document.querySelector('.saturn-info');
const uranusPara = document.querySelector('.uranus-info');
const venusPara = document.querySelector('.venus-info');
const earth = document.querySelector('#earth');
const jupiter = document.querySelector('#jupiter');
const mars = document.querySelector('#mars');
const mercury = document.querySelector('#mercury');
const neptune = document.querySelector('#neptune');
const saturn = document.querySelector('#saturn');
const uranus = document.querySelector('#uranus');
const venus = document.querySelector('#venus');
const closeBtn1 = document.querySelector('#close1');
const closeBtn2 = document.querySelector('#close2');
const closeBtn3 = document.querySelector('#close3');
const closeBtn4 = document.querySelector('#close4');
const closeBtn5 = document.querySelector('#close5');
const closeBtn6 = document.querySelector('#close6');
const closeBtn7 = document.querySelector('#close7');
const closeBtn8 = document.querySelector('#close8');
const shadow = document.querySelector('.shadows');
/*----- event listeners -----*/
earth.addEventListener('click', showModalEarth);
jupiter.addEventListener('click', showModalJupiter);
mars.addEventListener('click', showModalMars);
mercury.addEventListener('click', showModalMercury);
neptune.addEventListener('click', showModalNeptune);
saturn.addEventListener('click', showModalSaturn);
uranus.addEventListener('click', showModalUranus);
venus.addEventListener('click', showModalvenus);
closeBtn1.addEventListener('click', closeModalEarth);
closeBtn2.addEventListener('click', closeModalJupiter);
closeBtn3.addEventListener('click', closeModalMars);
closeBtn4.addEventListener('click', closeModalMercury);
closeBtn5.addEventListener('click', closeModalNeptune);
closeBtn6.addEventListener('click', closeModalSaturn);
closeBtn7.addEventListener('click', closeModalUranus);
closeBtn8.addEventListener('click', closeModalVenus);

/*----------------------------------------functions ------------------------------------*/


const planets = document.querySelectorAll('.planets');
for (let i = 0; i <= 7; i++) {
	planets[i].style.backgroundImage = `url(${'./planets-images'}/${
		cardsArray[i].card
	}.png)`;
}

for (let i = 0; i <= 7; i++) {
	planets[i].addEventListener('click', spreadImage);
	function spreadImage(event) {}
}

function showModalEarth() {
	earthPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModalEarth() {
	earthPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModalJupiter() {
	jupiterPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModalJupiter() {
	jupiterPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModalMars() {
	marsPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModalMars() {
	marsPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModalMercury() {
	mercuryPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModalMercury() {
	mercuryPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModalNeptune() {
	neptunePara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModalNeptune() {
	neptunePara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModalSaturn() {
	saturnPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModalSaturn() {
	saturnPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModalUranus() {
	uranusPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModalUranus() {
	uranusPara.classList.add('hidden');
	shadow.classList.add('hidden');
}

//---------------------------------------------------------------------------------------------------------------------------//
function showModalvenus() {
	venusPara.classList.remove('hidden');
	shadow.classList.remove('hidden');
}

function closeModalVenus() {
	venusPara.classList.add('hidden');
	shadow.classList.add('hidden');
}
