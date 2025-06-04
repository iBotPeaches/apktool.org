import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Apktool',
  tagline: 'A tool for reverse engineering Android apk files',
  favicon: 'img/favicon.ico',
  url: 'https://apktool.org',
  baseUrl: '/',
  projectName: 'Apktool',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  future: {
    v4: true,
    experimental_faster: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/install',
            from: '/install/',
          },
          {
            to: '/docs/build',
            from: '/build/',
          },
          {
            to: '/wiki/the-basics/intro',
            from: '/documentation/',
          },
          {
            to: '/blog/googlecode-shutdown',
            from: '/googlecode/',
          },
          {
            to: '/blog',
            from: '/changes/',
          },
          {
            to: '/wiki/meta/contributing',
            from: '/contribute/',
          },
          {
            to: '/wiki/in-depth/resource-modes',
            from: '/docs/in-depth/resource-modes',
          },
          {
            to: '/wiki/the-basics/intro',
            from: '/docs/the-basics/intro',
          },
          {
            to: '/wiki/meta/contributing',
            from: '/docs/meta/contributing',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wiki',
        path: 'wiki',
        routeBasePath: 'wiki',
        sidebarPath: undefined,
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: undefined,
          versions: {
            current: {
              label: '3.x',
              path: '3.x',
            },
          },
        },
        blog: {
          showReadingTime: false,
          postsPerPage: 2,
          blogSidebarCount: 'ALL',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
      image: 'img/social-card.png',
      navbar: {
        title: 'Apktool',
        logo: {
          alt: 'Apktool Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
            docsPluginId: 'default',
          },
          {
            type: 'docSidebar',
            sidebarId: 'defaultSidebar',
            position: 'left',
            label: 'Wiki',
            docsPluginId: 'wiki',
          },
          {to: '/docs/install', label: 'Install', position: 'left'},
          {to: '/blog', label: 'Releases', position: 'left'},
          {
            type: 'docsVersionDropdown',
            versions: ['current', '2.x'],
            position: 'right',
          },
          {
            href: 'https://bitbucket.org/iBotPeaches/apktool/downloads/apktool_2.11.1.jar',
            label: 'Download 2.11.1',
            position: 'right',
          },
          {
            href: 'https://github.com/iBotPeaches/Apktool',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'v3.x Documentation',
                to: 'docs/3.x/cli-parameters',
              },
              {
                label: 'v2.x Documentation',
                to: 'docs/cli-parameters',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/iBotPeaches/Apktool/discussions',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/apktool',
              },
              {
                label: 'IRC (Libera)',
                href: 'https://web.libera.chat/#apktool',
              },
            ],
          },
          {
            title: 'Maintainer',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/iBotPeaches',
              },
              {
                label: 'Mastodon',
                href: 'https://infosec.exchange/@iBotPeaches',
              },
              {
                label: 'Blog',
                href: 'https://connortumbleson.com/tag/apktool/',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'smali', 'bash', 'javascript'],
      },
      algolia: {
        appId: 'P3KZHU1SCW',
        apiKey: '10bf8c8c0768d8404b2bc87d75ec8c1b',
        indexName: 'apktool',
        contextualSearch: true,
        externalUrlRegex: 'apktool\\.org',
        searchParameters: {},
        searchPagePath: 'search',
      },
    } satisfies Preset.ThemeConfig,
};

export default config;
