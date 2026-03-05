
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
    const projects = document.querySelector(".projects__list")

    if(!projects) return

    projects.addEventListener("click", (e) => {
        const carousel = e.target.closest(".carousel")
        if (!carousel) return

        const slides = carousel.querySelector(".slides")
        const imgs = carousel.querySelectorAll("img")

        let index = Number(carousel.dataset.index) || 0  // Asignamos un dataset index
        let imgTotal = imgs.length                       // en caso de que no exista se define 0
        
        if(e.target.classList.contains("next")) {
            index++
            if(index >= imgTotal) index = 0
        }

        if(e.target.classList.contains("prev")) {   // se declara un if para ver si el usuario da click
            index--                                 // en next o prev
            if (index < 0) index = imgTotal - 1
        }

        slides.style.transform = `translateX(-${index * imgs[0].width}px)`  // se usa la misma imagen ya que todos tienen el mismo ancho (width)
        carousel.dataset.index = index              // se le asigna a ese dataset el valor de index
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
}

export function validateForm() {
    const frm = document.querySelector(".frmContact")

    frm.addEventListener("submit", (e) => {
        e.preventDefault()
        
        if(!frm.name.value.trim()) {
            alert("el nombre no debe ir vacio")
            return
        }
        if(!frm.email.value.includes("@")) {
            alert("Email Inválido")
            return
        }
        if(!frm.message.value.trim()) {
            alert("el message no debe ir vacio")
            return
        }
        submitForm(frm)
    })

    function submitForm(frm) {
        const formData = new FormData(frm)

        fetch("https://formsubmit.co/rrutteba@ucvvirtual.edu.pe", {
            method: "POST",
            body: formData
        })
        .then(() => {
            alert("Mensaje Enviado Correctamente")
            frm.reset()
        })
        .catch(() => alert("No se pudo enviar tu mensaje"))
    }
}