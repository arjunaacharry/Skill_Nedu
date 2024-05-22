let course = document.getElementById("cor");

course.onclick = function() {
    if (course.innerText === "Course") {
        course.textContent = "Home";
        course.href = "#1"; 
    } else {
        course.textContent = "Course";
        course.href = "#"; 
    }
}


