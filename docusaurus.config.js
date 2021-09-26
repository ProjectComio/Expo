const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Comio Expo',
  tagline: 'Blogposts & tutorials that aren\'t boring!',
  url: 'https://expo.comio.cf',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ProjectComio', 
  projectName: 'expo', 
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ProjectComio/expo/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ProjectComio/expo/edit/main/',
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
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Comio',
        hideOnScroll: true,
        logo: {
          alt: 'Comio Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://comio.cf/',
            label: 'Home',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Home',
                href: 'https://comio.cf',
              },
              {
                label: 'Discord',
                href: 'https://comio.cf/support',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Newsroom',
                href: 'https://comio.cf/news',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy policy',
                href: 'https://comio.cf/privacy',
              },
              {
                label: 'Terms of service',
                href: 'https://comio.cf/terms',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Comio, LorrenBurg.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      googleAnalytics: {
        trackingID: 'G-V91TVRPX41',
        anonymizeIP: true, 
      },
    }),
    plugins: [
       [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          highlightSearchTermsOnTargetPage:true
        },
      ],
    ],
});
