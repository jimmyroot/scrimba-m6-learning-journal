import styles from './home.module.css'
import global from '../css/global.module.css'
import { router } from '../app/router'
import { posts } from '../app/data'
import * as helper from '../app/helper'
import { post } from './post'

const Home = () => {

    // Initialization is done at the bottom above return, as we rely on some functions
    // declared below

    const registerEventListeners = () => {
        node.addEventListener('click', e => {
            handleClick(e)
        })

        // Media queries to refresh the page at the specified breakpoints. 
        // The page will automatically render more or less recent posts at 
        // small, medium, large sizes
        window.matchMedia('(min-width: 640px)').addEventListener('change', () => {
            refresh()
        })
        window.matchMedia('(min-width: 1024px').addEventListener('change', () => {
            refresh()
        })
    }

    // Click handlers
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
        const featuredPost = renderFeaturedPost(featuredPostId)

        // Set config for getPosts, render all posts if 'View more' is active
        const options = viewMore ? {
            qty: post.getTotalPostsInDb(),
            postIdToExclude: featuredPostId,
            showHeader: false,
            randomize: false
        } : {
            qty: numberOfPostsToRender,
            postIdToExclude: featuredPostId,
            showHeader: false,
            randomize: false
        }
        
        const recentPosts = post.getPosts(options)
        const btnViewMore = renderViewMoreBtn()

        // Instead of just html we return an array with the nodes we will render
        return [featuredPost, recentPosts, btnViewMore]
    }

    const renderFeaturedPost = postId => {
        const featuredPost = posts.find(post => post.id === postId)
        const { id, author, title, path, imgURL, imgAltTxt, date, intro } = featuredPost
        const section = document.createElement('section')

        section.classList.add(styles.featured)
        section.innerHTML = `
            <img src="${imgURL}" alt="${imgAltTxt}">
            <div>
                <p class="${styles.date}">
                    <span class="${global.highlight}">
                        ${helper.dateFormatted(date)} by 
                        <a href="/about">
                            ${author}
                        </a>
                    </span>
                </p>
                <h1 class="${styles.featuredHeader}">
                    <a href="${path}" data-type="navigateToPost" data-id="${id}">
                        <span class="${global.highlight}">${title}</span>
                    </a>
                </h1>
                <p><span class="${global.highlight}">${intro}</span></p>
            </div>
        `

        return section
    }

    const renderViewMoreBtn = () => {
        const btn = document.createElement('button')
        btn.classList.add(styles.viewMore)
        btn.dataset.type = 'more'
        btn.textContent = viewMore ? 'View Less' : 'View More'
        return btn
    }

    // Figures out how many posts to render based on window size
    const getNumberOfPostsToRender = () => {
        // Here you can configure how many posts you'd like to render
        // for each window size
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
        
        // Pass window width to getRenderSize to determine size
        const renderSize = helper.getRenderSize(window.innerWidth)
        return getNumberOfPostsFor[renderSize]()
    }

    const refresh = () => {
        // Update number of posts to render each time we refresh page
        numberOfPostsToRender = getNumberOfPostsToRender()
        node.replaceChildren(...render())
    }

    const get = () => {
        refresh()
        registerEventListeners()
        return node
    }

    // Initialization stuff
    const node = document.createElement('div')
    node.className += (styles.home)
    
    const featuredPostId = 1
    let viewMore = false
    let numberOfPostsToRender = getNumberOfPostsToRender()

    return {
        get
    }
}

export const home = Home()