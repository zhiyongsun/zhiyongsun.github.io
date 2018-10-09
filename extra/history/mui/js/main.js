console.log("加载require成功！");　　
require.config({
	//配置基本的URL地址
	baseUrl: "js",
	paths: {
		"mui": "mui",
		"math": "amd/math",
		"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
		"underscore": "underscore.min",
		"backbone": "backbone.min"
	},
	/*加载非amd规范的js*/
	/*，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。*/
	　shim: {

		//一般写法　　　　　　
		'underscore': {　　　　　　　　
			exports: '_'　　　　　　
		},
		//含有依赖的写法	
		'backbone': {　　　　　　　　
			deps: ['underscore', 'jquery'],
			xports: 'Backbone'　　　　　　
		},
		/*jQuery的插件可以这样定义：*/
		'jquery.scroll': {

			　　　　　　
			deps: ['jquery'],

			　　　　　　exports: 'jQuery.fn.scroll'

			　　　　
		}　　　　
	}
});　

require(['mui'], function($) {
	alert("mui");
});

//amd 写法
require(["math"], function(math) {
	alert(math.add(1, 2))
		//依赖mui.js
	var array = [1, 2, 3]
	mui.each(array, function(index, item) {
		console.log(item * item);
	})
})

//非 amd

/*require.js插件*/
　 require(['domready!'], function(doc) {
	console.log("domready")　　　　 // called once the DOM is ready

	　　
});