/* 
   Filename: complex_code.js
   Description: This complex JavaScript code demonstrates an interactive game where a player navigates through a maze. 
                It includes various functions, variables, and event handlers to create an immersive gaming experience.
   Author: [Your Name]
   Date: [Date]
*/

// Game maze represented as a 2D array
const maze = [
   ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
   ['#', 'S', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
   ['#', '#', '#', '#', '#', ' ', '#', ' ', '#', '#', ' ', '#'],
   ['#', '#', ' ', '#', ' ', ' ', '#', ' ', ' ', '#', ' ', '#'],
   ['#', '#', ' ', '#', '#', '#', '#', ' ', '#', '#', ' ', '#'],
   ['#', '#', ' ', ' ', ' ', '#', '#', ' ', '#', '#', ' ', '#'],
   ['#', '#', '#', ' ', ' ', '#', '#', ' ', '#', '#', '#', '#'],
   ['#', '#', '#', ' ', ' ', ' ', ' ', ' ', '#', ' ', '#', '#'],
   ['#', '#', '#', ' ', '#', '#', '#', '#', '#', ' ', '#', '#'],
   ['#', ' ', ' ', ' ', '#', '#', '#', '#', '#', ' ', '#', '#'],
   ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', 'F', '#'],
   ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
];

// Player object
const player = {
   x: 1,
   y: 1,
   direction: 'right'
};

// Event listeners for keypresses to control player movement
document.addEventListener('keydown', handleKeyPress);

// Function to handle keypress events
function handleKeyPress(event) {
   const KEY_UP = 'ArrowUp';
   const KEY_DOWN = 'ArrowDown';
   const KEY_LEFT = 'ArrowLeft';
   const KEY_RIGHT = 'ArrowRight';

   switch (event.key) {
      case KEY_UP:
         movePlayer(-1, 0);
         break;
      case KEY_DOWN:
         movePlayer(1, 0);
         break;
      case KEY_LEFT:
         movePlayer(0, -1);
         break;
      case KEY_RIGHT:
         movePlayer(0, 1);
         break;
      default:
         break;
   }
}

// Function to move the player
function movePlayer(deltaX, deltaY) {
   const nextX = player.x + deltaX;
   const nextY = player.y + deltaY;

   if (maze[nextY][nextX] === ' ') {
      player.x = nextX;
      player.y = nextY;
   }

   if (maze[nextY][nextX] === 'F') {
      console.log('Congratulations! You won the game!');
      resetGame();
   }

   drawMaze();
   drawPlayer();
}

// Function to draw the maze
function drawMaze() {
   const mazeContainer = document.getElementById('maze-container');
   mazeContainer.innerHTML = '';

   for (let y = 0; y < maze.length; y++) {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');

      for (let x = 0; x < maze[y].length; x++) {
         const cellElement = document.createElement('div');
         cellElement.classList.add('cell');

         if (y === player.y && x === player.x) {
            cellElement.classList.add('player');
         } else {
            cellElement.classList.add(maze[y][x] === '#' ? 'wall' : 'path');
         }

         rowElement.appendChild(cellElement);
      }

      mazeContainer.appendChild(rowElement);
   }
}

// Function to draw the player
function drawPlayer() {
   const playerElement = document.querySelector('.player');
   playerElement.style.transform = `translate(${player.x * 40}px, ${player.y * 40}px) rotate(${getPlayerRotation()})`;
}

// Function to get player rotation based on direction
function getPlayerRotation() {
   switch (player.direction) {
      case 'up':
         return '0deg';
      case 'down':
         return '180deg';
      case 'left':
         return '270deg';
      case 'right':
         return '90deg';
      default:
         return '0deg';
   }
}

// Function to reset the game
function resetGame() {
   player.x = 1;
   player.y = 1;
   player.direction = 'right';

   drawMaze();
   drawPlayer();
}

// Initialize the game
drawMaze();
drawPlayer();