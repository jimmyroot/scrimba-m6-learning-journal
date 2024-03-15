const MyWork = () => {

    const render = () => {
        let html = `
            <h1>My Work page</h1>
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

export const myWork = MyWork()