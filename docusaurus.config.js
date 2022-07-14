// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Preface Tech Team",
  tagline: "There isn't a thing that cannot be learnt.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon._p.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "preface-ai", // Usually your GitHub org/user name.
  projectName: "coding-guideline-tips-and-others", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: "guidelines",
          routeBasePath: "guidelines",
          path: "guidelines",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "tips",
        routeBasePath: "tips",
        path: "tips",
        sidebarPath: require.resolve("./sidebars.js"),
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl:
        //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Preface Coding Tech Team",
        logo: {
          alt: "Preface Coding Logo",
          src: "img/favicon_p.svg",
          srcDark: "img/favicon.svg",
        },
        items: [
          {
            type: "doc",
            docId: "coding",
            docsPluginId: "guidelines",
            position: "left",
            label: "Coding Guideline",
          },
          {
            type: "doc",
            docId: "index",
            docsPluginId: "tips",
            position: "left",
            label: "Development Tips",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/preface-ai/coding-guideline-tips-and-others",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Tech Guidelines & Others",
            items: [
              {
                label: "Coding Guideline",
                to: "/guidelines/coding",
              },
              {
                label: "Git Development Flow",
                to: "/guidelines/git-development-workflow",
              },
              {
                label: "Database Guideline",
                to: "/guidelines/database",
              },
              {
                label: "Development Tips",
                to: "/tips",
              },
            ],
          },
          {
            title: "About Preface",
            items: [
              {
                label: "Preface.ai",
                href: "https://preface.ai",
              },
              {
                label: "Preface Blog",
                href: "https://preface.ai/blog/",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/prefacecoding/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/prefacecoding/",
              },
              {
                label: "Linkedin",
                href: "https://bd.linkedin.com/company/preface-ai",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Preface Tech Team 😉`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby"],
      },
    }),
};

module.exports = config;
