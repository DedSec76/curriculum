
export function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.querySelector('.navigation');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navigation.classList.toggle('active');
    });
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

export function renderTemplateProject(project) {
    return `<section class="card_project">
                <div class="carousel">
                    <button type="button" class="btn prev">&#10094;</button>

                    <div class="contenedor">
                        <div class="slides">
                            <img src="${project.images[0]}" alt="image of ${project.name}">
                            <img src="${project.images[1]}" alt="image of ${project.name}">
                            <img src="${project.images[2]}" alt="image of ${project.name}">
                        </div>
                    </div>

                    <button type="button" class="btn next">&#10095;</button>
                </div>

                <h3>${project.name}</h3>
                        
                <ul class="technology__list">
                    <li><figure><img src="${project.img_technology[0]}" alt="image of ${project.technology[0]}"></figure><figcaption>${project.technology[0]}</figcaption></li>
                    <li><figure><img src="${project.img_technology[1]}" alt="image of ${project.technology[1]}"></figure><figcaption>${project.technology[1]}</figcaption></li>
                    <li><figure><img src="${project.img_technology[2]}" alt="image of ${project.technology[2]}"></figure><figcaption>${project.technology[2]}</figcaption></li>
                    <li><figure><img src="${project.img_technology[3]}" alt="image of ${project.technology[3]}"></figure><figcaption>${project.technology[3]}</figcaption></li>
                    <li><figure><img src="${project.img_technology[4]}" alt="image of ${project.technology[4]}"></figure><figcaption>${project.technology[4]}</figcaption></li>
                </ul>
                <button data-id="${project.id}" class="btn">Detalles</button>
                <div class="details">
                    <a href="${project.url}" target="_blank">Ver Demo</a>
                    <p>${project.description}</p>
                </div>
            </section>`
}

export function renderListWithTemplate({parentElement, list, clear=false}) {
    const htmlStrings = list.map(p => renderTemplateProject(p)).join("")

    if(clear) {
        parentElement.innerHTML = ""
    }

    parentElement.insertAdjacentHTML("afterbegin", htmlStrings)
}

export function ShowDetails() {
    const containerList = document.querySelector(".projects__list")
    if(!containerList) return

    containerList.addEventListener("click", (e) => {

        const btnDetails = e.target.closest("[data-id]")
        if(!btnDetails) return


        const cardProject = btnDetails.closest(".card_project")
        if(!cardProject) return

        const detailsDiv = cardProject.querySelector(".details")
        if(!detailsDiv) return
        
        detailsDiv.classList.toggle("show")
    })
}