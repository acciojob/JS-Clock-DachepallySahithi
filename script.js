//your code here
function updateClock() {
    const now = new Date();

	const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegrees = (seconds / 60) * 360 + 90; 
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90; 
    const hourDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 + 90; 

    const secondRadians = secondDegrees * Math.PI / 180;
    const minuteRadians = minuteDegrees * Math.PI / 180;
    const hourRadians = hourDegrees * Math.PI / 180;

    const secondMatrix = getMatrixFromRadians(secondRadians);
    const minuteMatrix = getMatrixFromRadians(minuteRadians);
    const hourMatrix = getMatrixFromRadians(hourRadians);

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    secondHand.style.transform = `matrix(${secondMatrix.a}, ${secondMatrix.b}, ${secondMatrix.c}, ${secondMatrix.d}, ${secondMatrix.e}, ${secondMatrix.f})`;
    minuteHand.style.transform = `matrix(${minuteMatrix.a}, ${minuteMatrix.b}, ${minuteMatrix.c}, ${minuteMatrix.d}, ${minuteMatrix.e}, ${minuteMatrix.f})`;
    hourHand.style.transform = `matrix(${hourMatrix.a}, ${hourMatrix.b}, ${hourMatrix.c}, ${hourMatrix.d}, ${hourMatrix.e}, ${hourMatrix.f})`;
}

function getMatrixFromRadians(radians) {
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);

    return {
        a: parseFloat(cos.toFixed(6)),
        b: parseFloat(sin.toFixed(6)),
        c: parseFloat((-sin).toFixed(6)),
        d: parseFloat(cos.toFixed(6)),
        e: 0,
        f: 0
    };
}

setInterval(updateClock, 1000);
updateClock();