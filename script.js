//your code here
function updateClock() {
    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondDeg = (second / 60) * 360;
    const minuteDeg = (minute / 60) * 360 + (second / 60) * 6; 
    const hourDeg = ((hour % 12) / 12) * 360 + (minute / 60) * 30; 

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);

updateClock();
