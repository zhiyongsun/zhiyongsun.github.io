(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return g}),a.d(e,"pageQuery",function(){return m});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(159),c=a.n(s),l=a(162),u=a(191),p=a(158),d=a.n(p),g=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.pageContext.tag,e=this.props.data.allMarkdownRemark.edges;return i.a.createElement(l.a,null,i.a.createElement("div",{className:"tag-container"},i.a.createElement(c.a,{title:'Posts tagged as "'+t+'" | '+d.a.siteTitle}),i.a.createElement(u.a,{postEdges:e})))},e}(i.a.Component),m="3824571933"},158:function(t,e){t.exports={siteTitle:"孙志勇的个人网站",siteTitleShort:"孙志勇的个人网站",siteTitleAlt:"孙志勇的个人网站",siteLogo:"/logos/logo-1024.jpg",siteUrl:"www.sunzhiyong.cn",pathPrefix:"/gatsby-advanced-starter",siteDescription:"孙志勇的个人网站",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"孙志勇",userTwitter:"",userLocation:"Shanghai, China",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"前端开发",userLinks:[{label:"GitHub",url:"https://github.com/Vagr9K/gatsby-advanced-starter",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/Vagr9K",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:vagr9k@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2018. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"}},162:function(t,e,a){"use strict";a.d(e,"a",function(){return p});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(159),c=a.n(s),l=a(158),u=a.n(l),p=(a(163),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children;return i.a.createElement("div",{className:"container"},i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:u.a.siteDescription})),t)},e}(i.a.Component))},163:function(t,e,a){},191:function(t,e,a){"use strict";a(57),a(83),a(84);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(43),c=a(192).getDate,l=function(t){function e(){return t.apply(this,arguments)||this}r()(e,t);var a=e.prototype;return a.getPostList=function(){var t=[];return this.props.postEdges.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:c(e.node.fields.date),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t},a.render=function(){var t=this.getPostList();return i.a.createElement("div",null,t.map(function(t){return i.a.createElement("div",null,t.date,"：",i.a.createElement(s.Link,{to:t.path,key:t.title},t.title))}))},e}(i.a.Component);e.a=l},192:function(t,e){t.exports={getDate:function(t){var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1;n<10&&(n="0"+n);var r=e.getDate();return r<10&&(r="0"+r),a+"."+n+"."+r}}}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-39b417228a8869e3067a.js.map