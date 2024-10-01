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
    // Hide main menu
    document.getElementById('main-menu').style.display = 'none';

    // Show the selected submenu
    let subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }
    document.getElementById(menuId).style.display = 'block';
}

function showMainMenu() {
    // Hide all submenus
    let subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    // Show the main menu
    document.getElementById('main-menu').style.display = 'block';
}

// The following functions are for loading the specific 360 images for each location
function loadCaseys() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/1%20-%20Casey_s%20-%20The%20Hub%20of%20Student%20Life.jpg");
}

function loadFitnessUpstairs() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/10%20-%20The%20Marcelle%20Athletic%20Complex%20-%20Fitness%20Center%20Upstairs.jpg");
}

function loadFitnessDownstairs() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/11%20-%20The%20Marcelle%20Athletic%20Complex%20-%20Fitness%20Center%20Downstairs.jpg");
}

function loadHickeyField() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/12%20-%20Hickey%20Field.jpg");
}

function loadHickeyTradingCenter() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/13%20-%20Hickey%20Financial%20Trading%20Center.jpg");
}

function loadMootCourt() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/14%20-Moot%20Court%20Room%20-%20Pre%20Law.jpg");
}

function loadSienaHallClassroom() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/15%20-Siena%20Hall%20Classroom.jpg");
}

function loadStackCenter() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/16%20-Stack%20Center%20-%20Home%20for%20Entreprenuers.jpg");
}

function loadStandishLibrary() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/17%20-%20Standish%20Library.jpg");
}

function loadTVStudio() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/18%20-TV%20Studio%20-%20Communications%20%26%20Journalism.jpg");
}

function loadTownhouses() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/2%20-%20The%20Townhouses%20-%20Residential%20Life.jpg");
}

function loadRyanHall() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/3%20-%20Ryan%20Hall%20-%20Freshman%20Housing.jpg");
}

function loadSnyderHall() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/3.1%20-Snyder%20Hall%20-%20Communal%20Study%20Spaces.jpg");
}

function loadUpperclassmanDorm() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/4%20-%20Upperclassman%20Dorm.jpg");
}

function loadLonnstromDining() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/5%20-Lonnstrom%20Dining%20Hall%20-%20Campus%20Eats.jpg");
}

function loadLonnstromBuffet() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/6%20-%20Lonnstrom%20Dining%20Hall%20-%20Campus%20Eats%20Buffet.jpg");
}

function loadMorellScienceLab() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/7%20-%20Morell%20Science%20Center%20Lab.jpg");
}

function loadMorellScienceCenter() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/8%20-%20Morell%20Science%20Center.jpg");
}

function loadBaldwinNursingCenter() {
    load360View("https://raw.githubusercontent.com/mlounello/Siena360Tour/main/assets/9%20-%20Bladwin%20Nursing%20Center.jpg");
}