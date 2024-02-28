// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const linkHtml =  ' <span> <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 6H12M12 6L7.2 1M12 6L7.2 11" stroke="#E96847"></path></svg> </span> ';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DigiQuip - Utstyrsspesifikk opplæring og kompetansedokumentasjon',
  tagline: 'Våre løsninger legger til rette for utstyrsspesifikk opplæring på både eget og innleid utstyr, og gir oversikt over dokumentert og sertifisert kompetanse.',
  favicon: 'img/dq.ico',

  // Set the production url of your site here
  url: 'https://digiquip.github.io',
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
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 6,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/digiquip-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true,
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
            label: 'Solutions',
            position: 'left',
            items: [
              {
                // html: 'Competence' + linkHtml,
                label: 'Competence',
                // type: 'docSidebar',
                sidebarid: 'tutorialSidebar',
                to:'/competence',
              }, 
              {
                // html: 'Work equipment' + linkHtml,
                label: 'Workequipment',
                // type: 'docSidebar',
                sidebarid: 'tutorialSidebar',
                to: '/workequipment'
              },
              {
                // html: 'Model register' + linkHtml,
                label: 'Modellibrary',
                // type: 'docSidebar',
                sidebarid: 'tutorialSidebar',
                to:'/modellibrary',
              },
              {
                //  html: 'Expert control' + linkHtml,
                label: 'Expertcontrol',
                // type: 'docSidebar',
                sidebarid: 'tutorialSidebar',
                to:'/expertcontrol',
              },
            ]
          },
          {
            to: '/about',
            label: 'About us',
            position: 'left',
            sidebarid: 'tutorialSidebar',
          },
          // {
          //  to: '/price',
          //  label: 'Pricing',
          //  position: 'left',
          //  sidebarid: 'tutorialSidebar',
          //},
          {
            type: 'localeDropdown',
            position: 'right',
            sidebarid: 'tutorialSidebar',
          },
          //{
          //  to: '/blog',
          //  html: '<span class=btn_wrapper><span class=btn_text>Contact us</span> <span class=btn_text>Contact us</span> </span> ',
          //  position: 'right',
          //  className:'white-btn btn',
          //  sidebarid: 'tutorialSidebar',
          //},
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
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
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
                href: 'https://uptime.statuscake.com/?TestID=f9dgQKO3Az',
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
