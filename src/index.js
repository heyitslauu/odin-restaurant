import './style.css';
import { createContent } from './home';

const paths = document.querySelectorAll('.nav-path');

let typeOfPage = '';
paths.forEach(link => {
    link.addEventListener('click', showContent)
})

function showContent(e) {
    typeOfPage = e.target.getAttribute('id');
    createContent(typeOfPage)
}

document.addEventListener('DOMContentLoaded', createContent('home'))

