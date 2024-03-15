import { posts } from '../app/data'

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

        const { title, content } = post
        
        let html = `
            <h1>${title}</h1>
            <p>${content}</p>
            <a href="" data-type="back">Back</a>
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
    registerEventListeners()

    return {
        get,
        getPostByPath
    }
}

export const post = Post()