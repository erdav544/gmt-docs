// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "GMT Docs",
    tagline: "Guides, Setup, and SOPs for Gratia Multimedia Team",
    favicon: "img/gmt/favicon.ico",

    // Set the production url of your site here
    url: "https://gmt-docs.erdav.eu.org",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    noIndex: true,

    trailingSlash: false,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "erdav544", // Usually your GitHub org/user name.
    projectName: "gmt-docs", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    plugins: [require.resolve("docusaurus-lunr-search")],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/erdav544/gmt-docs/tree/main",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    sidebarPath: "./sidebars.js",
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            announcementBar: {
                id: "under_construction",
                content: "Dokumentasi ini masih dalam tahap pengembangan",
                backgroundColor: "#fafbfc",
                textColor: "#091E42",
                isCloseable: false,
            },

            colorMode: {
                defaultMode: "dark",
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },

            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true,
                },
            },

            // Replace with your project's social card
            image: "img/gmt/android-chrome-512x512.png",
            navbar: {
                title: "GMT Docs",
                logo: {
                    alt: "GMT Logo",
                    src: "img/gmt/android-chrome-192x192.png",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Documentations",
                    },
                    //{ to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/erdav544/gmt-docs",
                        //label: "GitHub",
                        position: "right",
                        className: "header-github-link",
                        "aria-label": "GitHub repository",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Introduction",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Stack Overflow",
                                href: "https://stackoverflow.com/questions/tagged/docusaurus",
                            },
                            {
                                label: "Discord",
                                href: "https://discordapp.com/invite/docusaurus",
                            },
                            {
                                label: "X",
                                href: "https://x.com/docusaurus",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            /*{
                                label: "Blog",
                                to: "/blog",
                            },*/
                            {
                                label: "GitHub",
                                href: "https://github.com/erdav544/gmt-docs",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} GMT Docs. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
