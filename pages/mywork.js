import { portfolio } from '../app/data'
import styles from './mywork.module.css'

const MyWork = () => {

    const render = () => {
        let html = `
            ${renderPortfolio()}
        `

        return html
    }

    const renderPortfolio = () => {
        return portfolio.map(project => {
            const { title, description, imgUrl } = project
    
            return `
                <div class="${styles.project}">
                    <div class="${styles.description}">
                        <h2>${title}</h2>
                        <p>${description}</p>
                    </div>
                    <div class="${styles.image}">
                        <img src="${imgUrl}">
                    </div>
                </div>
            `
        })
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