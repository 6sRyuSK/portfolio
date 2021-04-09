type project = {
    title: string,
    url: string,
    img: string,
}

const projects: project[] = [
    {
        title: '6synth',
        url: 'https://github.com/6sRyuSK/6synth',
        img: './projectImages/6synth.png',
    }
]

export const generateProject = (): HTMLLIElement[] => {
    return projects.map(({title, url, img}) => {
        let imageElm = document.createElement('img') as HTMLImageElement
        let titleElm = document.createElement('a')

        imageElm.src = img
        imageElm.className = 'project-img'

        titleElm.innerHTML = title
        titleElm.href = url
        titleElm.target = '_blank'
        titleElm.className = 'project-title'

        let projectElm = document.createElement('li') as HTMLLIElement

        projectElm.className = 'project'
        projectElm.appendChild(imageElm)
        projectElm.appendChild(titleElm)

        return projectElm
    })
}