'use strict'

const courseList = document.querySelector('.courseList');
const modalDialog = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

courses.forEach(course => {
    gellery.insertAdjacentHTML(
        'beforeend',
        `<div class = "course">
            <img id="${course.id}" src="/content/img/${course.imageName}.jpg" alt="${course.courseNumber} ${course.title}" />
            <p>${course.courseNumber} ${course.title}</p>
        </div>`
    );
});

const images = document.querySelectorAll('.course img');

const openModal = function(imageSrc, id) {
    const image = document.querySelector('.modal-container');

    image.innerHTML = `<img src="${imageSrc}" /><a class="btn" href="course-detail.html?courseId=${id}">Discover Courses</a>`;

    overlay.classList.remove('hidden');
    modalDialog.classList.remove('hidden');
}

for (let image of images) {
    let src = image.getAttribute('src');
    let id = image.getAttribute('id');

    image.addEventListener('click', function() {
        openModal(src, id);
    });
}

const quitModal = () => {
    modalDialog.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeModal.addEventListener('click', quitModal);

overlay.addEventListener('click', quitModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (!modalDialog.classList.contains('hidden')) {
            quitModal();
        }
    }
})