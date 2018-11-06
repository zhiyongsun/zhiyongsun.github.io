// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-jsx": preferDefault(require("/Users/zhiyong/myProjects/zhiyongsun.github.io/src/templates/post.jsx")),
  "component---src-templates-tag-jsx": preferDefault(require("/Users/zhiyong/myProjects/zhiyongsun.github.io/src/templates/tag.jsx")),
  "component---src-templates-category-jsx": preferDefault(require("/Users/zhiyong/myProjects/zhiyongsun.github.io/src/templates/category.jsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/zhiyong/myProjects/zhiyongsun.github.io/.cache/dev-404-page.js")),
  "component---src-pages-about-jsx": preferDefault(require("/Users/zhiyong/myProjects/zhiyongsun.github.io/src/pages/about.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/zhiyong/myProjects/zhiyongsun.github.io/src/pages/index.jsx"))
}

