import styles from './about.module.css'
import global from '../css/global.module.css'
import avatarURL from '../assets/images/user-avatar.png'

const About = () => {

    // Call to add relevant event listeners to about page after node rendered
    const registerEventListeners = () => {
        node.addEventListener('click', e => {
            handleClick(e)
        })
    }

    // Click handler
    const handleClick = e => {
        const execute = {
            back: () => {
                e.preventDefault()
                window.history.go(-1)
            }
        }

        const { type } = e.target.dataset
        if (type) execute[type]()
    }

    const render = () => {
        let html = `
            <header>
                <img class="${styles.avatar}" src="${avatarURL}" alt="A picture, a headshot of Jimmy, in a cartoon style.">
                <h1>
                    <span class="${global.highlight}">
                        Hey there! I'm Jimmy. Welcome to Tales from the Infinite Loop — where I write stuff (mostly) about learning to code. 
                    </span>
                </h1>
            </header>
            <section>
                <p>
                    After several months of learning in the Frontend Developer Career Path, I've made the big jump over 
                    to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                </p>
                <h2>How I stay committed to learning</h2>
                <p>
                    I like to think of myself as a lifelong learner. I used to spend hours and hours learning,
                    then try to create simple projects using what I learned or work new techniques into existing projects.
                </p>
                <p>
                    While that was fun, I felt like it would be helpful to share what I was learning
                    and most things about my journey with the world.
                </p>
                <h2>How I got started</h2>
                <p>
                    I started simple and gradually grew my learning journal site. I would take notes about what I was learning.
                    After each learning session, I'd use my notes to not only reflect on what I learned but also write short
                    summaries of what I learned using my own words.
                </p>
                <p>
                    That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.
                </p>
            </section>
            <a href="#" class="${styles.back}" data-type="back">Back</a>
        `
        // Not sure the back button should stay here, maybe have it importable as a module?

        return html
    }

    const refresh = () => {
        node.innerHTML = render()
    }

    const get = () => {
        refresh()
        return node
    }

    const node = document.createElement('article')
    node.className += styles.about
    registerEventListeners()

    return {
        get
    }
}

export const about = About()