import styles from './home.module.css'
import { router } from '../app/router'
import { posts } from '../app/data'

const Home = () => {

    const featuredPostId = 1
    const numberOfPosts = posts.length

    const registerEventListeners = () => {
        node.addEventListener('click', e => {
            handleClick(e)
        })
    }

    const handleClick = e => {
        const execute = {
            navigate: () => {
                e.preventDefault()
                const { id } = e.target.dataset
                // console.log(e.target.pathname)
                router.navigateToPost(e, id)
            }
        }

        const { type } = e.target.dataset
        if (type) execute[type]()

    }

    const render = () => {
        let html = `
            ${renderFeaturedPost(featuredPostId)}
            ${renderRecentPosts(3)}
        `
        return html
    }

    const renderFeaturedPost = postId => {

        const featuredPost = posts.find(post => post.id === postId)
        const { id, author, title, path, imgURL, date, content } = featuredPost
      
        let html = `
            <div class="${styles.featured}">
                <h1>${title}</h1>
                <p>${content}</p>
            <div>
        `
        return html
    }

    // Default to all posts unless we specify a number
    const renderRecentPosts = (numPostsToRender = numberOfPosts) => {

        const postsWithoutFeatured = posts.filter(post => post.id != featuredPostId)
    
        const html = postsWithoutFeatured.map((post, index, array) => {
            const { id, author, title, path, imgURL, date, content } = post
            if ((index) < numPostsToRender) {
                return `
                    <div>
                        <a href="${path}" data-type="navigate" data-id="${id}">
                            <h2>${title}</h2>
                        </a>
                        <p>${content}</p>
                    </div>
                `
            }
        }).join('')

        return html
    }

    const refresh = () => {
        node.innerHTML = render()
    }

    const get = () => {
        refresh()
        registerEventListeners()
        return node
    }

    const node = document.createElement('div')

    return {
        get
    }
}

export const home = Home()