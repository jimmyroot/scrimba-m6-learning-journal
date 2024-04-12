import { router } from '../app/router'
import styles from './header.module.css'
import logoURL from '../assets/images/logo.png'

const Header = () => {

    // Use this function to add the event listeners. Use 'get()' first to append
    // this module's node to the DOM
    const registerEventListeners = () => {
        node.addEventListener('click', e => {
            handleClick(e)
        })
        window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
            if (e.matches) {
                const navWrapper = document.querySelector('#nav-wrapper')
                if (!navWrapper.classList.contains(styles.hidden)) {
                    navWrapper.classList.add(styles.hidden)
                }
            }
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
                    <img src="${logoURL}" alt="The blog's logo, a mint green infinity glyph" data-type="navigate">
                    <h1>Tales from the Infinite Loop</h1>
                </div>
                <div class="${styles.menu}">
                    <div class="${styles.hidden}" id="nav-wrapper">
                        <button class="${styles.close}" data-type="hide">
                                <i class='bx bx-x bx-lg'></i>
                        </button>
                        <img class="${styles.burgerLogo}" src="${logoURL}">
                        <ul id="nav">
                            <li><a href="/" data-type="navigate">Home</a></li>
                            <li><a href="/mywork" data-type="navigate">My Work</a></li>
                            <li><a href="/about" data-type="navigate">About Me</a></li>
                        </ul>
                    </div>
                    <button class="${styles.burger}" id="div-burger" data-type="show">
                            <i class='bx bx-menu bx-lg'></i>
                    </button>
                </div>
                <div class="${styles.bg}"></div>
            </div>
            
        `
        return html
    }

    const refresh = () => {
        node.innerHTML = render()
    }

    // Hide/show nav, used only at smaller screen sizes
    const navShow = () => {
        document.querySelector(`#nav-wrapper`).classList.remove(styles.hidden)
    }

    const navHide = ()  => {
        document.querySelector(`#nav-wrapper`).classList.add(styles.hidden)
    }

    // This function highlights the relevant nav option depending on what page is currently loaded
    // We can call it at any time, but usually used after a page refresh
    const navUpdate = () => {
        // Grab a list of li elements from nav
        const navEls = Array.from(node.querySelector('#nav').children)
        // Filter out the one that has the href matching current url 
        const [ navElForCurrentPage ] = navEls.filter(el => el.firstChild.href === window.location.href)
        // Clear selected style from all elements
        navEls.forEach(el => el.firstChild.classList.remove(styles.selected))
        // Test if there was a match, if there wasn't, this means we're on a blog post and 
        // not on a 'main' page. If there was a match we assign it to aEl
        const aEl = navElForCurrentPage && navElForCurrentPage.firstChild
        // Finally we apply the selected class to the a element
        if (aEl) aEl.classList.add(styles.selected)
    }
    
    const get = () => {
        refresh()
        navUpdate()
        return node
    }

    // Init the node that will be returned by this module
    const node = document.createElement('header')
    node.className += styles.header

    return {
        get,
        registerEventListeners,
        navUpdate
    }
}

export const header = Header()