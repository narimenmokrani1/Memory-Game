const cardsArray = [
	{ card: "earth", image: './planets-images/earth.png' },
	{ card: "jupiter", image: './planets-images/jupiter.png' },
	{ card: "mars", image: './planets-images/mars.png' },
	{ card: "mercury", image: './planets-images/mercury.png' },
	{ card: "neptune", image: './planets-images/neptune.png' },
	{ card: "saturn", image: './planets-images/saturn.png' },
	{ card: "uranus", image: './planets-images/uranus.png' },
	{ card: "venus", image: './planets-images/venus.png' },
	
];

const planets = document.querySelectorAll(".planets")
for (let i = 0; i <= 7; i++) {
    planets[i].style.backgroundImage = 
    `url(${'./planets-images'}/${cardsArray[i].card}.png)`;
}

for (let i = 0; i <= 7; i++) {
    planets[i].addEventListener("click", spreadImage)
    function spreadImage(event) {
    console.log("i am a planet")
    }
    }
