function load360View(imageSrc) {
    document.getElementById('viewer-image').src = imageSrc;
}

function enterVR() {
    let viewerImage = document.getElementById('viewer-image');
    if (viewerImage.requestFullscreen) {
        viewerImage.requestFullscreen();
    } else if (viewerImage.webkitRequestFullscreen) {
        viewerImage.webkitRequestFullscreen();
    } else if (viewerImage.msRequestFullscreen) {
        viewerImage.msRequestFullscreen();
    } else if (viewerImage.mozRequestFullScreen) {
        viewerImage.mozRequestFullScreen();
    } else {
        alert("Fullscreen API is not supported by your browser.");
        return;
    }

    alert('Insert your phone into Google Cardboard.');
}

// Navigation Functions
function showSubMenu(menuId) {
    document.getElementById('main-menu').style.display = 'none';
    let subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }
    document.getElementById(menuId).style.display = 'block';
}

function showMainMenu() {
    let subMenus = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }
    document.getElementById('main-menu').style.display = 'block';
}

// Image Loading Functions (all lowercase)
function loadryan() {
    load360View("https://drive.google.com/uc?export=view&id=1b0JZ5Htz0S-fB-g2oLihWSeQn7VmlCdN");
}

function loadsnyder() {
    load360View("https://drive.google.com/uc?export=view&id=1-jvQP43Ao55NYPyOlP59bXBMOiCoWpAz");
}

function loadupperdorm() {
    load360View("https://drive.google.com/uc?export=view&id=1KhzUDtIkc2y8e-STKMcEQu6LCzqnoiP2");
}

function loadtownhouses() {
    load360View("https://drive.google.com/uc?export=view&id=1sLuGhDas4tIzqqIVFG3CWYXezcH9E8EW");
}

function loadcaseys() {
    load360View("https://drive.google.com/uc?export=view&id=1T1aKVgczQkjxnddZP6zY9mP5LG6mQDNI");
}

function loadlonnstromdining() {
    load360View("https://drive.google.com/uc?export=view&id=1qLXEmV8U5nMeFKJcZjVcnUb3Whqcx_m0");
}

function loadlonnstrombuffet() {
    load360View("https://drive.google.com/uc?export=view&id=1g5pQeRvI8LCJqrUNcCSlozGlM2nCs5u7");
}

function loadmorelllab() {
    load360View("https://drive.google.com/uc?export=view&id=1kxJFIYICX4hdBBarPDdm6jqfuoTpbxSi");
}

function loadmorell() {
    load360View("https://drive.google.com/uc?export=view&id=1ZfUCD0paEHSz7v5tRsQ2wqRReQndjGE5");
}

function loadbaldwin() {
    load360View("https://drive.google.com/uc?export=view&id=1VKmXEqAFdgsn-FkW5XjwZ6vKBaDWP2aq");
}

function loadhickeytrading() {
    load360View("https://drive.google.com/uc?export=view&id=1-jvQP43Ao55NYPyOlP59bXBMOiCoWpAz");
}

function loadmootcourt() {
    load360View("https://drive.google.com/uc?export=view&id=1SXSpdeatH0fLdvOfR2RwDjVw8kdDZkMO");
}

function loadsienahall() {
    load360View("https://drive.google.com/uc?export=view&id=16JtaWpSUtFnqtkm1dWGg5lp-IVAcHbS2");
}

function loadstackcenter() {
    load360View("https://drive.google.com/uc?export=view&id=10X6KfTMYHx6qaMxeKP9m0SgEUsk53BRN");
}

function loadstandish() {
    load360View("https://drive.google.com/uc?export=view&id=1JobIOUZF5o1i-csix9ZfRAy6DG-4DAYb");
}

function loadfitnessup() {
    load360View("https://drive.google.com/uc?export=view&id=1BBXm7CG9C5NTOBODKI8HmJNeJFlKcqkh");
}

function loadfitnessdown() {
    load360View("https://drive.google.com/uc?export=view&id=1WDfpnDXzOEiG2VvIRuAOt3oyUvm9e6oE");
}

function loadhickeyfield() {
    load360View("https://drive.google.com/uc?export=view&id=1c7G_xkmh1iaffRSNI_w_rrdHB-qbss6y");
}

function loadtvstudio() {
    load360View("https://drive.google.com/uc?export=view&id=1Modm5JB8t9uRmJwxamjkJhflMEruhQjt");
}