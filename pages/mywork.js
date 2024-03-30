import { portfolio } from '../app/data'
import styles from './mywork.module.css'

const MyWork = () => {

    const render = () => {
        let html = `
            <header>
                <h1><span>A few examples of my work</span></h1>
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
                        <p class="${styles.subtitle}">${subtitle}</p>
                        ${description}
                        <a href="${url}">Check it out!</a>
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