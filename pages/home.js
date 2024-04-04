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
        window.matchMedia('(min-width: 640px)').addEventListener('change', () => {
            refresh()
        })
        window.matchMedia('(min-width: 1024px').addEventListener('change', () => {
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
        const featuredPost = renderFeaturedPost(featuredPostId)

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

        return [featuredPost, recentPosts, btnViewMore]
    }

    const renderFeaturedPost = postId => {

        const featuredPost = posts.find(post => post.id === postId)
        const { id, author, title, path, imgURL, imgAltTxt, date, intro } = featuredPost
        const el = document.createElement('section')

        el.classList.add(styles.featured)
        el.innerHTML = `
            <img src="${imgURL}" alt="${imgAltTxt}">
            <div>

                <p class="${styles.date}"><span class="${global.highlight}">
                        ${helper.dateFormatted(date)} by 
                        <a href="/about">
                            ${author}
                        </a>
                    </span<
                </p>
                
                <h1 class="${styles.featuredHeader}">
                    <a href="${path}" data-type="navigateToPost" data-id="${id}">
                        <span class="${global.highlight}">${title}</span>
                    </a>
                </h1>

                <p><span class="${global.highlight}">${intro}</span></p>
            </div>
        `

        return el
    }

    const renderViewMoreBtn = () => {
        const btn = document.createElement('button')
        btn.classList.add(styles.viewMore)
        btn.dataset.type = 'more'
        btn.textContent = viewMore ? 'View Less' : 'View More'
        return btn
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
        node.replaceChildren(...render())
    }

    const get = () => {
        refresh()
        registerEventListeners()
        return node
    }

    // Initialization stuff
    const node = document.createElement('div')
    node.classList.add(styles.home)
    
    const featuredPostId = 1
    let viewMore = false
    let numberOfPostsToRender = getNumberOfPostsToRender()

    return {
        get
    }
}

export const home = Home()