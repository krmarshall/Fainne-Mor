// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fainne Mor',
  tagline: 'Homebrew Setting Documentation',
  url: 'https://fainne-mor.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/favicon.ico',
  organizationName: 'krmarshall', // Usually your GitHub org/user name.
  projectName: 'Fainne-Mor', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          path: 'changelogs',
          routeBasePath: 'changelogs',
          showReadingTime: true,
          blogSidebarTitle: 'Recent Updates',
          blogTitle: 'Changelogs',
          blogDescription: 'Changelogs',
          postsPerPage: 'ALL',
          feedOptions: { type: null },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Fainne Mor',
        logo: {
          alt: 'Fainne Mor Logo',
          src: 'img/logos/siteLogoGreen.webp',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/changelogs', label: 'Changelogs', position: 'left' },
          {
            href: 'https://github.com/krmarshall/Fainne-Mor',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Sources / Inspiration',
                to: '/docs/sources',
              },
            ],
          },
          {
            title: 'Source Code',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/krmarshall/Fainne-Mor',
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Changelogs',
                to: '/changelogs',
              },
            ],
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        blogRouteBasePath: 'changelogs',
        blogDir: 'changelogs',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logos/siteLogoGreen.webp',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(20, 133, 38)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#18191a',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/logos/apple-touch-icon.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/logos/siteLogoGreen.webp',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#18191a',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
