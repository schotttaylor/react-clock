const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React Clock',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/schott/projects/react-clock/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Clock',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/schott/projects/react-clock',
          templates:
            '/Users/schott/projects/react-clock/node_modules/docz-core/dist/templates',
          packageJson: '/Users/schott/projects/react-clock/package.json',
          docz: '/Users/schott/projects/react-clock/.docz',
          cache: '/Users/schott/projects/react-clock/.docz/.cache',
          app: '/Users/schott/projects/react-clock/.docz/app',
          appPublic: '/Users/schott/projects/react-clock/.docz/public',
          appNodeModules: '/Users/schott/projects/react-clock/node_modules',
          appPackageJson: '/Users/schott/projects/react-clock/package.json',
          appYarnLock:
            '/Users/schott/projects/react-clock/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/schott/projects/react-clock/node_modules/docz-core/node_modules',
          gatsbyConfig: '/Users/schott/projects/react-clock/gatsby-config.js',
          gatsbyBrowser: '/Users/schott/projects/react-clock/gatsby-browser.js',
          gatsbyNode: '/Users/schott/projects/react-clock/gatsby-node.js',
          gatsbySSR: '/Users/schott/projects/react-clock/gatsby-ssr.js',
          importsJs: '/Users/schott/projects/react-clock/.docz/app/imports.js',
          rootJs: '/Users/schott/projects/react-clock/.docz/app/root.jsx',
          indexJs: '/Users/schott/projects/react-clock/.docz/app/index.jsx',
          indexHtml: '/Users/schott/projects/react-clock/.docz/app/index.html',
          db: '/Users/schott/projects/react-clock/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
