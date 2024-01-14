import type { LLConfig } from "../src/types";


export const Config: LLConfig = {
    title: "LazyLink",
    subtitle: "by Ash",
    about: "Linktree alternative for ppl who like to be lazy and use config files for everything",
    image: "/favicon.svg",
    links: [
        {
            name: "GitHub",
            href: "https://github.com/ash-entwisle/lazylink",
            desc: "LazyLink's GitHub repo",
            link: "github",
            icon: {
                code: "f09b",
                bold: false
            }
        }, {
            name: "Fork me!",
            href: "https:/github.com/ash-entwisle/lazylink/fork",
            desc: "Fork me on GitHub to make your own!",
            link: "fork",
            icon: {
                code: "e13b",
                bold: true
            }
        }, {
            name: "More From Me",
            href: "https://ashentwisle.com",
            desc: "Check out my other stuff!",
            link: "website",
            icon: {
                code: "f0ac",
                bold: true
            }
        }, 
    ]
}
