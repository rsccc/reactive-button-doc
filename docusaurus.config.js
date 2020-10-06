module.exports = {
  title: 'Reactive Button',
  tagline: 'A React Button component that thinks like React.',
  url: 'https://arifszn.github.io',
  baseUrl: '/reactive-button/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo/favicon.ico',
  organizationName: 'arifszn',
  projectName: 'reactive-button',
  scripts: [
  ],
  themeConfig: {
    image: 'img/logo/logo.png',
    metadatas: [{name: 'Reactive Button', content: 'A React Button component that thinks like React.'}],
    sidebarCollapsible: false,
    prism: {
      theme: require('prism-react-renderer/themes/palenight'),
      darkTheme: require('prism-react-renderer/themes/palenight'),
    },
    announcementBar: {
      id: 'support_us_1', // Any value that will identify this message.
      content:
        '⭐️ If you like Reactive Button, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/arifszn/reactive-button">GitHub</a>! ⭐️',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    googleAnalytics: {
      trackingID: 'UA-138314953-4',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '\u2600',
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'Reactive Button',
      hideOnScroll: false,
      logo: {
        alt: 'Logo',
        src: 'img/logo/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/arifszn/reactive-button',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      /* logo: {
        alt: 'Reactive Button',
        src: 'img/logo/logo.png',
        href: 'https://arifszn.github.io',
      }, */
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://arifszn.github.io" target="_blank">Ariful Alam</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/arifszn/reactive-button-doc/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    require.resolve('docusaurus-lunr-search')
  ],
};