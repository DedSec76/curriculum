
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

export function scrollToSection() {
    const nav = document.querySelector(".navigation")
    
    nav.addEventListener("click", (e) => {
        const anchor = e.target.closest("a")
        if(!anchor) return
        
        e.preventDefault()

        const article = document.getElementById(anchor.dataset.name)
        if(!article) return
            
        window.scrollTo({
            top: article.offsetTop - 130,
            behavior: "smooth"
        })
    })
    /*
    anchors.forEach(a => {
        a.addEventListener("click", (e) => {
            e.preventDefault()
            const article = document.getElementById(a.dataset.name)

            if(!article) return
            
            scrollTo(0, (article.offsetTop - 130))
            
        })
    })*/
}