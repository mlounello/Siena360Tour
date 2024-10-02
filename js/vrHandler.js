let viewer; // Global viewer instance

function load360View(imageSrc) {
    const viewerContainer = document.getElementById('viewer-container');
    const viewerElement = document.getElementById('viewer');
    const backButton = document.getElementById('back-to-menu'); // Back button

    // Hide the main menu, submenus, and header when an image is loaded
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    const subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    // Move the back button to the top-left corner for the scene
    backButton.classList.remove('back-btn-center');
    backButton.classList.add('back-btn-top-left');

    // Show the viewer container
    viewerContainer.style.display = 'block';

    // If a viewer already exists, destroy it before creating a new one
    if (viewer) {
        viewer.destroy();
    }

    // Initialize Pannellum Viewer with the new image
    viewer = pannellum.viewer(viewerElement, {
        type: "equirectangular",
        panorama: imageSrc,
        autoLoad: true,
        showControls: false,
        mouseZoom: true,
        orientationOnByDefault: true,
    });

    // Attempt to make the viewer fullscreen on mobile
    if (viewerElement.requestFullscreen) {
        viewerElement.requestFullscreen();
    } else if (viewerElement.webkitRequestFullscreen) { // Safari
        viewerElement.webkitRequestFullscreen();
    } else if (viewerElement.msRequestFullscreen) { // IE/Edge
        viewerElement.msRequestFullscreen();
    }
}

function showMainMenu() {
    const backButton = document.getElementById('back-to-menu');
    if (viewer) {
        viewer.destroy();
    }

    // Hide the viewer and restore the main menu and header
    document.getElementById('viewer-container').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
    document.getElementById('header').style.display = 'block';

    // Move the back button to the center for the category view
    backButton.classList.remove('back-btn-top-left');
    backButton.classList.add('back-btn-center');
}

function showSubMenu(menuId) {
    const backButton = document.getElementById('back-to-menu');
    document.getElementById('main-menu').style.display = 'none';

    // Hide all submenus
    const subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    // Show the selected submenu
    document.getElementById(menuId).style.display = 'block';

    // Ensure the back button is centered for category view
    backButton.classList.add('back-btn-center');
    backButton.classList.remove('back-btn-top-left');
}

// Location Loading Functions (Living on Campus)
function loadryan() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/ryan.jpg");
}

function loadsnyder() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/snyder.jpg");
}

function loadupperdorm() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/upperdorm.jpg");
}

function loadtownhouses() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/townhouses.jpg");
}

// Location Loading Functions (Dining)
function loadcaseys() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/caseys.jpg");
}

function loadlonnstromdining() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/lonnstromdining.jpg");
}

function loadlonnstrombuffet() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/lonnstrombuffet.jpg");
}

// Location Loading Functions (Academics)
function loadmorelllab() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/morelllab.jpg");
}

function loadmorell() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/morell.jpg");
}

function loadbaldwin() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/baldwin.jpg");
}

function loadhickeytrading() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/hickeytrading.jpg");
}

function loadmootcourt() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/mootcourt.jpg");
}

function loadsienahall() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/sienahall.jpg");
}

function loadstackcenter() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/stackcenter.jpg");
}

function loadstandish() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/standish.jpg");
}

// Location Loading Functions (Athletics & Fitness)
function loadfitnessup() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/fitnessup.jpg");
}

function loadfitnessdown() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/fitnessdown.jpg");
}

function loadhickeyfield() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/hickeyfield.jpg");
}