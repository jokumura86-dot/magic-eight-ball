const answers = [
    "It is certain.",
    "Reply hazy, try again.",
    "Don't count on it.",
    "Without a doubt.",
    "Ask again later.",
    "My reply is no.",
    "Yes, definitely.",
    "Better not tell you now.",
    "My sources say no.",
    "Most likely.",
    "Cannot predict now.",
    "Outlook not so good.",
    "Outlook good.",
    "Concentrate and ask again.",
    "Very doubtful.",
    "Signs point to yes."
];

const ball = document.getElementById("ball");
const shakeBtn = document.getElementById("shake-btn");
const questionInput = document.getElementById("question-input");
const eightGraphic = document.getElementById("eight-graphic");
const answerText = document.getElementById("answer-text");

shakeBtn.addEventListener("click", () => {
    const questionText = questionInput.value.trim();

    if (questionText === "") {
        alert("Please ask a question first!");
        return;
    }

    answerText.classList.add("hidden");
    eightGraphic.classList.remove("hidden");

    ball.classList.add("shake");

    setTimeout(() => {
        ball.classList.remove("shake");

        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[randomIndex];

        answerText.innerText = randomAnswer;
        eightGraphic.classList.add("hidden");
        answerText.classList.remove("hidden");

        questionInput.value = "";
    }, 500);
});