// Interactive Website - Main JavaScript

// Theme Changer
const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.dataset.color;
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--primary-light', adjustColor(color, 20));
  });
});

function adjustColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));
  return `#${((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
}

// Counter
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

function updateCounter() {
  counterValue.textContent = count;
  counterValue.style.color = count > 0 ? '#43e97b' : count < 0 ? '#ff6b6b' : 'var(--primary-color)';
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateCounter();
  animateElement(counterValue, 'pulse');
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateCounter();
  animateElement(counterValue, 'shake');
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

// Todo List
const todoInput = document.getElementById('todo-text');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

function addTodo() {
  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${text}</span>
    <button onclick="this.parentElement.remove()">×</button>
  `;
  
  li.querySelector('span').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  todoList.appendChild(li);
  todoInput.value = '';
}

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo();
});

// Animation Box
const animationBox = document.getElementById('animation-box');
const spinBtn = document.getElementById('spin-btn');
const pulseBtn = document.getElementById('pulse-btn');
const shakeBtn = document.getElementById('shake-btn');

function animateElement(element, animationClass) {
  element.classList.remove('spin', 'pulse', 'shake');
  void element.offsetWidth; // Trigger reflow
  element.classList.add(animationClass);
}

spinBtn.addEventListener('click', () => animateElement(animationBox, 'spin'));
pulseBtn.addEventListener('click', () => animateElement(animationBox, 'pulse'));
shakeBtn.addEventListener('click', () => animateElement(animationBox, 'shake'));

animationBox.addEventListener('click', () => {
  const animations = ['spin', 'pulse', 'shake'];
  const randomAnim = animations[Math.floor(Math.random() * animations.length)];
  animateElement(animationBox, randomAnim);
});

// Drawing Canvas
const canvas = document.getElementById('draw-canvas');
const ctx = canvas.getContext('2d');
const brushColor = document.getElementById('brush-color');
const brushSize = document.getElementById('brush-size');
const clearCanvasBtn = document.getElementById('clear-canvas');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Adjust canvas for high DPI displays
function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function draw(e) {
  if (!isDrawing) return;
  
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.strokeStyle = brushColor.value;
  ctx.lineWidth = brushSize.value;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();

  lastX = x;
  lastY = y;
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  lastX = e.clientX - rect.left;
  lastY = e.clientY - rect.top;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// Touch support for canvas
canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  isDrawing = true;
  lastX = touch.clientX - rect.left;
  lastY = touch.clientY - rect.top;
});

canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  if (!isDrawing) return;
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.strokeStyle = brushColor.value;
  ctx.lineWidth = brushSize.value;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();

  lastX = x;
  lastY = y;
});

canvas.addEventListener('touchend', () => isDrawing = false);

clearCanvasBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Console message
console.log('%c🎨 Interactive Website Loaded!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cBuilt with Vite - Custom build: npm run build:custom', 'font-size: 12px; color: #a0a0b0;');
