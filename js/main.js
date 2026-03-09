import { toggleMenu, imagesCarousel, scrollToSection, validateForm, renderListWithTemplate } from './ui.mjs';

document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    imagesCarousel();
    scrollToSection();
    validateForm()
});

const data = await fetch("data/projects.json")
const projects = await data.json()

const parentElement = document.querySelector(".projects__list")

renderListWithTemplate({
                        parentElement: parentElement, 
                        list: projects
})