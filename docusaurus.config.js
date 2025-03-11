// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DigiQuip - Utstyrsspesifikk opplæring og kompetansedokumentasjon',
  tagline: 'DigiQuip er navet som enkelt kobler maskin- og utstyrsparken din med tilgjengelig dokumentasjon, kontrollrutiner, sikkerhetsopplæring og spesifikk maskin- og utstyrsopplæring.',
  favicon: 'img/dq.ico',

  // Set the production url of your site here
  url: 'https://digiquip.no',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'digiquip', // Usually your GitHub org/user name.
  projectName: 'dq-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nb',
    locales: ['nb', 'en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      nb: {
        htmlLang: 'nb-NO',
      }
    }
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  scripts: [{ src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'digiquip.no' }],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'DigiQuip Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: "dropdown",
            label: 'Products',
            position: 'left',
            items: [
              {
                label: 'Kvipp',
                sidebarid: 'tutorialSidebar',
                to: '/kvipp',
              },
              {
                label: 'Kvipp Bedrift',
                sidebarid: 'tutorialSidebar',
                to: '/bedrift',
              },
              {
                label: 'Trygg Maskin',
                sidebarid: 'tutorialSidebar',
                to: '/trygg-maskin',
              },
            ]
          },
          {
            to: '/about',
            label: 'About us',
            position: 'left',
            sidebarid: 'tutorialSidebar',
          },
          {
            to: '/price',
            label: 'Priser',
            position: 'left',
            sidebarid: 'tutorialSidebar',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Dokumentasjon',
          },

          {
            to: 'https://pim.digiquip.com/authenticate/idp/init?destination=none&interactionMode=signIn&existingSessionId=',
            label: 'Sign in',
            position: 'right',
            sidebarid: 'loginButton',
          },
          {
            to: 'https://kvipp.it',
            label: 'Kvipp',
            position: 'right',
            sidebarid: 'scanButton',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            sidebarid: 'tutorialSidebar',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'DigiQuip AS',
            items: [
              {
                label: 'Holtskogen 7, NO 1825 TOMTER',
                href: 'https://www.google.com/maps/search/?api=1&query=Holtskogen+7%2C+1825+Tomter%2C+Norway',
              },
              {
                label: 'Org.nr: NO923673911MVA',
                href: 'https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=923673911'
              },
              {
                label: '+47 69 83 85 00',
                href: 'tel:+4769838500'
              },
              {
                label: 'support@digiquip.no (/sales@)',
                href: 'mailto:support@digiquip.no'
              }
            ]
          },
          {
            title: 'Legal stuff',
            items: [
              {
                label: 'End User License Agreement (EULA)',
                to: '/docs/legal/eula',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/legal/privacy-policy'
              },
              {
                label: 'Avtalevilkår',
                to: '/docs/legal/terms'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Services Status (Uptime)',
                href: 'https://status.kvipp.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DigiQuip AS, All rights reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
