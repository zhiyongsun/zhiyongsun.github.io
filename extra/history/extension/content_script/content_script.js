var currentHref = location.href;
if (currentHref.indexOf('product.html') != -1) {
    console.log(true)
}

//判断是哪个页面
var y1 = currentHref.indexOf('1001.html') != -1,
    y2 = currentHref.indexOf('1002.html') != -1,
    y3 = currentHref.indexOf('1003.html') != -1;

if (y1 || y2 || y3) {
}
var time = Math.random() * 100,
    getTime = Math.random() * 100;

//卖出
var sellConfig = {
        root: '#gd_buy_list li dl',
        tradeInput: '#trade_volume input',
        tradeBtn: '#trade_btn input'
    },
    //买入
    buyConfig = {
        root: '#gd_sell_list li dl',
        tradeInput: '#trade_volume input',
        tradeBtn: '#trade_btn input'
    }

//买入3
/*if (y3) {
 bs(buyConfig);
 }*/
//卖出3 1

/*
 var myDate = new Date();
 myDate.setFullYear(2017, 3, 8);
 console.log(Number(myDate))
 */
var myDate = new Date();
myDate.setFullYear(2017, 3, 15);
// console.log(Number(myDate))
if (y3||y1) {
    main(sellConfig);
}
var timer = 0;

//方法主体
function main(config) {

    function recall() {
        setTimeout(() => {
            main(config);
        }, 0)
    }

    var sells = document.querySelectorAll(config.root);
    //有没有数据
    if (sells.length != 0) {
        [].forEach.call(sells, function (item, index) {
            var text = item.children[1].innerText;
            if (text != '-') {
                item.children[3].children[0].click();
                var target = document.querySelectorAll(config.tradeInput);
                cbb()
                function cbb() {
                    target = document.querySelectorAll(config.tradeInput);
                    if (target.length == 0) {
                        target = document.querySelectorAll(config.tradeInput);
                        setTimeout(() => {
                            cbb()
                        }, 0)
                    } else {

                        var targetText = target[0].getAttribute('placeholder');
                        var maxMount = targetText.substring(6);
                        var showMount = item.children[2].innerText;
                        var targetMount = Math.min(Number(showMount), Number(maxMount));
                        if (y3) {
                            // targetMount = parseInt(targetMount / 2) + 1;
                        }
                        var relTarget = target[0];
                        targetMount = targetMount > 2 ? 2 : 1;
                        relTarget.setAttribute('value', targetMount);
                        //购买
                        /*if (y3) {
                         for(var i =0;i<100;i++){
                         }
                         }*/
                        document.querySelectorAll(config.tradeBtn)[0].click();
                        console.log('maichu' + targetMount)
                    }
                }
            } else {
                setTimeout(function () {
                    location.href = ''
                }, time)
            }
        })
    } else {
        recall();
    }
}


if (y1 || y2 || y3) {
    refresh();
}


//刷新
function refresh() {
    setInterval(() => {
        location.href = ''
    }, 1000 * 10)
}

