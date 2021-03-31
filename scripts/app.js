const listCoursesButton = document.querySelector('#listCourses');

const listCourses = function() {
    fetch('courses.json')
        .then(response => response.json())
        .then(data => console.log(data))
}

const listCoursesApi = function() {
    fetch('http://localhost:3000/courses')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

listCoursesButton.addEventListener('click', () => {
    listCoursesApi();
});