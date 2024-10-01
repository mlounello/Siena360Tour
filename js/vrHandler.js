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

// Navigation Functions
function showSubMenu(menuId) {
    // Hide main menu
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

// Image Loading Functions
function loadTownhouses() {
    load360View("https://drive.google.com/uc?export=view&id=1sLuGhDas4tIzqqIVFG3CWYXezcH9E8EW");
}

function loadLonnstromBuffet() {
    load360View("https://drive.google.com/uc?export=view&id=1g5pQeRvI8LCJqrUNcCSlozGlM2nCs5u7");
}

function loadHickeyField() {
    load360View("https://drive.google.com/uc?export=view&id=1c7G_xkmh1iaffRSNI_w_rrdHB-qbss6y");
}

function loadCaseys() {
    load360View("https://drive.google.com/uc?export=view&id=1T1aKVgczQkjxnddZP6zY9mP5LG6mQDNI");
}

function loadMootCourt() {
    load360View("https://drive.google.com/uc?export=view&id=1SXSpdeatH0fLdvOfR2RwDjVw8kdDZkMO");
}

function loadTVStudio() {
    load360View("https://drive.google.com/uc?export=view&id=1Modm5JB8t9uRmJwxamjkJhflMEruhQjt");
}

function loadStackCenter() {
    load360View("https://drive.google.com/uc?export=view&id=10X6KfTMYHx6qaMxeKP9m0SgEUsk53BRN");
}

function loadHickeyTrading() {
    load360View("https://drive.google.com/uc?export=view&id=1-jvQP43Ao55NYPyOlP59bXBMOiCoWpAz");
}

function loadSnyder() {
    load360View("https://drive.google.com/uc?export=view&id=1-jvQP43Ao55NYPyOlP59bXBMOiCoWpAz");
}

function loadLonnstromDining() {
    load360View("https://drive.google.com/uc?export=view&id=1qLXEmV8U5nMeFKJcZjVcnUb3Whqcx_m0");
}

function loadMorellLab() {
    load360View("https://drive.google.com/uc?export=view&id=1kxJFIYICX4hdBBarPDdm6jqfuoTpbxSi");
}

function loadRyan() {
    load360View("https://drive.google.com/uc?export=view&id=1b0JZ5Htz0S-fB-g2oLihWSeQn7VmlCdN");
}

function loadMorell() {
    load360View("https://drive.google.com/uc?export=view&id=1ZfUCD0paEHSz7v5tRsQ2wqRReQndjGE5");
}

function loadFitnessDown() {
    load360View("https://drive.google.com/uc?export=view&id=1WDfpnDXzOEiG2VvIRuAOt3oyUvm9e6oE");
}

function loadBaldwin() {
    load360View("https://drive.google.com/uc?export=view&id=1VKmXEqAFdgsn-FkW5XjwZ6vKBaDWP2aq");
}

function loadUpperDorm() {
    load360View("https://drive.google.com/uc?export=view&id=1KhzUDtIkc2y8e-STKMcEQu6LCzqnoiP2");
}

function loadStandish() {
    load360View("https://drive.google.com/uc?export=view&id=1JobIOUZF5o1i-csix9ZfRAy6DG-4DAYb");
}

function loadFitnessUp() {
    load360View("https://drive.google.com/uc?export=view&id=1BBXm7CG9C5NTOBODKI8HmJNeJFlKcqkh");
}

function loadSienaHall() {
    load360View("https://drive.google.com/uc?export=view&id=16JtaWpSUtFnqtkm1dWGg5lp-IVAcHbS2");
}