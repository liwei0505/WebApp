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

//字符串转平台通用unicode编码
function trans() {
    var enc = "人民币";
    //转码
    var unenc = escape(enc);
    //解码
    unescape(unenc);

}

//类型转换
function typeTrans() {
    var age = '12.987';
    var str = '人民币';
    age = parseInt(age); //字符串前缀不分的数字分析成整形，小数点直接舍弃，不四舍五入，前缀不是数字为NaN
    parseFloat(age); //前缀分析成浮点数

    //isNaN 判断某个变量为非数字：正无穷大、负无穷大、NaN
    if (isNaN(str)){

    }
    isFinite(age) //判断是否有限（无限大）

}
/*
eval() //运行一段js代码，接收一段js代码时使用
*/

/*****对象********/
var stu1 = {name: 'xiaoming', age:22, number:'002'};
console.log(stu1['name']+stu1.name);
//遍历属性
for(per in stu1){
    console.log(stu1[per]); //不能用点，只能用【】取
}

delete stu1.number; //删除属性

