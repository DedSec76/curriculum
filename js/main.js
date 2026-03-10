import { toggleMenu, imagesCarousel, scrollToSection, validateForm, ShowDetails, showFooter, renderListWithTemplate } from './ui.mjs';

init(); 

async function init() {
    toggleMenu();
    imagesCarousel();
    scrollToSection();
    validateForm();
    ShowDetails();
    showFooter()

    try {
        const response = await fetch("data/projects.json")

        if(!response.ok) {
            throw new Error("Network response was not ok")
        }
        
        const projects = await response.json()
        const only2 = projects.slice(0, 2)

        const parentElement = document.querySelector(".projects__list")

        renderListWithTemplate({
                                parentElement: parentElement, 
                                list: only2

        })

    } catch (error) {
        console.error("Error loading projects: ", error)
    }
}