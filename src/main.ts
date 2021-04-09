import './style.css'

import { generateProject } from './projects'

const projectsUl = document.getElementById('projects') as HTMLUListElement

const projects = generateProject()

projects.forEach(data => {
    projectsUl.appendChild(data)
})