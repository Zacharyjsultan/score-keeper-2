// import functions and grab DOM elements
import { renderGame } from './render-utils.js';
const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameFormButton = document.getElementById('name-form-button');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');
const teamOneInput = document.getElementById('team-one-input');
const teamTwoInput = document.getElementById('team-two-input');

// create an array to hold on to the state of past games
const pastGames = [];

let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;

nameFormButton.addEventListener('click', () => {
    // get the name data from the form
    const teamOne = teamOneInput.value;
    const teamTwo = teamTwoInput.value;
    // set the state to this data from the form
    name1 = teamOne;
    name2 = teamTwo;
    // reset the form values
   
    // refresh the current game element with new data by calling the appropriate function
    displayCurrentGameEl();
});


teamOneAddButton.addEventListener('click', () => {
   
    score1++;

    displayCurrentGameEl();
});

teamTwoAddButton.addEventListener('click', () => {
  
    score2++;
  
    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
  
    score1--;
   
    displayCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
  
    score2--;
  
    displayCurrentGameEl();
});

finishGameButton.addEventListener('click', () => {
    
    const currentGameData = {
        name1: name1,
        name2: name2,
        score1: score1,
        score2: score2,
    };
    pastGames.push(currentGameData);
    pastGamesEl.textContent = '';

   
    displayAllGames();
    name1 = '';
    name2 = '';
    score1 = 0;
    score2 = 0;
    currentGameEl.textContent = '';
    displayCurrentGameEl();
});

function displayCurrentGameEl() {
    currentGameEl.textContent = '';

    teamOneLabel.textContent = name1;
    teamTwoLabel.textContent = name2;

    // const gameEl = . . . 
    // make a new gameEl here by calling renderGame with the approriate arguments.
    const gameEl = renderGame(name1, name2, score1, score2);
    // Check the renderGame function declaration in render-utils.js to figure out the correct arguments to pass to this function 
    // In render-utils.js as yourself: How many arguments does the function take? What order does it take them in?
    
    gameEl.classList.add('current');

    currentGameEl.append(gameEl);
}


function displayAllGames() {
    // clear out the past games list in the DOM
    pastGamesEl.textContent = '';
    // loop through the past games in state
    for (let game of pastGames) {
        const gameEl = renderGame(game.name1, game.name2, game.score1, game, score2);
        pastGamesEl.append(gameEl);
    }
    // use the renderGame function to render and append a past game for each past game in state
 
}
