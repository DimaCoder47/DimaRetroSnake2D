// Die Basiseinstellungen
window.gameStarted = false;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 1200;

const rows = 30;
const cols = 20;
const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;

let appleSpawnTimer = 0;
let score = 0;

let highscore = parseInt(localStorage.getItem('snakeHighscore')) || 0;

let direction = "DOWN";
let isPaused = true;
let isChangingDirection = false;
let speed = 180;
let gameTimeout;
let phantomAlpha = 1.0;
let glitchStartTime = 0;

let snake = [{ x: 7, y: 7 }];
let food = { x: 5, y: 5 };
const foodColor = '#EE0000';
export const GAME_CONFIG = {
    useFullscreen: true,
};
