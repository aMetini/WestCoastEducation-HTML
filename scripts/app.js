const listCoursesButton = document.querySelectorAll('.listCourses');
const coursesSection = document.querySelector('#showCourses');

const listCourses = function() {
    fetch('/data/courses.json')
        .then(response => response.json())
        .then(data => console.log(data))
}

/*
const listCoursesApi = function() {
    fetch('http://localhost:3000/courses')
        .then((response) => response.json())
        .then((data) => console.log(data));
}
*/
const images = document.querySelectorAll('.course img');
console.log(images);

courses.forEach(course => {
    showCourses.insertAdjacentHTML(
        'beforeend',
        `<div class = "course" >
        <img id = "${courses.courseNumber}" src = "/content/img/${courses.imageName}.jpg" alt = "" / >
        <p > ${courses.courseNumber} ${ courses.imageName } < /p> 
        </div>`
    )
});


function getCourses() {
    fetch('/data/courses.json')
        .then(response => response.json())
        .then(data => {
            coursesSection.innerHTML = '';

            for (let item of data) {
                coursesSection.insertAdjacentHTML(
                    'beforeend',
                    `<div class="course">
                    ${item.title} ${item.imageName}.jpg </div>`)
            }
        })
}

getCourses();