import styles from './header.module.css'
import logoURL from '../assets/images/logo.png'
import { router } from '../app/router'

const Header = () => {
    // Init
    // Any init stuff here

    // Use this function to add the event listeners. Use 'get()' first to append
    // this module's node to the DOM
    const registerEventListeners = () => {
        node.addEventListener('click', e => {
            handleClick(e)
        })
    }
    
    const handleClick = e => {

        // some event handlers as object literals
        const execute = {
            navigate: () => {
                e.preventDefault()
                router.navigate(e)
                navHide()
            },
            show: () => {
                navShow()
            },
            hide: () => {
                navHide()
            }
        }

        const { type } = e.target.dataset
        if (type) execute[type]()
    }

    // Render functions
    const render = () => {
        let html = `
            <div class="${styles.container}">
                <div class="${styles.logo}">
                    <img src="${logoURL}">
                    <h1>My learning journal</h1>
                </div>
                <div class="${styles.nav}">
                    <ul class="${styles.menu} ${styles.hidden}" id="nav">
                        <li class="${styles.item}"><a href="/" data-type="navigate">Home</a></li>
                        <li class="${styles.item}"><a href="/about" data-type="navigate">About Me</a></li>
                        <li class="${styles.item}"><a href="/mywork" data-type="navigate">My Work</a></li>
                        <button class="${styles.close}" data-type="hide">
                            <i class='bx bx-x bx-lg'></i>
                        </button>
                    </ul>
                    <button class="${styles.burger}" id="div-burger" data-type="show">
                        <i class='bx bx-menu bx-lg'></i>
                    </button>
                </div>
                <div class="${styles.bg}"></div>
            <div>
            
        `
        return html
    }

    const refresh = () => {
        node.innerHTML = render()
    }

    const navShow = () => {
        document.querySelector(`#nav`).classList.remove(`${styles.hidden}`)
    }

    const navHide = ()  => {
        document.querySelector(`#nav`).classList.add(`${styles.hidden}`)
    }
    
    const get = () => {
        refresh()
        return node
    }

    // Init the node that will be returned by this module
    const node = document.createElement('header')
    node.className += styles.header

    return {
        get,
        registerEventListeners
    }

}

export const header = Header()