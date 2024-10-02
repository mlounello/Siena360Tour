let viewer; // Global viewer instance

function load360View(imageSrc) {
    const viewerContainer = document.getElementById('viewer-container'); // Get the viewer container
    const viewerElement = document.getElementById('viewer'); // Get the viewer element
    const backToMenu = document.getElementById('back-to-menu'); // Get the back button for the viewer

    // Hide the main menu, submenus, and header when an image is loaded
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('header').style.display = 'none'; // Hide the header
    const subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    // Show the viewer container
    viewerContainer.style.display = 'block';

    // Show the top-left back button for the viewer
    backToMenu.style.display = 'block';

    // If a viewer already exists, destroy it before creating a new one
    if (viewer) {
        viewer.destroy();
    }

    // Initialize Pannellum Viewer with the new image, prevent fullscreen
    viewer = pannellum.viewer(viewerElement, {
        type: "equirectangular",
        panorama: imageSrc,
        autoLoad: true,
        showControls: false,
        mouseZoom: true,
        orientationOnByDefault: true,
        autoRotate: -2, // Slow rotation, or remove if not needed
        backgroundColor: [0, 107, 84] // Siena Green (RGB values for #006b54)
    });
}

function showMainMenu() {
    // Ensure the viewer is destroyed when returning to the main menu
    if (viewer) {
        viewer.destroy();
    }

    // Hide the viewer and top-left back button
    document.getElementById('viewer-container').style.display = 'none';
    document.getElementById('back-to-menu').style.display = 'none'; // Hide the back button in the viewer

    // Hide all submenus
    const subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    // Show the main menu and restore the header
    document.getElementById('main-menu').style.display = 'block';
    document.getElementById('header').style.display = 'block'; // Show the header again
}

function showSubMenu(menuId) {
    // Hide the main menu
    document.getElementById('main-menu').style.display = 'none';

    // Hide all submenus
    const subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    // Show the selected submenu and the centered back button
    document.getElementById(menuId).style.display = 'block';
}

// Location Loading Functions
function loadbaldwin() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/baldwin.jpg");
}

function loadcaseys() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/caseys.jpg");
}

function loadsnyder() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/snyder.jpg");
}

function loadryan() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/ryan.jpg");
}

// Add more location loading functions for other categories
function loadlonnstromdining() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/lonnstromdining.jpg");
}

function loadlonnstrombuffet() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/lonnstrombuffet.jpg");
}

function loadmorelllab() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/morelllab.jpg");
}

function loadmorell() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/morell.jpg");
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

function loadfitnessup() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/fitnessup.jpg");
}

function loadfitnessdown() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/fitnessdown.jpg");
}

function loadhickeyfield() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/hickeyfield.jpg");
}