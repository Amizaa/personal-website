import type { Project } from "@/types/projects.types";

export const projectsEn: Project[] = [
    {
        title: 'Personal Website (This website)',
        tag: 'Fullstack',
        image: '/images/projects/personal_web.png',
        description: 'A personal website that is a showcase of my portfolio',
        technologies: ['Nuxtjs', 'Nuxt UI', 'GSAP', 'TailwindCSS', 'TypeScript'],
        github: 'https://github.com/Amizaa/personal-website',
        demo: '/',
        size: 'L'
    },
    {
        title: 'Rimas Accessory Website',
        tag: 'Fullstack',
        image: '',
        description: 'An eCommerce website for selling different types of accessories',
        technologies: ['Nuxtjs','Nuxt Ui','Django','REST API','TailwindCSS','Pinia','PostgreSQL', 'TypeScript'],
        github:'https://github.com/Amizaa/Rimas-Accessories-Website',
        size: 'L'
    },
    {
        title: 'Tecso Dev Website',
        tag: 'Frontend',
        image: '/images/projects/Tecso_dev.png',
        description: 'Contributed to Tecso’s website by adding full Persian language support, enhancing accessibility and user experience',
        technologies: ['Nuxtjs', 'GSAP', 'Bootstrap'],
        github: 'https://github.com/Tecso-Dev/main-site',
        size: 'M',
        demo: 'https://tecso.team'
    },
    {
        title: 'Yolchi - Transportation and Cargo system',
        tag: 'Fullstack',
        image: '/images/projects/yolchi.png',
        description: 'A comprehensive transportation system designed to streamline the logistics and transportation process for both drivers and shippers.',
        technologies: ['Django', 'HTML', 'Bootstrap', 'Javascript', 'MySQL'],
        github: 'https://github.com/Amizaa/Yolchi',
        size: 'L'
    },
    {
        title: 'Gold Price Prediction',
        tag: 'Data Science',
        image: '/images/projects/gold_price_prediction.png',
        description: 'My University Project about Gold price prediction based on sentimental analysis of News tokens Using Machine Learning & LLMs',
        technologies: ['Machine Learning', 'Web Scraping', 'NLP', 'Deep Learning'],
        github: 'https://github.com/Amizaa/gold-price-prediction',
        size: 'M',
    },
    {
        title: 'Library Management System',
        tag: 'Frontend',
        image: '/images/projects/library.png',
        description: 'The Software course project that designed to simplify the management of library resources, search for books, and borrow them effortlessly.',
        technologies: ['Vue.js','Javascript','CSS'],
        github: 'https://github.com/Amizaa/library-management',
        size: 'S',
        demo: 'https://project.miladrezvani.ir/library/'
    }
]

