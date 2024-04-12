import { home } from '../pages/home'
import { post } from '../pages/post'
import { myWork } from '../pages/mywork'
import { about } from '../pages/about'
import { header } from '../layout/header'

const Router = () => {

    // Each route's contents is an array with one or more DOM nodes
    const routes = {
        '/': {
            linkLabel: 'Home',
            content: [home.get()] // imported module.get() ?
        },
        '/about': {
            linkLabel: 'About',
            content: [about.get()]
        },
        '/mywork': {
            linkLabel: 'Post',
            content: [myWork.get()]
        },
        '/post': {
            content: ``
        },
        '/unknown': {
            content: [(() => {
                const node = document.createElement('div')
                node.innerHTML = `
                    <h1>Well, this is embarassing.</h1>
                    <p>We couldn't find what you requested. Please click 
                    <a href="/" data-type="navigate">here</a> to return to
                    the homepage.
                    </p>
                `
                return node
            })()]
        }
    }

    // Register render function with popstate (so the back button works in browser)
    const registerRouterWithBrowserNavigation = () => {
        window.onpopstate = e => render(location.pathname)
    }

    // Default page loader
    const renderStartPage = () => {
        render(location.pathname)
    }

    // Navigate function, sets route, set location (fires popstate)
    const navigate = e => {
        const route = e.target.pathname
        window.location = route || '/'

        
    }

    // Navigate to an individual post
    const navigateToPost = e => {
        // Build the path, set route, set location (fires popstate), scroll back to top
        const route = `/post${e.target.pathname}`
        window.location = route
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        })
    }

    // Render the route, basically takes the content from the 'routes' object and inserts
    // it into the #app container
    const render = route => {
        // Remove any trailing slash (unless route is homepage)
        if (route != '/') route = route.replace(/\/$/, "")
        // console.log(route)

        // Split the requested path so we can do some quick parsing to see if
        // a blog post was requested directly
        const path = route.split('/')   

        // Check if we're trying to access a post, if so update the contents of the post route
        if (path[1] === 'post') {
            // check if the path contains a sub URL
            const postPath = path[2]
            // try to set post content to the requested post, getPostByPath will return
            // false if it can't find the post
            let postToRender = post.getPostByPath(postPath)

            // if post was retrieved successfully, get some recent posts so we can render
            // them under the post
            if (postToRender) {
                const options = {
                    qty: 3,
                    postIdToExclude: post.getRenderedPostId(),
                    showHeader: true,
                    randomize: true
                }
                const recentPostsSection = post.getPosts(options)
                routes['/post'].content = [postToRender, recentPostsSection]
            }

            // If the post was returned successfully, set route to post, else if it's 'false' set route to
            // unknown before render
            routes['/post'].content ? route = '/post' : route = '/unknown'
        } 
        
        // Try to render the given path, if anything goes wrong set route to unknown and render, will show
        // a fake '404' style page
        try {
            const nodesToRender = routes[route].content
            document.querySelector('#app').replaceChildren(...nodesToRender)
        }
        catch {
            document.querySelector('#app').replaceChildren(routes['/unknown'].content)
        }

        // Call navUpdate so navigation selection indicator is accurate (should show nothing selected when
        // a post is being viewed)
        header.navUpdate()
    }

    return {
        navigate,
        navigateToPost,
        renderStartPage,
        registerRouterWithBrowserNavigation
    }
}

export const router = Router()