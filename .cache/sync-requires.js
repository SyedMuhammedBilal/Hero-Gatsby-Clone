
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/mani/Desktop/m/demo/.cache/dev-404-page.js")),
  "component---src-pages-aboutus-js": preferDefault(require("/home/mani/Desktop/m/demo/src/pages/aboutus.js")),
  "component---src-pages-blog-list-js": preferDefault(require("/home/mani/Desktop/m/demo/src/pages/blog-list.js")),
  "component---src-pages-index-js": preferDefault(require("/home/mani/Desktop/m/demo/src/pages/index.js")),
  "component---src-pages-news-js": preferDefault(require("/home/mani/Desktop/m/demo/src/pages/news.js"))
}

