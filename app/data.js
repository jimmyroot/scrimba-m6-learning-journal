import blogOneImageURL from '../assets/images/blogimg.jpg'
import blogTwoImageURL from '../assets/images/blogimg.jpg'
import blogThreeImageURL from '../assets/images/blogimg.jpg'
import blogFourImageURL from '../assets/images/blogimg.jpg'
import blogFiveImageURL from '../assets/images/blogimg.jpg'
import blogSixImageURL from '../assets/images/blogimg.jpg'
import blogSevenImageURL from '../assets/images/blogimg.jpg'
import imgUrlRestaurantApp from '../assets/images/blogimg.jpg'

export const posts = [
    {
        id: 1,
        author: 'Jimmy',
        title: 'My new journey as a bootcamp student',
        path: `/my-new-journey-as-a-bootcamp-student`,
        imgURL: blogOneImageURL,
        imgAltTxt: 'Some descriptive text',
        date: new Date(2024, 2, 10),
        intro: `
            After several months of learning in the Frontend Developer Career Path, 
            I've made the big jump over to the Bootcamp to get expert code reviews of 
            my Solo Projects projects and meet like-minded peers.
        `,
        content: `
            <h2>How I stay committed to learning</h2>

            <p>I like to think of myself as a lifelong learner. I used to spend hours and 
            hours learning, then try to create simple projects using what I learned or
            work new techniques into existing projects.</p>
            
            <p>While that was fun, I felt like it would be helpful to share what I was 
            learning and most things about my journey with the world.</p>
            
            <h2>How I got started</h2>
            
            <p>I started simple and gradually grew my learning journal site. 
            I would take notes about what I was learning. After each learning session, 
            I'd use my notes to not only reflect on what I learned but also write short 
            summaries of what I learned using my own words.</p>
            
            <p>That helped me grok what I was learning, and I realized that posting 
            my learning summaries was also helping others learn and stay motivated.</p>
        `
    },
    {
        id: 2,
        author: 'Jimmy',
        title: 'A simple way to format code blocks with CSS',
        path: `/a-simple-way-to-format-code-blocks-with-css`,
        imgURL: blogTwoImageURL,
        imgAltTxt: 'Some alt text',
        date: new Date(2024, 2, 9),
        intro: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        `,  
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `
    },
    {
        id: 3,
        author: 'Jimmy',
        title: 'Blog Three',
        path: `/blog-three`,
        imgURL: blogThreeImageURL,
        imgAltTxt: 'Some descriptive text',
        date: new Date(2024, 2, 8),
        intro: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        `,
        content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `
    },
    {
        id: 4,
        author: 'Jimmy',
        title: 'Blog Four',
        path: `/blog-four`,
        imgURL: blogFourImageURL,
        imgAltTxt: 'Some descriptive text',
        date: new Date(2024, 2, 7),
        intro: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        `,  
        content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `
    },
    {
        id: 5,
        author: 'Jimmy',
        title: 'Blog Five',
        path: `/blog-five`,
        imgURL: blogFiveImageURL,
        imgAltTxt: 'Some descriptive text',
        date: new Date(2024, 2, 6),
        intro: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        `,  
        content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `
    },
    {
        id: 6,
        author: 'Jimmy',
        title: 'Blog Six',
        path: `/blog-six`,
        imgURL: blogSixImageURL,
        imgAltTxt: 'Some descriptive text',
        date: new Date(2024, 2, 5),
        intro: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        `,  
        content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `
    },
    {
        id: 7,
        author: 'Jimmy',
        title: 'Blog Seven',
        path: `/blog-seven`,
        imgURL: blogSevenImageURL,
        imgAltTxt: 'Some descriptive text',
        date: new Date(2024, 2, 20),
        intro: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        `,  
        content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `
    },
]

export const portfolio = [
    {
        title: `'Cool Beans' - Restaurant Ordering App`,
        description: `A mockup of a restaurant ordering app`,
        stack: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        imgURL: imgUrlRestaurantApp
    },
    {
        title: `'Cool Beans' - Restaurant Ordering App`,
        description: `A mockup of a restaurant ordering app`,
        stack: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        imgURL: imgUrlRestaurantApp
    },
    // {
    //     title: `'Cool Beans' - Restaurant Ordering App`,
    //     description: `A mockup of a restaurant ordering app`,
    //     stack: [
    //         'HTML',
    //         'CSS',
    //         'JavaScript'
    //     ],
    //     imgURL: ''
    // }
    // {
    //     title: `'Cool Beans' - Restaurant Ordering App`,
    //     description: `A mockup of a restaurant ordering app`,
    //     stack: [
    //         'HTML',
    //         'CSS',
    //         'JavaScript'
    //     ],
    //     imgURL: ''
    // }
]