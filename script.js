'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currScore = 0;
let activePlayer = 0;
let score = [0,0];
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling Dice Functionality
btnRoll.addEventListener('click', function(){

    if(playing===true){
        //Generate a random dice number
        const dice = Math.trunc(Math.random() * 6)+1;

        //Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //Check for 1
        if(dice !== 1){
            currScore = currScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currScore;
        }else{
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.getElementById(`score--${activePlayer}`).textContent = 0;
            score[activePlayer] = 0;
            activePlayer = activePlayer === 0 ? 1: 0;
            currScore = 0;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        }
    }
});

btnHold.addEventListener('click', function(){

    if(playing===true){
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer] += currScore;
        if(score[activePlayer] >= 10){
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }else{
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            activePlayer = activePlayer === 0 ? 1: 0;
            currScore = 0;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        }
    }
    
});

btnNew.addEventListener('click', function(){
    currScore = 0;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    diceEl.classList.add('hidden');
    activePlayer = 0;
    score = [0,0];
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    playing = true;
});