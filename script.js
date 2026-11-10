let nickname = prompt("Enter your nickname");

if (nickname) {
    document.getElementById("playerName").textContent = nickname;
} else {
    document.getElementById("playerName").textContent = "User";
}

let cards = [
    { name: "6", value: 6, img: "6.svg" },
    { name: "7", value: 7, img: "7.svg" },
    { name: "8", value: 8, img: "8.svg" },
    { name: "9", value: 9, img: "9.svg" },
    { name: "10", value: 10, img: "10.svg" },
    { name: "Jack", value: 2, img: "jack.svg" },
    { name: "Queen", value: 3, img: "queen.svg" },
    { name: "King", value: 4, img: "king.svg" },
    { name: "Ace", value: 11, img: "ace.svg" }
];

let playerScore = 0;
let aiScore = 0;
let attempt = 0;

let playerWinCountDisplay = document.getElementById("playerWinCount");
let aiWinCountDisplay = document.getElementById("aiWinCount");

let button = document.getElementById("btn");
let showPlayerScore = document.getElementById("playerScore");
let showAI_Score = document.getElementById("aiScore");

let playerCardImg = document.getElementById("playerCardImg");
let aiCardImg = document.getElementById("aiCardImg");

button.addEventListener('click', () => {

    let playerNum = Math.floor(Math.random() * cards.length);
    let aiNum = Math.floor(Math.random() * cards.length);

    playerScore += cards[playerNum].value;
    aiScore += cards[aiNum].value;
    attempt += 1;

    if (showPlayerScore) showPlayerScore.innerHTML = playerScore;
    if (showAI_Score) showAI_Score.innerHTML = aiScore;

    if (playerCardImg) playerCardImg.src = cards[playerNum].img;
    if (aiCardImg) aiCardImg.src = cards[aiNum].img;

    if (playerWinCountDisplay) playerWinCountDisplay.textContent = "Attempt " + attempt + " of 3";

    if (attempt === 3) {
        setTimeout(() => {
            if (playerScore > aiScore) {
                alert("Win is yours! Total score: " + playerScore + " vs " + aiScore);
            } else if (aiScore > playerScore) {
                alert("Unfortunately you lost. Total score: " + playerScore + " vs " + aiScore);
            } else {
                alert("Draw! Total score: " + playerScore + " vs " + aiScore);
            }

            playerScore = 0;
            aiScore = 0;
            attempt = 0;

            if (showPlayerScore) showPlayerScore.innerHTML = 0;
            if (showAI_Score) showAI_Score.innerHTML = 0;
        }, 50);
    }
});