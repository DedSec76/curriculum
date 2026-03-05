import { toggleMenu, imagesCarousel, scrollToSection, validateForm } from './ui.mjs';

document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    imagesCarousel();
    scrollToSection();
    validateForm()
});