const About = () => {

    const render = () => {
        let html = `
            <h1>About page</h1>
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

    return {
        get
    }
}

export const about = About()