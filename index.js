const marioButton = document.getElementById('marioButton');
const sonicButton = document.getElementById('sonicButton');

const playButton = document.getElementById('playVideo-btn');
const selectGameText = document.getElementById('selectGameText');

const marioVideo = document.getElementById('marioVideo');
const sonicVideo = document.getElementById('sonicVideo');

function clickMario() {
    sonicButton.style.opacity = "0";
    sonicButton.style.transition = ".5s";
    marioButton.style.cursor = "default";
    playButton.style.pointerEvents = "auto";
    playButton.classList.remove('disabled');
    marioButton.classList.add('noPseudoAfter');
    marioButton.classList.add('noPseudoBefore');
    selectGameText.style.opacity = "0";

    setTimeout(function() {
        sonicButton.style.display = "none";
    }, 500);
};

function clickSonic() {
    marioButton.style.opacity = "0";
    marioButton.style.transition = ".5s";
    sonicButton.style.cursor = "default";
    playButton.style.pointerEvents = "auto";
    playButton.classList.remove('disabled');
    sonicButton.classList.add('noPseudoAfter');
    sonicButton.classList.add('noPseudoBefore');
    selectGameText.style.opacity = "0";

    setTimeout(function() {
        marioButton.style.display = "none";
    }, 500);
};

function playVideo() {
    if (marioButton.style.display !== "none") {
        marioVideo.style.opacity = "0";
        marioVideo.style.display = "block";
        marioButton.style.display = "none";

        setTimeout(function() {
            marioVideo.style.opacity = "1";
            marioVideo.style.transition = ".5s";
        }, 0);
        marioVideo.play();
    } else if (sonicButton.style.display !== "none") {
        sonicVideo.style.opacity = "0";
        sonicVideo.style.display = "block";
        sonicButton.style.display = "none";

        setTimeout(function() {
            sonicVideo.style.opacity = "1";
            sonicVideo.style.transition = ".5s";
        }, 0);
        sonicVideo.play();
    } 
};