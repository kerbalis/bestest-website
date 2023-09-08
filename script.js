// JavaScript code to add flying balls dynamically

const ballContainer = document.querySelector(".ball-container");

function createBall() {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.left = `${Math.random() * 100}vw`;
    ball.style.top = `${Math.random() * 100}vh`;
    ballContainer.appendChild(ball);
}

document.getElementById("doNothingButton").addEventListener("click", () => {
    // This button does nothing
});

// Create initial balls
for (let i = 0; i < 50; i++) {
    createBall();
}
