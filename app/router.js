import { home } from '../pages/home'
import { post } from '../pages/post'
import { myWork } from '../pages/mywork'
import { about } from '../pages/about'

const Router = () => {

    // Init
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
            content: (() => {
                const node = document.createElement('div')
                node.innerHTML = `
                    <h1>Well, this is embarassing.</h1>
                    <p>We couldn't find what you requested. Please click 
                    <a href="/" data-type="navigate">here</a> to return to
                    the homepage.
                    </p>
                `
                return node
            })()
        }
    }

    const registerRouterWithBrowserNavigation = () => {
        window.onpopstate = e => render(location.pathname)
    }

    const renderStartPage = () => {
        render(location.pathname)
    }

    const navigate = e => {
        const route = e.target.pathname
        history.pushState({}, "", route)
        render(route)
    }

    const navigateToPost = (e, id) => {
    
        // routes['/post'].content = post.get(id)
        const route = `/post${e.target.pathname}`
        history.pushState({}, "", route)
        render(route)
    }

    const render = route => {

        // Remove any trailing slash (unless route is homepage)
        if (route != '/') route = route.replace(/\/$/, "")
        // console.log(route)

        // Split the requested path so we can do some quick parsing to see if
        // a blog post was requested directly
        const path = route.split('/')   

        // Check if we're trying to access a post
        if (path[1] === 'post') {
            // check if the path contains a sub URL
            const postPath = path[2]
            // try to set post content to the requested post, getPostByPath will return
            // false if it can't find the post
            let html = post.getPostByPath(postPath)

            // if post was retrieved successfully, append recent posts 
            if (html) {
                const recentPosts = post.getRecentPosts(3, null, true)
                routes['/post'].content = [html, recentPosts]
            }

            // If the post was returned successfully, set route to post, else if it's 'false' set route to
            // unknown before render
            routes['/post'].content ? route = '/post' : route = '/unknown'
        } 
        
        // Try to render the given path, if anything goes wrong set route to unknown and go...
        try {
            const nodesToRender = routes[route].content
            document.querySelector('#app').replaceChildren(...nodesToRender)
        }
        catch {
            document.querySelector('#app').replaceChildren(routes['/unknown'].content)
        }
    }

    return {
        navigate,
        navigateToPost,
        renderStartPage,
        registerRouterWithBrowserNavigation
    }
}

export const router = Router()