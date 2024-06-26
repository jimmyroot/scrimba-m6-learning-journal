import { portfolio } from '../app/data'
import styles from './mywork.module.css'
import global from '../css/global.module.css'
import imgUrlKb from '../assets/images/kb.png'

const MyWork = () => {

    // Render the main page
    const render = () => {
        let html = `
            <header class="${styles.header}">
                <img src="${imgUrlKb}" alt="A picture of a mechanical keyboard and a laptop, zoomed in close">
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

    // Render the portfolio contents
    const renderPortfolio = () => {
        return portfolio.map(project => {
            const { title, subtitle, description, stack, url, imgURL } = project
    
            return `
                <div class="${styles.project}">
                    <div class="${styles.descriptionContainer}">
                        <h2>${title}</h2>
                        <p class="${styles.subtitle}">
                            ${subtitle} 
                            ${ title === 'Learning Journal' ? `` : `— <a href=${url} target="_blank">check it out!</a>`}
                        </p>
                        ${description}
                        <div class="${styles.techStack}">
                            ${stack.map(tech => `
                                <div>${tech}</div>
                            `).join('')}
                        </div>
                    </div>
                    <img src="${imgURL}" alt="An image of the ${title} project">
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

    const node = document.createElement('section')
    node.className += styles.mywork

    return {
        get
    }
}

export const myWork = MyWork()