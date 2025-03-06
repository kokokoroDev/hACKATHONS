const overlay = document.querySelector(".overlay");
const service  = document.querySelector("#register");
const Quit = document.querySelectorAll("#quit");


function hideServices() {
    overlay.style.display = "none";
    service.style.display = "none";
    document.body.style.overflow = "";
}


function showService() {
    overlay.style.display = "block";
    service.style.display = "flex";
    document.body.style.overflow = "hidden";
}

overlay.addEventListener('click', hideServices)

