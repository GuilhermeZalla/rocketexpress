// Changes the page's year

let element = document.getElementById("date");
let newYear = new Date();
element.innerText = newYear.getFullYear();

// Show Chat function for the index and my-rocket-express

function showChat() {
    let element = document.getElementById("chat");
    let open = document.getElementById("open");
    let close = document.getElementById("close");
    let hr = document.getElementById("hr");
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