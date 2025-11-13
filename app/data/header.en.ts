export type MenuItem = {
    name: string,
    slug: string,
    link: string
}


export const menuItemsEn: MenuItem[] = [
    {
        name: "Home",
        slug: "home",
        link: "/",
    },
    {
        name: "About me",
        slug: "about-me",
        link: "/about-me"
    },
    {
        name: "Resume",
        slug: "resume",
        link: "/resume"
    },
    {
        name: "Portfolio",
        slug: "portfolio",
        link: "/portfolio"
    },
    {
        name: "Contact",
        slug: "contact",
        link: "/contact"
    }
]