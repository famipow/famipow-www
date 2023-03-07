// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Famipow',
  tagline: 'Consultant DevSecOps | Linux | Infrastructure',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.famipow.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'famipow', // Usually your GitHub org/user name.
  projectName: 'famipow-www', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/famipow/famipow-www/tree/main/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Famipow',
        logo: {
          alt: 'Famipow Logo',
          src: 'img/logo_pow.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'KB',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/famipow/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'http://www.francois-bayart.com/',
            label: 'Résumé',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                to: 'https://twitter.com/frbayart',
              },
              {
                label: 'Facebook',
                to: 'https://facebook.com/frbayart',
              },
              {
                label: 'Instagram',
                to: 'https://instagram.com/frbayart',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/frbayart',
              },
              {
                label: 'LinkedIn',
                to: 'https://linkedin.com/in/frbayart',
              },
            ],
          },
          {
            title: 'Partners',
            items: [
              {
                label: 'Jeudis du Libre',
                href: 'http://jeudisdulibre.be/',
              },
              {
                label: 'DevDay',
                href: 'https://www.devday.be/',
              },
              {
                label: 'Meet Innovate Create',
                href: 'https://www.mic-belgique.be/',
              },
              {
                label: 'Creative Monkeys',
                href: 'https://www.creativemonkeys.be/',
              },
              {
                label: 'CLICK',
                href: 'https://le-click.be/',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Contact',
                to: '/legal/contact',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FAMIPOW SRL. Built with Love of Dynosaurus & Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
