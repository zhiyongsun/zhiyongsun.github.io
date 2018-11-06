// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/zhiyong/myProjects/zhiyongsun.github.io/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-post-jsx": preferDefault(require("/Users/zhiyong/myProjects/zhiyongsun.github.io/src/templates/post.jsx")),
  "component---src-templates-tag-jsx": preferDefault(require("/Users/zhiyong/myProjects/zhiyongsun.github.io/src/templates/tag.jsx")),
  "component---src-templates-category-jsx": preferDefault(require("/Users/zhiyong/myProjects/zhiyongsun.github.io/src/templates/category.jsx")),
  "component---src-pages-about-jsx": preferDefault(require("/Users/zhiyong/myProjects/zhiyongsun.github.io/src/pages/about.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/zhiyong/myProjects/zhiyongsun.github.io/src/pages/index.jsx"))
}

