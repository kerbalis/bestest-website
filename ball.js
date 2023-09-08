// JavaScript code for bouncing balls with random speed and direction

const ballContainer = document.querySelector(".ball-container");
const balls = [];

function createBall() {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.left = `${Math.random() * 90}vw`;
    ball.style.top = `${Math.random() * 90}vh`;
    ball.style.backgroundColor = getRandomColor();
    ball.style.transform = `scale(${Math.random()})`;
    ball.dx = (Math.random() - 0.5) * 4; // Horizontal velocity between -2 and 2
    ball.dy = (Math.random() - 0.5) * 4; // Vertical velocity between -2 and 2
    ballContainer.appendChild(ball);
    balls.push(ball);
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateBallsPosition() {
    balls.forEach(ball => {
        ball.style.left = `${parseFloat(ball.style.left) + ball.dx}vw`;
        ball.style.top = `${parseFloat(ball.style.top) + ball.dy}vh`;

        const ballWidth = ball.clientWidth;
        const ballHeight = ball.clientHeight;

        if (
            parseFloat(ball.style.left) + ballWidth >= 90 || 
            parseFloat(ball.style.left) <= 0
        ) {
            ball.dx = (Math.random() - 0.5) * 4; // Change horizontal velocity randomly
            ball.dx *= -1; // Reverse horizontal direction
        }

        if (
            parseFloat(ball.style.top) + ballHeight >= 90 || 
            parseFloat(ball.style.top) <= 0
        ) {
            ball.dy = (Math.random() - 0.5) * 4; // Change vertical velocity randomly
            ball.dy *= -1; // Reverse vertical direction
        }
    });

    requestAnimationFrame(updateBallsPosition);
}

document.getElementById("doNothingButton").addEventListener("click", () => {
    // This button does nothing
});

// Create initial balls
for (let i = 0; i < 50; i++) {
    createBall();
}

// Start updating ball positions
updateBallsPosition();
