import { posts } from '../app/data'
import { router } from '../app/router.js'
import * as helper from '../app/helper'
import styles from './post.module.css'

const Post = () => {

    // Use this to keep track of which post is currently being shown
    let renderedPostId = null

    // Call this to add event listener to the page
    const registerEventListeners = () => {
        node.addEventListener('click', e => {
            handleClick(e)
        })
    }

    // Click handlers
    const handleClick = e => {
        const execute = {
            back: () => {
                e.preventDefault()
                window.history.go(-1)
            },
            navigateToPost: () => {
                e.preventDefault()
                router.navigateToPost(e, e.target.dataset.id)
            }
        }

        const { type } = e.target.dataset
        if (type) execute[type]()
    }

    // Render an individual post by it's ID, returns html string
    const render = postId => {

        const post = posts.find(post => post.id === +postId)
        const { id, author, title, imgURL, imgAltTxt, date, intro, content } = post
        renderedPostId = id

        let html = `
            <div class="${styles.postInner}">
                <p class="${styles.date}">${helper.dateFormatted(date)} by <span><a href="/about">${author}</a><span></p>
                <h1>${title}</h1>
                <p>${intro}</p>
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

    // Decided to use an object to pass the arguments for the post functions, as it makes the 
    // purpose of each argument easier to read. Default options are set so we can call getPosts with
    // no arguments and will receive all posts in the DB in return
    //
    // This function will return a node containing the posts specified by the options
    // qty: how many posts do you want? postIdToExclude: don't return this post in the selection (use to excldue the
    // currently rendered post), showHeader: do you want to show a 'recent posts' header above the node?
    // randomize: do you want the posts in order, or a random order? 
    const getPosts = (options = {

        qty: posts.length,
        postIdToExclude: null,
        showHeader: false,
        randomize: false

    }) => {
        const { qty, postIdToExclude, showHeader, randomize } = options
        
        let postsToRender = null

        // if randomize, we use 'getRandomPosts()', if not we use 'getOrderedPosts()'
        if (randomize) {
            const options = {
                postArr: posts,
                qty: qty,
                postIdToExclude: postIdToExclude,
                shuffle: false
            }
            postsToRender = getRandomPosts(options)
        } else {
            const options = {
                postArr: posts,
                qty: qty,
                postIdToExclude: postIdToExclude
            }
            postsToRender = getOrderedPosts(options)
        }

        // Start building, if showHeader is true we add a header
        let html = showHeader ? `<h2 class="${styles.heading}">Recent Posts</h2><div class="${styles.recentPostsContainer}">` : `<div class="${styles.recentPostsContainer}">`

        // Build the html from the posts returned above
        html += postsToRender.map(post => {
            const { id, author, title, path, imgURL, imgAltTxt, date, intro } = post
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
        }).join('').concat('</div>')

        // Convert the html string into a DOM node object, as this is what our route render
        // function needs to work with, in router.js
        const recentPosts = new DOMParser().parseFromString(html, 'text/html').body.children
        const recentPostsSection = document.createElement('section')
        recentPostsSection.classList.add(styles.recentPosts)
        recentPostsSection.append(...recentPosts)

        // Add an event listener so we can intercept default link behaviour and manually route
        recentPostsSection.addEventListener('click', e => {
            handleClick(e)
        })
        
        return recentPostsSection
    }

    // Get some random posts
    const getRandomPosts = (options = {

        postArr: posts,
        qty: posts.length,
        postIdToExclude: null,
        shuffle: false

    }) => {

        const { postArr, qty, postIdToExclude, shuffle } = options
        const totalPostsInDb = getTotalPostsInDb()
        const postsToRender = []
    
        // Build the list of posts we'll retrieve, this will always result in a
        // random order, so if shuffle is 'false', we'll re-order afterwards
        do {
            const randomPostId = helper.getRandomBetweenAndIncluding(1, totalPostsInDb)
            if (!postsToRender.includes(randomPostId) && randomPostId != postIdToExclude) postsToRender.push(randomPostId)
        } while (postsToRender.length < qty)
    
        // If shuffle is set to false, we should order the array before retrieving posts, it's easier
        // to sort the IDs in postsToRender now, than to sort the actual posts after retrieving them
        // in the next step
        shuffle ? helper.shuffleArray(postsToRender) : postsToRender.sort()

        // Return a new array containing only the selected qty/order of posts
        return postArr.reduce((arr, post) => {
            if (postsToRender.includes(post.id)) arr.push(post)
            return arr
        }, [])
    }

    // Same as above but much simpler as we just get some posts in the order they
    // appear in data.js
    const getOrderedPosts = (options = {

        postArr: posts,
        qty: posts.length,
        postIdToExclude: null

    }) => {
        const { postArr, qty, postIdToExclude } = options
        return postArr.reduce((arr, post) => {
            if (arr.length < qty && post.id != postIdToExclude ) {
                arr.push(post)
            }
            return arr
        }, [])
    }

    // Another way to get a single post, but this time we can look it up
    // by it's path. This is used if the user manually enters a path in the
    // browser, and also when the popstate changes e.g. if user clicks 'back' and 'forward'
    // We look up the post by it's path and render that way
    const getPostByPath = path => {
        const postToRender = posts.find(post => post.path === `/${path}`)
        if (postToRender) {
            refresh(postToRender.id)
            return node
        } else {
            return false
        }
    }

    const getRenderedPostId = () => {
        return renderedPostId
    }

    const getTotalPostsInDb = () => {
        return posts.length
    }

    const refresh = postId => {
        node.innerHTML = render(postId)
        registerEventListeners()
    }

    // This is how you can get a post by it's ID, after importing posts, you call posts.get(id)
    const get = postId => {
        refresh(postId)
        return node
    }

    const node = document.createElement('div')
    node.className += styles.post
    
    return {
        get,
        getPostByPath,
        getPosts,
        getRenderedPostId,
        getTotalPostsInDb
    }
}

export const post = Post()