'use strict';
let ball = document.querySelector('.ball');
let startBtn = document.querySelector('.startBtn'),
    resetBtn = document.querySelector('.resetBtn'),
    count = 0;
let animationInterval;
let isActive = false;

function startAnimation(){
  animationInterval = requestAnimationFrame(startAnimation);
  count++;
  ball.style.left = count + 'px';
  startBtn.textContent = 'Cтоп';
}

function beginAnimation(){
  if(!isActive){
    animationInterval = requestAnimationFrame(startAnimation);   
    isActive = true;
  } else{
    cancelAnimationFrame(animationInterval);
    isActive = false;
  }  
}

function resetAnimation(){
  count = 0;
  ball.style.left = 0 + 'px';
  cancelAnimationFrame(animationInterval);
}
startBtn.addEventListener('click', beginAnimation);
resetBtn.addEventListener('click', resetAnimation);
// count = 0;
//       cancelAnimationFrame(animationInterval);
//       ball.style.left = 0 + 'px';