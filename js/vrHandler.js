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