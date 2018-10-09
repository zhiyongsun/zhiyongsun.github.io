//amd写法,依赖哪个,需要在数组里面注明,在同一个数组里面,多个加载项,异步加载,加载顺序不定
define(['mui'],function (){

　　　　var add = function (x,y){

　　　　　　return x+y;

　　　　};

　　　　return {

　　　　　　add: add
　　　　};

　　});