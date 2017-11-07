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
// 对象中属性可以是任意类型
var beyond = {};
beyond.formedIn = '1983';
beyond['foundedIn'] = '香港';
console.log(beyond);

var beyond2 = {formedIn: '1983', foundedIn: '英国', artist:['黄家驹', '黄家强']};
//访问
console.log(beyond2.formedIn+beyond2['foundedIn']+beyond2.artist[1]);

//给对象添加方法
beyond2.showArtist = function() {
    for(var i=0; i<beyond2.artist.length; i++) {
        document.writeln(this.artist[i]);
    }
};
//调用对象方法
beyond2.showArtist();
//console.log(beyond2);

//遍历对象属性
var property;
for(property in beyond2) {
    if(typeof(beyond2[property]) != "function"){
        console.log('beyond2.property:'+beyond2[property]);
    }
}
