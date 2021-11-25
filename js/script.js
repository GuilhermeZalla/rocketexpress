// Changes the page's year

let element = document.getElementById("date");
let newYear = new Date();
element.innerText = newYear.getFullYear();

// Shows the chat function for the index and my-rocket-express

function showChat() {
    let element = document.getElementById("helper");
    let open = document.getElementById("open-helper");
    let close = document.getElementById("close-helper");
    if (element.style.display === 'none') {
        element.style.display = 'block';
        close.style.display = 'block';
        open.style.display = 'none';
    } else {
        element.style.display = 'none';
        open.style.display = 'block';
        close.style.display = 'none';
    }
}

// Opens the dropdown menu content in the index page
function showMenu() {
    let element = document.getElementById("hidmenu");
    if (element.style.display === 'none') {
        element.style.display = 'block';
        document.getElementById("menu-bar").style.display = 'none';
        document.getElementById("close-menu").style.display = 'inline-block';
        document.getElementById("close-menu").style.paddingLeft = '12px';
    } else {
        element.style.display = 'none';
        document.getElementById("menu-bar").style.display = 'block';
        document.getElementById("close-menu").style.display = 'none';
    }
}

// Opens the Login modal in the my-rocket-express page 

function openLoginModal() {
    let element = document.getElementById("open-modal");
    if (element.style.display === 'none') {
        element.style.display = 'block';
        document.getElementById("modal-title").innerText = 'Your Account';
    } else {
        closeModal();
    }
}

// Opens the Sign Up modal in the my-rocket-express page 

function openSignUpModal() {
    let element = document.getElementById("open-modal");
    if (element.style.display === 'none') {
        element.style.display = 'block';
        document.getElementById("modal-title").innerText = 'Sign Up';
        document.getElementById("first-name").style.display = 'block';
        document.getElementById("last-name").style.display = 'block';
        document.getElementById("no-password").style.display = 'none';
        document.getElementById("modal-content").style.height = '570px';
    } else {
        closeModal();
    }
}

function closeModal() {
    document.getElementById("open-modal").style.display = 'none';
    document.getElementById("modal-title").innerText = 'Your Account';
    document.getElementById("first-name").style.display = 'none';
    document.getElementById("last-name").style.display = 'none';
    document.getElementById("no-password").style.display = 'block';
    document.getElementById("modal-content").style.height = '500px';
}