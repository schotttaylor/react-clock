const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---readme-mdx": hot(preferDefault(require("/Users/schott/projects/react-clock/README.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("/Users/schott/projects/react-clock/src/index.mdx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/schott/projects/react-clock/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/schott/projects/react-clock/.docz/src/pages/404.js")))
}

