import styles from './home.module.css'
import { router } from '../app/router'
import { posts } from '../app/data'
import * as helper from '../app/helper'

const Home = () => {

    // Init
    const featuredPostId = 1
    const numberOfPosts = posts.length
    let viewMore = false

    const registerEventListeners = () => {
        node.addEventListener('click', e => {
            handleClick(e)
        })
        window.matchMedia('(min-width: 640px)').addEventListener('change', () => {
            refresh()
        })
        window.matchMedia('(min-width: 1214px').addEventListener('change', () => {
            refresh()
        })
    }

    const handleClick = e => {
        const execute = {
            navigateToPost: () => {
                e.preventDefault()
                const { id } = e.target.dataset
                router.navigateToPost(e, id)
            },
            navigate: () => {
                e.preventDefault()
                router.navigate(e)
            },
            more: () => {
                viewMore = !viewMore
                refresh()
            }
        }

        const { type } = e.target.dataset
        if (type) execute[type]()
    }

    const render = () => {

        const posts = viewMore ? renderRecentPosts(6) : renderRecentPosts(numberOfPostsToRender)
    

        let html = `
            <section class=${styles.posts}>
                ${renderFeaturedPost(featuredPostId)}
                ${posts}
            </section>
        `

        html += `
            <button class="${styles.viewMore}" data-type="more">
                ${viewMore ? 'View Less' : 'View More'}
            </button>
        `

        return html
    }

    const renderFeaturedPost = postId => {

        const featuredPost = posts.find(post => post.id === postId)
        const { id, author, title, path, imgURL, imgAltTxt, date, intro } = featuredPost
      
        let html = `
            <div class="${styles.featured}">
            <img src="${imgURL}" alt="${imgAltTxt}">
            <div>
                <p class="${styles.date}">${helper.dateFormatted(date)} by 
                    <a href="/about">
                        ${author}
                    </a>
                </p>
                <a href="${path}" data-type="navigateToPost" data-id="${id}">
                    <h1>${title}</h1>
                </a>
                <p>${intro}</p>
            </div>
            </div>
        `
        return html
    }

    // Default to all posts unless we specify a number
    const renderRecentPosts = (numPostsToRender = numberOfPosts) => {
        const postsWithoutFeatured = posts.filter(post => post.id != featuredPostId)
    
        const html = postsWithoutFeatured.map((post, index, array) => {
            const { id, author, title, path, imgURL, imgAltTxt, date, intro } = post
            if ((index) < numPostsToRender) {
                return `
                    <div class="${styles.post}">
                        <img src="${imgURL}" alt="${imgAltTxt}">
                        <p class="${styles.date}">${helper.dateFormatted(date)} by ${author}</p>
                        <a href="${path}" data-type="navigateToPost" data-id="${id}">
                            <h2>${title}</h2>
                        </a>
                        <p>${intro}</p>
                    </div>
                `
            }
        }).join('')

        return html
    }

    const getNumberOfPostsToRender = () => {
        const getNumberOfPostsFor = {
            'small': () => {
                return 3
            },
            'medium': () => {
                return 4
            },
            'large': () => {
                return 6
            }
        }
        const renderSize = helper.getRenderSize(window.innerWidth)
        return getNumberOfPostsFor[renderSize]()
    }


    const refresh = () => {
        numberOfPostsToRender = getNumberOfPostsToRender()
        node.innerHTML = render()
    }

    const get = () => {
        refresh()
        registerEventListeners()
        return node
    }

    // Initialization stuff
    const node = document.createElement('div')
    let numberOfPostsToRender = getNumberOfPostsToRender()

    return {
        get
    }
}

export const home = Home()