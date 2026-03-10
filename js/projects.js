import { toggleMenu, imagesCarousel, ShowDetails, validateForm, showFooter } from "./ui.mjs"
import ProjectListing from "./Projects-listing.mjs"


toggleMenu()

const containerP = document.querySelector(".projects__list")

const projects = new ProjectListing(containerP)
projects.init()

imagesCarousel()
ShowDetails()
validateForm()
showFooter()