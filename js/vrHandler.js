let viewer; // Global viewer instance

function load360View(imageSrc) {
    const viewerContainer = document.getElementById('viewer'); // Get the viewer element

    // Check if the viewer element exists
    if (!viewerContainer) {
        console.error("Viewer element not found!");
        return; // Stop if the viewer container doesn't exist
    }

    // If a viewer already exists, destroy it before creating a new one
    if (viewer) {
        viewer.destroy();
    }

    // Initialize Photo Sphere Viewer
    viewer = new PhotoSphereViewer.Viewer({
        container: viewerContainer, // Set the container to the viewer div
        panorama: imageSrc, // Load the 360-degree image
        touchmoveTwoFingers: true, // Allow interaction with two fingers
        mousewheel: true, // Enable zoom
        navbar: false, // Hide the navigation bar
        usexmpdata: false, // Disable EXIF data
        defaultLat: 0.3, // Adjust default latitude if needed
        gyroscope: true // Enable gyroscope control
    });
}

function enterVR() {
    // Enter fullscreen mode (Photo Sphere Viewer handles this internally)
    if (viewer) {
        viewer.toggleFullscreen();
    }
}

function showSubMenu(menuId) {
    // Hide the main menu
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
        mainMenu.style.display = 'none';
    } else {
        console.error('Main menu not found!');
        return;
    }

    // Hide all submenus
    const subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    // Show the selected submenu
    const selectedMenu = document.getElementById(menuId);
    if (selectedMenu) {
        selectedMenu.style.display = 'block';
    } else {
        console.error(`Submenu with ID ${menuId} not found!`);
    }
}

function showMainMenu() {
    // Hide all submenus
    const subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    // Show the main menu
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
        mainMenu.style.display = 'block';
    } else {
        console.error('Main menu not found!');
    }
}

// Update your functions to load the images using Photo Sphere Viewer
function loadbaldwin() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/baldwin.jpg");
}

function loadcaseys() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/caseys.jpg");
}

// Add similar functions for other locations
function loadfitnessdown() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/fitnessdown.jpg");
}

function loadfitnessup() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/fitnessup.jpg");
}

function loadhickeyfield() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/hickeyfield.jpg");
}

function loadhickeytrading() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/hickeytrading.jpg");
}

function loadlonnstrombuffet() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/lonnstrombuffet.jpg");
}

function loadlonnstromdining() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/lonnstromdining.jpg");
}

function loadmootcourt() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/mootcourt.jpg");
}

function loadmorell() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/morell.jpg");
}

function loadmorelllab() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/morelllab.jpg");
}

function loadryan() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/ryan.jpg");
}

function loadsienahall() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/sienahall.jpg");
}

function loadsnyder() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/snyder.jpg");
}

function loadstackcenter() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/stackcenter.jpg");
}

function loadstandish() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/standish.jpg");
}

function loadtownhouses() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/townhouses.jpg");
}

function loadtvstudio() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/tvstudio.jpg");
}

function loadupperdorm() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/upperdorm.jpg");
}