import { renderListWithTemplate } from './ui.mjs'

export default class ProjectListing {
    constructor(containerP){
        this.containerP = containerP
    }

    async init() {
        const data = await fetch("data/projects.json")
        this.projects = await data.json()
        
        this.renderProjects()
    }

    renderProjects() {
        renderListWithTemplate({
                                parentElement: this.containerP, 
                                list: this.projects
        })
    }

    
}