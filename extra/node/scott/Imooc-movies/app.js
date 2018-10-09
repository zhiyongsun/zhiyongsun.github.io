/**
 *author zhiyong
 *date  2016/10/30
 */
var express = require('express');
var path = require('path')
var port = process.env.PORT || 3000;
var app = express();

/*设置 views 根目录*/
app.set('views', './views/pages')
/*设置 view engine*/
app.set('view engine', 'jade')
app.use(express.bodyParser())
app.use(express.static(path.join(_dirname, 'bower_components')));
app.listen(port)

console.log('Imooc-movies started on port ' + port);

/*路由*/

//inde page
app.get('/', function (req,res) {
    res.render('index', {
        title:'imooc 首页'
    })
})

//detail page
app.get('/detail/:id', function (req,res) {
    res.render('detail', {
        title:'imooc 详情页'
    })
})

//admin page
app.get('/admin/movie', function (req,res) {
    res.render('admin', {
        title:'imooc 后台录入页面'
    })
})

//list page
app.get('/admin/list', function (req,res) {
    res.render('list', {
        title:'imooc 列表页'
    })
})
