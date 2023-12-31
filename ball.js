// JavaScript code for continuously appearing and bouncing balls with random speed and direction

const ballContainer = document.querySelector(".ball-container");
const maxBalls = 999; // Maximum number of balls on screen

function createBall() {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.left = `${Math.random() * 90}vw`;
    ball.style.top = `${Math.random() * 90}vh`;
    ball.style.backgroundColor = getRandomColor();
    ball.style.transform = `scale(${Math.random()})`;
    ball.dx = (Math.random() - 0.5) * 4; // Random horizontal velocity
    ball.dy = (Math.random() - 0.5) * 4; // Random vertical velocity
    ballContainer.appendChild(ball);

    // Remove the oldest ball if the limit is reached
    if (ballContainer.children.length > maxBalls) {
        ballContainer.removeChild(ballContainer.children[0]);
    }

    requestAnimationFrame(updateBallPosition.bind(null, ball));
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateBallPosition(ball) {
    ball.style.left = `${parseFloat(ball.style.left) + ball.dx}vw`;
    ball.style.top = `${parseFloat(ball.style.top) + ball.dy}vh`;

    const ballWidth = ball.clientWidth;
    const ballHeight = ball.clientHeight;

    if (
        parseFloat(ball.style.left) + ballWidth >= 90 ||
        parseFloat(ball.style.left) <= 0
    ) {
        ball.dx *= -1; // Reverse horizontal direction
    }

    if (
        parseFloat(ball.style.top) + ballHeight >= 90 ||
        parseFloat(ball.style.top) <= 0
    ) {
        ball.dy *= -1; // Reverse vertical direction
    }

    requestAnimationFrame(updateBallPosition.bind(null, ball));
}

document.getElementById("doNothingButton").addEventListener("click", () => {
    // This button does nothing
});

// Create initial balls
setInterval(createBall, 200); // Add a ball every 200 milliseconds (5 balls per second)
