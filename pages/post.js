import { posts } from '../app/data'
import * as helper from '../app/helper'
import styles from './post.module.css'

const Post = () => {

    const selectedPostId = ``

    const registerEventListeners = () => {
        node.addEventListener('click', e => {
            handleClick(e)
        })
    }

    const handleClick = e => {
        const execute = {
            back: () => {
                e.preventDefault()
                window.history.go(-1)
            }
        }

        const { type } = e.target.dataset
        if (type) execute[type]()
    }
    const render = postId => {

        const post = posts.find(post => post.id === +postId)

        const { id, author, title, path, imgURL, imgAltTxt, date, intro, content } = post
        
        let html = `
            <p class="${styles.date}">${helper.dateFormatted(date)} by <span><a href="/about">${author}</a><span></p>
            <h1><span>${title}</span></h1>
            <p class="${styles.intro}">${intro}</p>
            <img src="${imgURL}" alt="${imgAltTxt}">
            <div class="${styles.content}">
                ${content}
            </div>
            <a href="#" class="${styles.back}" data-type="back">Back</a>
        `
 
        return html
    }

    const refresh = postId => {
        node.innerHTML = render(postId)
    }

    const getPostByPath = path => {
        const postToRender = posts.find(post => post.path === `/${path}`)
        if (postToRender) {
            refresh(postToRender.id)
            return node
        } else {
            return false
        }
    }

    const get = postId => {
        refresh(postId)
        return node
    }

    const node = document.createElement('div')
    node.className += styles.post
    registerEventListeners()

    return {
        get,
        getPostByPath
    }
}

export const post = Post()