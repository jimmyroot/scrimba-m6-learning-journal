import styles from './about.module.css'

const About = () => {

    const render = () => {
        let html = `
            <h1><span>About page</span></h1>
        `

        return html
    }

    const refresh = () => {
        node.innerHTML = render()
    }

    const get = () => {
        refresh()
        return node
    }

    const node = document.createElement('div')
    node.className += styles.container

    return {
        get
    }
}

export const about = About()