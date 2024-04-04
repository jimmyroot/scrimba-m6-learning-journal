import styles from './mywork.module.css'
import global from '../css/global.module.css'
import { portfolio } from '../app/data'
import imgUrlKb from '../assets/images/kb.png'

const MyWork = () => {

    const render = () => {
        let html = `
            <header class="${styles.header}">
                <img src="${imgUrlKb}" alt="Image of a developer's desk">
                <div>
                    <h1><span class="${global.highlight}">Some of my work</span></h1>
                    <p><span class="${global.highlight}">
                    A small collection of projects, built whilst studying the Frontend Development Career path at Scrimba.
                    </span></p>
                </div>
            </header>
            <section class="${styles.projectsContainer}">
            ${renderPortfolio()}
            </section>
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

                    
                        <img src="${imgURL}">
                    
                    
                </div>
            `
        }).join('')
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