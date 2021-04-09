type project = {
    title: string,
    url?: string,
    img: string,
    category?: string[]
}

const projects: project[] = [
    {
        title: '6synth',
        url: 'https://github.com/6sRyuSK/6synth',
        img: './projectImages/6synth.png',
        category: ['TypeScript', 'WebAudioAPI']
    },
    {
        title: '6saka\'s video editor',
        url: 'https://github.com/6sRyuSK/6saka-s-video-editor',
        img: './projectImages/6saka-s-video-editor.png',
        category: ['ffmpeg.wasm', 'Vue.js', 'TypeScript']
    },
    {
        title: 'nuxt.onsen.ag',
        url: 'https://github.com/6sRyuSK/nuxt.onsen.ag',
        img: 'https://camo.githubusercontent.com/eaf49e4549f21683a2b81c13d2f730a1be0d338452eaaa457fb08cd842fcf6e4/68747470733a2f2f692e6779617a6f2e636f6d2f65346237386464323732393734343661336261626337626330663164393935642e706e67',
        category: ['Nuxt.js'],
    },
    {
        title: 'WebRTC-Streaming (private)',
        url: 'https://github.com/6sRyuSK/WebRTC-Streaming',
        img: './projectImages/webrtc-streaming.png',
        category: ['WebRTC', 'skyway.js', 'Svelte'],
    },
    {
        title: '実店舗向けサブスクシステム (private)',
        img: './projectImages/subscription.png',
        category: ['NestJS', 'TypeScript', 'QR', 'Stripe']
    },
    {
        title: 'chatroom-app',
        url: 'https://github.com/6sRyuSK/chatroom-app',
        img: './projectImages/chatroom-app.png',
        category: ['Nuxt.js', 'Firebase'],
    },
    {
        title: 'Ataenakier',
        url: 'https://ataenakier.firebaseapp.com/',
        img: './projectImages/ataenakier.png',
        category: ['Nuxt.js', 'Firebase'],
    },
    {
        title: 'CrocDie',
        url: 'https://note.com/astl1018/n/n003347b31b53',
        img: 'https://assets.st-note.com/production/uploads/images/25840939/rectangle_large_type_2_6f9cc20f4777e1f67503bccd7f5e01a1.png?width=800',
        category: ['PlayCanvas']
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