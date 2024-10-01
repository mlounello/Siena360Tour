function load360View(imageSrc) {
    // Update the 360 image in the viewer
    document.getElementById('viewer-image').src = imageSrc;
}

function enterVR() {
    // Enter VR mode (fullscreen)
    let viewerImage = document.getElementById('viewer-image');
    if (viewerImage.requestFullscreen) {
        viewerImage.requestFullscreen();
    } else if (viewerImage.webkitRequestFullscreen) { // Safari
        viewerImage.webkitRequestFullscreen();
    } else if (viewerImage.msRequestFullscreen) { // IE/Edge
        viewerImage.msRequestFullscreen();
    }
    alert('Insert your phone into Google Cardboard.');
}

function showSubMenu(menuId) {
    // Hide the main menu
    document.getElementById('main-menu').style.display = 'none';

    // Hide all sub-menus
    let subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    // Show the selected sub-menu
    document.getElementById(menuId).style.display = 'block';
}

function showMainMenu() {
    // Hide all sub-menus
    let subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    // Show the main menu
    document.getElementById('main-menu').style.display = 'block';
}

// The following functions are for loading the specific 360 images for each location
function loadCaseys() {
    load360View("assets/Caseys.jpg");
}

function loadFitnessUpstairs() {
    load360View("assets/FitnessUpstairs.jpg");
}

function loadFitnessDownstairs() {
    load360View("assets/FitnessDownstairs.jpg");
}

function loadHickeyField() {
    load360View("assets/HickeyField.jpg");
}

function loadHickeyTrading() {
    load360View("assets/HickeyTrading.jpg");
}

function loadMootCourt() {
    load360View("assets/MootCourt.jpg");
}

function loadRyanHall() {
    load360View("assets/RyanHall.jpg");
}

function loadSienaHallClassroom() {
    load360View("assets/SienaHallClassroom.jpg");
}

function loadSnyderHall() {
    load360View("assets/SnyderHall.jpg");
}

function loadUpperclassmanDorm() {
    load360View("assets/UpperclassmanDorm.jpg");
}

function loadTownhouses() {
    load360View("assets/Townhouses.jpg");
}

function loadLonnstromDining() {
    load360View("assets/LonnstromDiningHall.jpg");
}

function loadLonnstromBuffet() {
    load360View("assets/LonnstromBuffet.jpg");
}

function loadMorellScienceLab() {
    load360View("assets/MorellScienceLab.jpg");
}

function loadMorellScienceCenter() {
    load360View("assets/MorellScienceCenter.jpg");
}

function loadBaldwinNursingCenter() {
    load360View("assets/BaldwinNursingCenter.jpg");
}

function loadStackCenter() {
    load360View("assets/StackCenter.jpg");
}

function loadStandishLibrary() {
    load360View("assets/StandishLibrary.jpg");
}

function loadTVStudio() {
    load360View("assets/TVStudio.jpg");
}