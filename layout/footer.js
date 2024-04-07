import styles from './footer.module.css'

const Footer = () => {
    
    // Uncomment the below if we want to add buttons to the footer in future

    // const registerEventListeners = () => {
    //     node.addEventListener('click', e => {
    //         handleClick(e)
    //     })
    // }
    
    // const handleClick = e => {

    //     // some event handlers as object literals
    //     const execute = {
           
    //     }

    //     const { type } = e.target.dataset
    //     if (type) execute[type]()
    // }

    // Render functions
    const render = () => {
        let html = `
          <p class="${styles.bold}">Tales from the Infinite Loop</p>
          <p>Copyright ©2024</p>
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

    const node = document.createElement('footer')
    node.className += styles.footer

    return {
        get,
        // registerEventListeners
    }
}

export const footer = Footer()