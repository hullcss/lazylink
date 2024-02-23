import type { LLConfig } from "../src/types";
/*


    "/links/husu": "https://hulluniunion.com/activities/view/ComputerScience",
    "/links/linkedin": "https://linkedin.com/company/hullcss",

*/

export const Config: LLConfig = {
    title: "HullCSS",
    about: "We are the Computer Science Society at the University of Hull. We are a group of students who are passionate about technology and programming. We are dedicated to helping students learn and develop their skills in computer science and related fields.",
    image: "/favicon.svg",
    links: [
        {
            name: "GitHub",
            href: "https://github.com/hullcss",
            desc: "HullCSS' GitHub",
            link: "github",
            icon: {
                code: "f09b",
                bold: false
            }
        }, {
            name: "Website",
            href: "https://hullcss.org",
            desc: "Check out our website",
            link: "website",
            icon: {
                code: "f0ac",
                bold: true
            }
        }, {
            name: "Discord",
            href: "https://discord.gg/AFxbUs5kyA",
            desc: "Join our Discord server",
            link: "discord",
            icon: {
                code: "f392",
                bold: false
            }
        }, {
            name: "Facebook",
            href: "https://facebook.com/hullCSS",
            desc: "Like us on Facebook",
            link: "facebook",
            icon: {
                code: "f09a",
                bold: true
            },
            hide: true
        }, {
            name: "Instagram",
            href: "https://instagram.com/hull_css/",
            desc: "Follow us on Instagram",
            link: "instagram",
            icon: {
                code: "f16d",
                bold: true
            }
        }, {
            name: "Twitter",
            href: "https://twitter.com/hull_css",
            desc: "Follow us on Twitter",
            link: "twitter",
            icon: {
                code: "f099",
                bold: true
            },
            hide: true
        }, {
            name: "LinkedIn",
            href: "https://linkedin.com/company/hullcss",
            desc: "Connect with us on LinkedIn",
            link: "linkedin",
            icon: {
                code: "f08c",
                bold: true
            },
            hide: true
        }, {
            name: "Students Union",
            href: "https://hulluniunion.com/activities/view/ComputerScience",
            desc: "Hull University Union's Computer Science Society",
            link: "husu",
            icon: {
                code: "f19d",
                bold: false
            }
        }, {
            name: "Email",
            href: "mailto:hullcss.org",
            desc: "hullcss email",
            link: "email",
            icon: {
                code: "f0e0",
                bold: true
            }
        }
    ]
}
