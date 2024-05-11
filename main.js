let course = document.getElementById("cor");

course.onclick = function() {
    if (course.innerText === "Course") {
        course.textContent = "Home";
        course.href = "#course"; 
    } else {
        course.textContent = "Course";
        course.href = "#"; 
    }
}


let
