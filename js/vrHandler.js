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
function loadRyan() {
    load360View("assets/ryan.jpg");
}

function loadSnyder() {
    load360View("assets/snyder.jpg");
}

function loadUpperDorm() {
    load360View("assets/upperdorm.jpg");
}

function loadTownhouses() {
    load360View("assets/townhouses.jpg");
}

function loadCaseys() {
    load360View("assets/caseys.jpg");
}

function loadLonnstromDining() {
    load360View("assets/lonnstromdining.jpg");
}

function loadLonnstromBuffet() {
    load360View("assets/lonnstrombuffet.jpg");
}

function loadMorellLab() {
    load360View("assets/morelllab.jpg");
}

function loadMorell() {
    load360View("assets/morell.jpg");
}

function loadBaldwin() {
    load360View("assets/baldwin.jpg");
}

function loadHickeyTrading() {
    load360View("assets/hickeytrading.jpg");
}

function loadMootCourt() {
    load360View("assets/mootcourt.jpg");
}

function loadSienaHall() {
    load360View("assets/sienahall.jpg");
}

function loadStackCenter() {
    load360View("assets/stackcenter.jpg");
}

function loadStandish() {
    load360View("assets/standish.jpg");
}

function loadFitnessUp() {
    load360View("assets/fitnessup.jpg");
}

function loadFitnessDown() {
    load360View("assets/fitnessdown.jpg");
}

function loadHickeyField() {
    load360View("assets/hickeyfield.jpg");
}

function loadTVStudio() {
    load360View("assets/tvstudio.jpg");
}