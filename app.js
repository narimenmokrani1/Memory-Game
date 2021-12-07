console.log('check from app');

/*----- constants -----*/

/*----- app's state (variables) -----*/
let matchedCards = [];

/*----- cached element references -----*/
const resetBtn = document.querySelector('#reset');
const DarkModeBtn = document.querySelector('#dark-mode');
const sneakPeekBtn = document.querySelector('#sneak-peek');
const gameContainer = document.querySelector('.game-container');
const cards = document.querySelector('.card');
const h2Counter = document.querySelector('h2');

/*----- event listeners -----*/
resetBtn.addEventListener('click', init);
cards.addEventListener('click', flipCard);
DarkModeBtn.addEventListener('click', darkTheme);
sneakPeekBtn.addEventListener('click', checkCards);

/*----- functions -----*/
