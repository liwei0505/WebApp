/**
 * Created by lw on 2017/11/5.
 */

//alert('Hello') //弹框
var words = "hello world";
console.log(words);//控制台输出

var weather = '晴天', temperature = 26;
if ((weather = '晴天') && (temperature <= 26)) {
    alertMessage('心情不错');
} else {
    alertMessage('心情糟糕');
}

function alertMessage(message) {
    alert(message);
}

//匿名函数
var alertMessageNon = function (message) {
    alert(message);
}

switch (weather) {
    case '晴天':
        alertMessageNon('开心');
        break;
    case '下雨':
        alertMessageNon('忧郁');
        break;
    default:
        alertMessageNon('糟糕');
        break;
}

var i=0;
while (i<10) {
    i++;
    if(i%2 == 0) {
        continue;
    }
    // console.log(i);
}

//！--对象--
var beyond = {};
beyond.formedIn = '1983';
beyond['foundedIn'] = '香港';
console.log(beyond);

var beyond2 = {formedIn: '1983', foundedIn: '英国'};
//访问
console.log(beyond2.formedIn+beyond2['foundedIn']);

//17wan
