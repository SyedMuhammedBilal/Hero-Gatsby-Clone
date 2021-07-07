const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/vtech/Desktop/Hero-Gatsby-Clone/.cache/dev-404-page.js"))),
  "component---src-pages-aboutus-js": hot(preferDefault(require("/Users/vtech/Desktop/Hero-Gatsby-Clone/src/pages/aboutus.js"))),
  "component---src-pages-blog-list-js": hot(preferDefault(require("/Users/vtech/Desktop/Hero-Gatsby-Clone/src/pages/blog-list.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/vtech/Desktop/Hero-Gatsby-Clone/src/pages/index.js"))),
  "component---src-pages-news-js": hot(preferDefault(require("/Users/vtech/Desktop/Hero-Gatsby-Clone/src/pages/news.js"))),
  "component---src-template-blog-post-js": hot(preferDefault(require("/Users/vtech/Desktop/Hero-Gatsby-Clone/src/template/blog-post.js")))
}

