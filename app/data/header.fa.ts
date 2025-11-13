export type MenuItem = {
    name: string,
    slug: string,
    link: string
}


export const menuItemsFa: MenuItem[] = [
    {
        name: "خانه",
        slug: "home",
        link: "/fa",
    },
    {
        name: "درباره من",
        slug: "about-me",
        link: "/fa/about-me"
    },
    {
        name: "رزومه",
        slug: "resume",
        link: "/fa/resume"
    },
    {
        name: "پورتفولیو",
        slug: "portfolio",
        link: "/fa/portfolio"
    },
    {
        name: "ارتباط",
        slug: "contact",
        link: "/fa/contact"
    }
]
