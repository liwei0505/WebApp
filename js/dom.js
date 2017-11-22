/**
 * Created by lw on 2017/11/7.
 */

// 文档对象模型DOM(document object model)

//查找节点
document.getElementById() //根据id查找
document.getElementsByTagName()//通过标签查找
document.getElementsByName()//通过name属性
/*
* 早期 getElementsByName只用在表单中，后来扩展到其他元素div
* 但ie没有变，处于兼容，只能对表单用byname
* */


//文档资源处理完触发window load事件，保证代码正常执行在load后添加
window.onload = function () {
    var btn = document.querySelector('.btn');
    // btn.onclick = function () {
    //     console.log("dom : button click");
    // };
    // btn.onmousemove = function () {
    //     console.log("dom : move");
    // };
    // btn.onmouseover = function () {
    //     console.log("dom : over");
    // };
    //给btn添加事件监听器 3个参数：事件名称，响应事件函数，事件的捕获(决定传递方向)
    //参数1：不能自定义否则不被识别，如：click onclick等可识别
    //参数3：false事件按照冒泡方式传递，由下到上，由里到外
    //      true事件捕获的方式传递,从外到内
    function showMessage(event) {
        console.log(event);
    }
    btn.addEventListener('click', showMessage, false);

    //在共同的容器添加监听
    var bookList = document.querySelector('.book-list');
    function showBookList(e) {
        console.log("list click");
        // console.log(e);//e.target.alt
        event.stopPropagation();//停止事件向下传递
        // event.preventDefault();//去掉事件默认行为如跳转浏览器
    }
    bookList.addEventListener('click', showBookList, true);

    var imgElement = document.getElementById('image');
    function imgElementClick() {
        console.log("click picture");
    }
    imgElement.addEventListener('click', imgElementClick, true);

};

