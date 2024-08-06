import imgUrlDesk from '../assets/images/desk.png'
import imgUrlScrimba from '../assets/images/scrimba.png'
import imgUrlCSSModules from '../assets/images/modules.png'
import imgUrlMotivation from '../assets/images/motivation.png'
import imgUrlModularJs from '../assets/images/modularjs.png'
import imgUrlExtensions from '../assets/images/extensions.png'
import imgUrlJournal from '../assets/images/learningjournal.png'
import imgUrlArrays from '../assets/images/arrays.png'
import imgUrlRestaurantApp from '../assets/images/coolbeans.png'
import imgUrlInvoiceCreator from '../assets/images/invoicecreator.png'
import imgUrlChoreslist from '../assets/images/choreslist.png'
import imgUrlBestBank from '../assets/images/bestbank.png'
import imgUrlUnitConverter from '../assets/images/unitconverter.png'
import imgUrlColorCult from '../assets/images/colorcult.png'
import imgUrlReelTime from '../assets/images/reeltime.png'

export const posts = [
    {
        id: 1,
        author: 'Jimmy',
        title: 'My new journey as a bootcamp student',
        path: `/my-new-journey-as-a-bootcamp-student`,
        imgURL: imgUrlDesk,
        imgAltTxt: 'Some descriptive text',
        date: new Date(2024, 2, 10),
        intro: `
            After completing the first module of Scrimba's FrontEnd Development Career Path,
            I knew I had to jump in and see what the full Bootcamp experience had to offer. I haven't
            been disappointed! Read on to find out why.
        `,
        content: `
            <h2>First, some history</h2>
            <p>I first took an interest in web development over twenty years ago, in my teens. Although
            I learned some very basic design and development skills, my career swung in the direction of
            IT systems management and I had less and less time for what I'd always treated more as a 'hobby'.</p>
            <p>In 2023 I decided it was time to stop messing around—I wanted to take my knowledge and abilities to
            a level where I would be employable as a developer.</p>
            <h2>How I found Scrimba</h2>
            <p>After a few months of trying to learn different skills with no real direction, I was reading reviews
            of Udemy courses on reddit when I saw a fellow learner make the bold claim that they had 'switched
            to learning on Scrimba and never looked back.' Colour me curious...</p>
            <p>I signed up for some of the free courses, but almost immediately after reviewing the FrontEnd Development Career
            path contents, I signed up for the 'Pro' membership and began to hit it hard. After completing the first module, 
            I decided I needed to try the bootcamp; I was drawn in by the opportunity of getting my code reviewed by 
            professional developers.</p>
            <h2>My experience with the bootcamp</h2>
            <p>I'm still here nearly 6 months later, what can I say? There are a couple of things 
            that really set the bootcamp apart. The first is the community. It really is priceless to be a 
            part of a community of like-minded individuals who are all moving toward the same goal. I don't
            think I ever encountered so many friendly and helpful people
            all gathered together in one place, from learners to professionals.</p>
            <p>I realised quickly that a community is what I've been missing all these years.
            I don't think I'd of kept going for this long if it wasn't for them. If 
            you want to learn coding and web development but struggle with loneliness or motivation, 
            I would highly encourage you to join Scrimba just for the community alone.</p>
            <p>It turns out however, that Scrimba has more tricks up it's sleeve. The interactive screen-casts 
            are the next best thing to being in a live classroom environment, and coupled with the lively community 
            make Scrimba a unique learning experience. For a serial non-completionist like me, there's no
            better platform. Because of these factors, I'm quite certain that the Scrimba FrontEnd Development Career path will 
            be the first online course in twenty years that I actually finish!</p>
            <p>Peace.</p>

        `
    },
    {
        id: 2,
        author: 'Jimmy',
        title: 'So, why Scrimba?',
        path: `/so-why-scrimba`,
        imgURL: imgUrlScrimba,
        imgAltTxt: 'Some alt text',
        date: new Date(2024, 2, 9),
        intro: `
            In my last post, I talked a little about why Scrimba and what makes it so awesome.
            Let's dive in a little bit deeper and talk about why I believe it's the 
            one of the best online learning experienced out there.
        `,  
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>Nemo enim ipsam voluptatem quia voluptas</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia 
            non numquam eius modi tempora incidunt ut labore et dolore magnam 
            aliquam quaerat voluptatem.</p>
            <p>Et harum quidem rerum facilis est et expedita distinctio.</p>
        `
    },
    {
        id: 3,
        author: 'Jimmy',
        title: 'An introduction to CSS modules',
        path: `/an-introduction-to-css-modules`,
        imgURL: imgUrlCSSModules,
        imgAltTxt: 'Some descriptive text',
        date: new Date(2024, 2, 8),
        intro: `
            I was recently intrigued by an article I read recently about CSS
            modules and decided to dive in the deep end...here's what I learned.
            Let's see if I can convince you to try them out! 
        `,
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>Nemo enim ipsam voluptatem quia voluptas</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia 
            non numquam eius modi tempora incidunt ut labore et dolore magnam 
            aliquam quaerat voluptatem.</p>
            <p>Et harum quidem rerum facilis est et expedita distinctio.</p>
        `
    },
    {
        id: 4,
        author: 'Jimmy',
        title: 'Boosting motivation',
        path: `/boosting-motivation`,
        imgURL: imgUrlMotivation,
        imgAltTxt: 'Some descriptive text',
        date: new Date(2024, 2, 7),
        intro: `
            If you're anything like me, motivation can be a daily struggle. Here's some
            actionable strategies to stay motivated.
        `,  
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>Nemo enim ipsam voluptatem quia voluptas</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia 
            non numquam eius modi tempora incidunt ut labore et dolore magnam 
            aliquam quaerat voluptatem.</p>
            <p>Et harum quidem rerum facilis est et expedita distinctio.</p>
        `
    },
    {
        id: 5,
        author: 'Jimmy',
        title: 'My experiences with modular JavaScript',
        path: `/my-experiences-with-modular-javascript`,
        imgURL: imgUrlModularJs,
        imgAltTxt: 'Some descriptive text',
        date: new Date(2024, 2, 6),
        intro: `
            As you progress, it won't be long before your .js files start to get pretty
            damned beefy. The solution? Modular JavaScript. Let's get into
            the weeds...
        `,  
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>Nemo enim ipsam voluptatem quia voluptas</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia 
            non numquam eius modi tempora incidunt ut labore et dolore magnam 
            aliquam quaerat voluptatem.</p>
            <p>Et harum quidem rerum facilis est et expedita distinctio.</p>
        `
    },
    {
        id: 6,
        author: 'Jimmy',
        title: 'My favorite VS Code extensions and themes',
        path: `/my-favorite-vs-code-extensions-and-themes`,
        imgURL: imgUrlExtensions,
        imgAltTxt: 'Some descriptive text',
        date: new Date(2024, 2, 5),
        intro: `
            Who doesn't love a good theme? But that's just the start of VSCode 
            customizations. Here are the extensions I can't live without—I bet
            there's at least one that you won't be able to, either!
        `,  
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>Nemo enim ipsam voluptatem quia voluptas</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia 
            non numquam eius modi tempora incidunt ut labore et dolore magnam 
            aliquam quaerat voluptatem.</p>
            <p>Et harum quidem rerum facilis est et expedita distinctio.</p>
        `
    },
    {
        id: 7,
        author: 'Jimmy',
        title: `Let's talk about array methods`,
        path: `/lets-talk-about-array-methods`,
        imgURL: imgUrlArrays,
        imgAltTxt: 'Some descriptive text',
        date: new Date(2024, 2, 20),
        intro: `
            Every time I'm trying to do something new with an array, it nearly always
            turns out there's already a method for it. Let's review the most useful 
            built in array functions! Yes, even .reduce()...
        `,  
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>Nemo enim ipsam voluptatem quia voluptas</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia 
            non numquam eius modi tempora incidunt ut labore et dolore magnam 
            aliquam quaerat voluptatem.</p>
            <p>Et harum quidem rerum facilis est et expedita distinctio.</p>
        `
    },
]

export const portfolio = [
    {
        title: `Reel Time`,
        subtitle: `A movie watchlist app. Create your watchlists then search for movies to add
        using search results from the Open Movie Database. Features persistent data storage
        courtesy of Firestore DB. Fully responsive.`,
        description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        stack: [
            'HTML',
            'CSS',
            'JavaScript',
            'FIRESTORE DB',
            'FIREBASE AUTH'
        ],
        url: 'https://jn-scrimba-m8-reeltime.netlify.app/',
        imgURL: imgUrlReelTime
    },
    {
        title: `Color Cult`,
        subtitle: `A colour scheme generator that uses the thecolorapi.com to generate color schemes
        based off a seed colour specified by the user. Responsive for a consistent experience across desktop,
        tablet and mobile.`,
        description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        stack: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        url: 'https://jn-scrimba-m8-colorcult.netlify.app/',
        imgURL: imgUrlColorCult
    },
    {
        title: `Learning Journal`,
        subtitle: `A simple, responsive, blog design driven by media queries. Built using a combination
        of grid and flexbox — you're already on it!`,
        description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        stack: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        url: 'https://heartfelt-sunshine-f4fd8e.netlify.app/',
        imgURL: imgUrlJournal
    },
    {
        title: `Cool Beans`,
        subtitle: `An online ordering service app mockup`,
        description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        stack: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        url: 'https://comforting-malasada-3f39d8.netlify.app/',
        imgURL: imgUrlRestaurantApp
    },
    {
        title: `Invoice Creator`,
        subtitle: `A mockup of an app for creating and sending invoices`,
        description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        stack: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        url: 'https://voluble-gaufre-9b87ff.netlify.app/',
        imgURL: imgUrlInvoiceCreator
    },
    {
        title: `Choreslist`,
        subtitle: `A simple to-do list app`,
        description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        stack: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        url: 'https://mellow-sorbet-f835b8.netlify.app/',
        imgURL: imgUrlChoreslist
    },
    {
        title: `BestBank`,
        subtitle: `A mockup for a fictitious online bank`,
        description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        stack: [
            'HTML',
            'CSS',
        ],
        url: 'https://luxury-pavlova-2d07f7.netlify.app/',
        imgURL: imgUrlBestBank
    },
    {
        title: `Unit Converter`,
        subtitle: `A simple unit converter app`,
        description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        stack: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        url: 'https://clinquant-bombolone-4ec7e0.netlify.app/',
        imgURL: imgUrlUnitConverter
    }
]