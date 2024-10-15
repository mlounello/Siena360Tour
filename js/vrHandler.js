let viewer; // Global viewer instance
let gazeTimer; // Timer to track gaze time
let gazeDuration = 2000; // Time in milliseconds for the gaze interaction to activate (2 seconds)
let isGazing = false; // Track if gaze is active

// Function to detect if the user is on a mobile device
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Function to detect if the browser is Safari on iOS
function isSafariOnIOS() {
    return /iP(ad|hone|od).+Version\/[\d.]+.*Safari/i.test(navigator.userAgent);
}

// Start gaze timer when hovering over a button
function startGaze(button) {
    if (isGazing) return; // Prevent multiple gazes
    isGazing = true;
    gazeTimer = setTimeout(() => {
        button.click(); // Simulate a click after 2 seconds
        isGazing = false;
    }, gazeDuration);
}

// Clear gaze timer when leaving the button
function clearGaze() {
    clearTimeout(gazeTimer);
    isGazing = false;
}

// Add gaze detection to all buttons
function addGazeListeners() {
    const buttons = document.querySelectorAll('.main-btn, .location-btn, .back-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => startGaze(button)); // Gaze starts when looking at the button
        button.addEventListener('mouseleave', clearGaze); // Clear gaze when looking away
    });
}

// Call this after the page loads or after navigation
document.addEventListener('DOMContentLoaded', addGazeListeners);

// Call this again after loading new scenes or menus
function updateGazeListeners() {
    addGazeListeners(); // Ensure new buttons get the same gaze functionality
}

// Function to load 360 view with gaze support
function load360View(imageSrc) {
    const viewerContainer = document.getElementById('viewer-container');
    const viewerElement = document.getElementById('viewer');
    const backToMenu = document.getElementById('back-to-menu');
    const toggleModeButton = document.getElementById('toggle-mode');

    // Hide menus and show the viewer
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    const subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    viewerContainer.style.display = 'block';
    backToMenu.style.display = 'block';
    toggleModeButton.style.display = 'block';

    // Initialize Pannellum viewer
    if (viewer) {
        viewer.destroy();
    }

    viewer = pannellum.viewer(viewerElement, {
        type: "equirectangular",
        panorama: imageSrc,
        autoLoad: true,
        showControls: false,
        mouseZoom: true,
        orientationOnByDefault: true,
        autoRotate: -2,
        backgroundColor: [0, 107, 84], // Siena Green background (RGB for #006b54)
    });

    // Update gaze listeners after loading the 360 view
    updateGazeListeners();
}

// Function to return to the main menu
function showMainMenu() {
    if (viewer) {
        viewer.destroy();
    }

    document.getElementById('viewer-container').style.display = 'none';
    document.getElementById('back-to-menu').style.display = 'none';
    document.getElementById('toggle-mode').style.display = 'none';

    const subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    document.getElementById('main-menu').style.display = 'block';
    document.getElementById('header').style.display = 'block';

    updateGazeListeners(); // Ensure gaze works when returning to the menu
}

// Function to show submenus
function showSubMenu(menuId) {
    document.getElementById('main-menu').style.display = 'none';

    const subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    document.getElementById(menuId).style.display = 'block';
}

// Location loading functions (for your 360 images)
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

function loadupperdorm() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/upperdorm.jpg");
}

function loadtownhouses() {
    load360View("https://media.githubusercontent.com/media/mlounello/Siena360Tour/refs/heads/main/assets/townhouses.jpg");
}

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