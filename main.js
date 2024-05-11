let course = document.getElementById("cor");

course.onclick = function(){
    if(course.innerText === "Course")
        {
            course.textContent = "Home";
        }
    else{
        course.textContent = "Course";
        }
}

