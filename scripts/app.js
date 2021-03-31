const listCoursesButton = document.querySelectorAll('.listCourses');
const coursesSection = document.querySelector('#showCourses');

const listCourses = function() {
    fetch('/data/courses.json')
        .then(response => response.json())
        .then(data => console.log(data))
}

const listCoursesApi = function() {
    fetch('courses.json')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function getCourses() {
    fetch('/data/courses.json')
        .then(response => response.json())
        .then(data => {
            coursesSection.innerHTML = '';

            for (let item of data) {
                coursesSection.insertAdjacentHTML('beforeend',
                    `<div>
                ${item.title}
                </div>`)
            }
        })
}

getCourses();