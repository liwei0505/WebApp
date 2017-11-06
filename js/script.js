/**
 * Created by lw on 2017/11/5.
 */

//alert('Hello') //弹框
var words = "hello world";
console.log(words);//控制台输出

var weather = '晴天', temperature = 26;
if ((weather = '晴天') && (temperature <= 26)) {
    alert('心情不错');
} else {
    alert('心情糟糕');
}

switch (weather) {
    case '晴天':
        alert('开心');
        break;
    case '下雨':
        alert('忧郁');
        break;
    default:
        alert('糟糕');
        break;
}

var i=0;
while (i<10) {
    i++;
    if(i%2 == 0) {
        continue;
    }
    console.log(i);
}