import { posts } from '../app/data'

const Post = () => {

    const selectedPostId = ``

    const render = postId => {

        const post = posts.find(post => post.id === +postId)

        const { title, content } = post
        
        let html = `
            <h1>${title}</h1>
            <p>${content}
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

    return {
        get,
        getPostByPath
    }
}

export const post = Post()