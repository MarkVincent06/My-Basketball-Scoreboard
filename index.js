let homeScore = 0
let guestScore = 0

let homeScoreBoard = document.getElementById("home-score-board")
let guestScoreBoard = document.getElementById("guest-score-board")
homeScoreBoard.textContent = homeScore
guestScoreBoard.textContent = guestScore


function resetScore() {
    homeScore = 0
    guestScore = 0
    homeScoreBoard.textContent = homeScore
    guestScoreBoard.textContent = guestScore
}

function add1HomePoint() {
    homeScore += 1
    homeScoreBoard.textContent = homeScore;
}

function add2HomePoints() {
    homeScore += 2
    homeScoreBoard.textContent = homeScore;
}
function add3HomePoints() {
    homeScore += 3
    homeScoreBoard.textContent = homeScore;
}

function add1GuestPoint() {
    guestScore += 1
    guestScoreBoard.textContent = guestScore;
}
function add2GuestPoints() {
    guestScore += 2
    guestScoreBoard.textContent = guestScore;
}
function add3GuestPoints() {
    guestScore += 3
    guestScoreBoard.textContent = guestScore;
}