function getRotationDegrees() {
    return Math.random() * 360;
}

function getPositions(width, height, imgWidth, imgHeight) {
    let statsTag = document.getElementsByClassName('stats')[0];
    let statsHeight = statsTag.offsetHeight;

    let newHeight = Math.random() * height;

    if (newHeight <= statsHeight) {
        newHeight += statsHeight;
    }
    else if (newHeight >= height) {
        newHeight -= imgHeight;
    }

    return [Math.random() * (width - imgWidth) + "px", newHeight + "px"];
}

let isResultScreenShown = false;
let bugImages = [];

function createBug(id, visibilityTime) {
    let img = document.getElementById(id);
    let clone = img.cloneNode(false);
    clone.removeAttribute("id");
    let fieldTag = document.getElementById('field');
    let offsetWidth = document.body.offsetWidth;
    let offsetHeight = document.body.offsetHeight;
    let positions = getPositions(offsetWidth, offsetHeight, img.width, img.height);
    clone.style.left = positions[0];
    clone.style.top = positions[1];
    let deg = getRotationDegrees();
    clone.style.transform = "rotate(" + deg + "deg)"
    clone.hidden = false;
    fieldTag.appendChild(clone);
    bugImages.push(clone);

    setTimeout(removeImage, visibilityTime, clone)
}

function removeImage(image) {
    if (image !== null) {
        image.remove();
    }
}

function removeImages() {
    bugImages.forEach(x => removeImage(x));
    bugImages = [];
}

function increaseScore(image, amount) {
    if (image.src.includes("Hit")) {
        amount = 0;
    }
    else if (amount < 0) {
        image.src = image.src.replace("targetAvoid", "targetAvoidHit");
    }
    else if (amount === 10) {
        image.src = image.src.replace("targetExtra", "targetExtraHit");
    }
    else {
        image.remove();
    }

    let scoreTag = document.getElementById("score");
    let scoreSplit = scoreTag.innerText.split(' ');
    let newScore = parseInt(scoreSplit[1]) + amount;
    scoreSplit[1] = newScore.toString();
    let newScoreText = scoreSplit.join(' ');
    scoreTag.innerText = newScoreText;
}

function createRandomBug() {
    if (isResultScreenShown) {
        return;
    }

    let randomNumber = Math.random();
    if (randomNumber <= 0.6) {
        createBug("flyImg", 3500);
    } else if (randomNumber <= 0.9) {
        createBug("ladybugImg", 3000);
    } else {
        createBug("goldenFlyImg", 2000);
    }
}

function showResults() {
    isResultScreenShown = true;
    let score = document.getElementById("score");

    let resultScreenPoints = document.getElementById("result-screen-points");

    resultScreenPoints.innerText = score.innerText;

    let resultScreen = document.getElementById("result-screen");
    resultScreen.hidden = false;
}

function lowerTime() {
    if (isResultScreenShown) {
        return;
    }

    let timerTag = document.getElementById('timer');
    if (timerTag.innerText > 0) {
        timerTag.innerText = timerTag.innerText - 1;
    } else {
        removeImages();
        showResults();
    }
}

createRandomBug();
const createRandomBugInterval = setInterval(createRandomBug, 750);
const lowerTimeInterval = setInterval(lowerTime, 1000);

function startGame() {
    let resultScreen = document.getElementById("result-screen");
    resultScreen.hidden = true;

    let score = document.getElementById("score");
    score.innerText = "Pontszám: 0";

    let timer = document.getElementById("timer");
    timer.innerText = 60;

    isResultScreenShown = false;
}
