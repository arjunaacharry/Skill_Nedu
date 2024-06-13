let course = document.getElementById("cor");

course.onclick = function() {
    if (course.innerText === "Course") {
        course.textContent = "Home";
        course.href = "#4"; 
    } else {
        course.textContent = "Course";
        course.href = "#"; 
    }
}
// 


let navbarToggler = document.getElementById("navbar-toggler");
let navbarMenu = document.getElementById("navbar-menu");

navbarToggler.addEventListener("click", function() {
    if (navbarMenu.style.display === "flex") {
        navbarMenu.style.display = "none";
        navbarToggler.classList.remove("open");
    } else {
        navbarMenu.style.display = "flex";
        navbarToggler.classList.add("open");
    }
});