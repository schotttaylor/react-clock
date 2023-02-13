// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---readme-mdx": () => import("/Users/schott/projects/react-clock/README.mdx" /* webpackChunkName: "component---readme-mdx" */),
  "component---src-index-mdx": () => import("/Users/schott/projects/react-clock/src/index.mdx" /* webpackChunkName: "component---src-index-mdx" */),
  "component---src-components-numbers-numbers-mdx": () => import("/Users/schott/projects/react-clock/src/components/numbers/numbers.mdx" /* webpackChunkName: "component---src-components-numbers-numbers-mdx" */),
  "component---cache-dev-404-page-js": () => import("/Users/schott/projects/react-clock/.docz/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/schott/projects/react-clock/.docz/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

