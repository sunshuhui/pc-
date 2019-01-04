// if (window.addEventListener) {
//     //DOMContentLoaded时间内：等待dom元素加载完成，就立即触发，触发时机比onload早的多
//     window.addEventListener('DOMContentLoaded', main)
// } else {
//     //onload事件等待所有资源加载完成才会调用
//     window.onload = main;
// }
//等待页面加载（所有资源  图片、音、视频等资源）完成，才会调用此函数
window.onload = function (){
    //li
    var headerLisNodes = document.querySelectorAll('.nav li');
    //箭头
    var arrowNode = document.querySelector('.arrow');
    //黑色字体
    var headerDownNodes = document.querySelectorAll('.down');

    // 初始化时小圆点的位置
    // li距离屏幕左边的距离 + li自己宽度的一半 - 三角形自己宽度的一半；
    arrowNode.style.left = headerLisNodes[0].getBoundingClientRect().left + headerLisNodes[0].offsetWidth / 2
        - arrowNode.offsetWidth / 2 + 'px';
    headerDownNodes[0].style.width = '100%';

    //获取所有li
    for (var i = 0; i < headerLisNodes.length; i++) {
        headerLisNodes[i].index=i;
        headerLisNodes[i].onclick=function () {
          //清除所有的蓝色
            for (var j = 0; j <headerDownNodes.length; j++) {
                headerDownNodes[j].style.width='';
            }
            //点那个li，那个li下面的黑色显示
            headerDownNodes[this.index].style.width = '100%';

            //让小箭头去当前点击的li的下面
            arrowNode.style.left = this.getBoundingClientRect().left +this.offsetWidth / 2
                - arrowNode.offsetWidth / 2 + 'px';


        }
    }
}