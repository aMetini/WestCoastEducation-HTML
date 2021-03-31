const listCoursesButton = document.querySelectorAll('.listCourses');
const coursesSection = document.querySelector('#showCourses');

const listCourses = function() {
    fetch('/data/courses.json')
        .then(response => response.json())
        .then(data => console.log(data))
}

const images = document.querySelectorAll('.course img');
console.log(images);


function getCourses() {
    fetch('/data/courses.json')
        .then(response => response.json())
        .then(data => {
            coursesSection.innerHTML = '';

            for (let item of data) {
                coursesSection.insertAdjacentHTML(
                    'beforeend',
                    `<div class="course">
                    <p>${item.title} <img id = "${courses.courseNumber}" src = "/content/img/${item.imageName}.jpg" alt = "" /></p>
                    </div>`)
            }
        })
}

getCourses();