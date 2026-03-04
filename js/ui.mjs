
export function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.querySelector('.navigation');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navigation.classList.toggle('active');
    }
    );
}

export function imagesCarousel() {
    const slides = document.querySelector(".slides")
    const images = document.querySelectorAll(".slides img")
    const btnPrev = document.querySelector(".prev")
    const btnNext = document.querySelector(".next")

    let index = 0
    const total = images.length
    console.log(images[0].dataset)

    // Función para actualizar la posición del carrusel

    function updateCarousel() {
        images.forEach(img => {
            console.log(images.length)
            if(img.dataset.tag === "devwebcamp") {
                total = images.length
                slides.style.transform = `translateX(-${index * img.width}px)`
            }
        })
    }
        

    btnNext.addEventListener("click", () => {
        index++
        if(index >= total) index = 0
        updateCarousel()
    })

    btnPrev.addEventListener("click", () => {
        index--
        if(index < 0) index = total - 1
        updateCarousel()
    })
}