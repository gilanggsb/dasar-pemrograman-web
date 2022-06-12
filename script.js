const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.querySelector('.nav-item');
const navList = document.getElementById('nav-list')
let listNav = document.querySelectorAll(".nav-item");
hamburger.addEventListener('click', mobileMenu);


function selected(id) {
    let navItem = document.getElementById(id);
    deleteActive()
    if (id != "content") {
        navItem.classList.add('active')
    }
}

function mobileMenu() {
    hamburger.classList.toggle("active");
    navList.classList.toggle("nav-list-active")
}

function deleteActive() {
    for (let item of listNav) {
        if (item.classList.contains('active')) {
            item.classList.remove("active");
        }
    }
}