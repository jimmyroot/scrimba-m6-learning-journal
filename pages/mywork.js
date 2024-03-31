import { portfolio } from '../app/data'
import styles from './mywork.module.css'
import imgUrlDesk from '../assets/images/desk.png'

const MyWork = () => {

    const render = () => {
        let html = `
            <header class="${styles.header}">
                <img src="${imgUrlDesk}" alt="Image of a developer's desk">
                <div>
                    <h1><span>My work</span></h1>
                    <p><span>
                    A few examples of my recent efforts, collected here for your viewing
                    </span></p>
                </div>
            </header>
        
            ${renderPortfolio()}
        `

        return html
    }

    const renderPortfolio = () => {
        return portfolio.map(project => {
            const { title, subtitle, description, stack, url, imgURL } = project
    
            return `
                <div class="${styles.project}">
                    <div class="${styles.descriptionContainer}">
                    
                        <h2>${title}</h2>
                        
                        <p class="${styles.subtitle}">${subtitle} — <a href="${url}">check it out!</a></p>
                        ${description}
                        
                        <div class="${styles.stack}">
                            ${stack.map(tech => `
                                <div>${tech}</div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="${styles.imageContainer}">
                        <img src="${imgURL}">
                    </div>
                    
                </div>
            `
        })
    }

    const renderStack = stack => {
        return stack.map
    }

    const refresh = () => {
        node.innerHTML = render()
    }

    const get = () => {
        refresh()
        return node
    }

    const node = document.createElement('div')
    node.className += styles.mywork

    return {
        get
    }
}

export const myWork = MyWork()