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
            <div class="${styles.postInner}">
                <p class="${styles.date}">${helper.dateFormatted(date)} by <span><a href="/about">${author}</a><span></p>
                <h1><span>${title}</span></h1>
                <p class="${styles.intro}">${intro}</p>
            </div>
            <img src="${imgURL}" alt="${imgAltTxt}">
            <div class="${styles.postInner}">
                <div class="${styles.content}">
                    ${content}
                </div>
            </div>
            <a href="#" class="${styles.back}" data-type="back">Back</a>
        `
 
        return html
    }

    // Default to all posts unless we specify a number
    const getRecentPosts = (numPostsToRender = posts.length, exceptPostId = null, showHeader = false) => {
        const postsToRender = posts.filter(post => post.id != exceptPostId)

        let html = showHeader ? `<h2 class="${styles.heading}">Recent Posts</h2><div class="${styles.recentPostsContainer}">` : `<div class="${styles.recentPostsContainer}">`

        html += postsToRender.map((post, index, array) => {
            const { id, author, title, path, imgURL, imgAltTxt, date, intro } = post
            if ((index) < numPostsToRender) {
                return `
                    <div class="${styles.recentPost}">
                        <img src="${imgURL}" alt="${imgAltTxt}">
                        <p class="${styles.date}">${helper.dateFormatted(date)} by ${author}</p>
                        <a href="${path}" data-type="navigateToPost" data-id="${id}">
                            <h2>${title}</h2>
                        </a>
                        <p>${intro}</p>
                    </div>
                `
            }
        }).join('').concat('</div>')

        const recentPosts = new DOMParser().parseFromString(html, 'text/html').body.children

        const recentPostsSection = document.createElement('section')
        recentPostsSection.classList.add(styles.recentPosts)
        recentPostsSection.append(...recentPosts)
        
        return recentPostsSection
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
        getPostByPath,
        getRecentPosts
    }
}

export const post = Post()