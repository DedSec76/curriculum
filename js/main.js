import { toggleMenu, imagesCarousel, scrollToSection, validateForm, renderListWithTemplate } from './ui.mjs';

const data = await fetch("data/projects.json")
const projects = await data.json()

const parentElement = document.querySelector(".projects__list")
console.log(parentElement)

renderListWithTemplate({
                        parentElement: parentElement, 
                        list: projects
})

document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    imagesCarousel();
    scrollToSection();
    validateForm()
});