const marioButton       = document.getElementById('marioButton');
const sonicButton       = document.getElementById('sonicButton');

const head              = document.getElementById('head');
const selectGameText    = document.getElementById('selectGameText');

const marioVideo        = document.getElementById('marioVideo');
const sonicVideo        = document.getElementById('sonicVideo');

function hideButton(button) {
    head.style.opacity              = "0";
    button.style.opacity            = "0";
    button.style.transition         = ".5s";
    button.style.cursor             = "default";
    selectGameText.style.opacity    = "0";
    button.classList.add('noPseudoAfter');
    button.classList.add('noPseudoBefore');

    setTimeout(function() {
        button.style.display = "none";
    }, 500);
}

function playVideo(button, video) {
    if (button.style.display !== "none") {
        video.style.opacity     = "0";
        video.style.display     = "block";
        button.style.display    = "none";

        setTimeout(function() {
            video.style.opacity     = "1";
            video.style.transition  = ".5s";
        }, 0);
        video.play();
    }
}

function playMario() {
    hideButton(sonicButton);
    playVideo(marioButton, marioVideo);
};

function playSonic() {
    hideButton(marioButton);
    playVideo(sonicButton, sonicVideo);
};