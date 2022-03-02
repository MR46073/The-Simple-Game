const startBtn = document.querySelector('.startBtn');
const startTheGame = document.querySelector('.startTheGame');
const result = document.querySelector('.result');
const result1 = document.querySelector('.result1'); //...

const won1 = document.querySelector('.won1');
const won2 = document.querySelector('.won2');

const player1 = document.querySelector('.player1');
const usedAttack1 = document.querySelector('.usedAttack1');
const bTn0a = document.querySelector('.bTn0a');
const bTn1a = document.querySelector('.bTn1a');
const bTn2a = document.querySelector('.bTn2a');
const bTn4a = document.querySelector('.bTn4a');
const bTn3a = document.querySelector('.bTn3a');
const bTn5a = document.querySelector('.bTn5a');

const player2 = document.querySelector('.player2');
const usedAttack2 = document.querySelector('.usedAttack2');
const bTn0b = document.querySelector('.bTn0b');
const bTn1b = document.querySelector('.bTn1b');
const bTn2b = document.querySelector('.bTn2b');
const bTn3b = document.querySelector('.bTn3b');
const bTn4b = document.querySelector('.bTn4b');
const bTn5b = document.querySelector('.bTn5b');

const update = document.querySelector('.update');

const endBtn = document.querySelector('.endBtn');


startBtn.addEventListener('click', () => {
    startTheGame.classList.remove('d-none');
});

let player1Health = 100;
let player2Health = 100;
let attackUsed1 = '';
let attackUsed2 = '';
let wonA = 0;
let wonB = 0;
let victory = 0;

bTn0a.addEventListener('click', () => {

    player2Health -= 5;
    
    usedAttack1.classList.remove('d-none');
    attackUsed1 = 0;
    
    player2.querySelector('span').textContent = `${player2Health}`;
    usedAttack1.querySelector('span').textContent = `${attackUsed1}`;
});

bTn1a.addEventListener('click', () => {
    
    player2Health -= 10;
    
    usedAttack1.classList.remove('d-none');
    attackUsed1 = 1;
    
    player2.querySelector('span').textContent = `${player2Health}`;
    usedAttack1.querySelector('span').textContent = `${attackUsed1}`;

});

bTn2a.addEventListener('click', () => {
    
    player2Health -= 15;
    
    usedAttack1.classList.remove('d-none');
    attackUsed1 = 2;
    
    player2.querySelector('span').textContent = `${player2Health}`;
    usedAttack1.querySelector('span').textContent = `${attackUsed1}`;

});

bTn3a.addEventListener('click', () => {
    
    player2Health -= 20;
    
    usedAttack1.classList.remove('d-none');
    attackUsed1 = 3;
    
    player2.querySelector('span').textContent = `${player2Health}`;
    usedAttack1.querySelector('span').textContent = `${attackUsed1}`;

});

bTn4a.addEventListener('click', () => {
    
    player2Health -= 30;
    
    usedAttack1.classList.remove('d-none');
    attackUsed1 = 4;
    
    player2.querySelector('span').textContent = `${player2Health}`;
    usedAttack1.querySelector('span').textContent = `${attackUsed1}`;
    
});

bTn5a.addEventListener('click', () => {

    player2Health -= 50;
    
    usedAttack1.classList.remove('d-none');
    attackUsed1 = 5;
    
    player2.querySelector('span').textContent = `${player2Health}`;
    usedAttack1.querySelector('span').textContent = `${attackUsed1}`;

});


bTn0b.addEventListener('click', () => {

    player1Health -= 5;
    
    usedAttack2.classList.remove('d-none');
    attackUsed2 = 0;
    
    player1.querySelector('span').textContent = `${player1Health}`;
    usedAttack2.querySelector('span').textContent = `${attackUsed2}`;
});

bTn1b.addEventListener('click', () => {
    
    player1Health -= 10;
    
    usedAttack2.classList.remove('d-none');
    attackUsed2 = 1;
    
    player1.querySelector('span').textContent = `${player1Health}`;
    usedAttack2.querySelector('span').textContent = `${attackUsed2}`;  //....

});

bTn2b.addEventListener('click', () => {
    
    player1Health -= 15;
    
    usedAttack2.classList.remove('d-none');
    attackUsed2 = 2;
    
    player1.querySelector('span').textContent = `${player1Health}`;
    usedAttack2.querySelector('span').textContent = `${attackUsed2}`;

});

bTn3b.addEventListener('click', () => {
    
    player1Health -= 20;
    
    usedAttack2.classList.remove('d-none');
    attackUsed2 = 3;
    
    player1.querySelector('span').textContent = `${player1Health}`;
    usedAttack2.querySelector('span').textContent = `${attackUsed2}`;

});

bTn4b.addEventListener('click', () => {
    
    player1Health -= 30;
    
    usedAttack2.classList.remove('d-none');
    attackUsed2 = 4;
    
    player1.querySelector('span').textContent = `${player1Health}`;
    usedAttack2.querySelector('span').textContent = `${attackUsed2}`;
    
});

bTn5b.addEventListener('click', () => {

    player1Health -= 50;
    
    usedAttack2.classList.remove('d-none');
    attackUsed2 = 5;
    
    player1.querySelector('span').textContent = `${player1Health}`;
    usedAttack2.querySelector('span').textContent = `${attackUsed2}`;

});

update.addEventListener('click' , () => {
    if (player2Health <= 0) {
        wonA++;
        player2Health = 100;
    }

    if (player1Health <= 0) {
        wonB++;
        player1Health = 100;
    }

    player1.querySelector('span').textContent = `${player1Health}`;
    won2.querySelector('span').textContent = `${wonB}`;
    
    player2.querySelector('span').textContent = `${player2Health}`;
    won1.querySelector('span').textContent = `${wonA}`;
    
    if (wonA === 3) {
        victory = 1;
        result.classList.remove('d-none');
        result1.classList.remove('d-none');
        endBtn.classList.remove('d-none');
    }
    
    if (wonB === 3){
        victory = 2;
        result.classList.remove('d-none');
        result1.classList.remove('d-none');
        endBtn.classList.remove('d-none');
    }
    
    result1.querySelector('span').textContent = `${victory}`;

});

endBtn.addEventListener('click', () => {
    location.reload();
});

//Made by Mohammed Ali