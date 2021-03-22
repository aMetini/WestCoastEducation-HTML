'use strict';

const title = document.querySelector('#title h2');
const image = document.querySelector('#heading img');
const courseNumber = document.querySelector('#courseNumber');
const length = document.querySelector('#length');
const category = document.querySelector('category');
const description = document.querySelector('#description p');

let courseId = 0;

const urlParams = new URLSearchParams(location.search);

for (let [key, value] of urlParams) {
    if (key === 'courseId') courseId = value;
}

const course = courses.find((course) => course.id == courseId);

heading.innerText = `${course.title} ${course.category}`;
image.setAttribute('src', `./content/img/${course.imageName}.jpg`);
courseNumber.innerHTML += ` <span style="font-weight: bold;color: #ff0000;">${course.courseNumber}</span>`;
category.innerText += ` ${course.category}`;
length.innerText += ` ${course.length}`;

description.innerText = `${course.description}`;