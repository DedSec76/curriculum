
export function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.querySelector('.navigation');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navigation.classList.toggle('active');
    }
    );
}