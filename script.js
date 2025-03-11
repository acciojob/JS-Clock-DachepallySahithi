//your code here
// script.js

function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  const secondsDegrees = ((seconds / 60) * 360) + 90; // +90 to start at 12 o'clock
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setClock, 1000); // Update every second
setClock(); // Initial call to set the clock immediately.