//获取当前屏幕宽度，根据屏幕宽度动态设置1rem的大小
function setRem() {
    //获取当前屏幕宽度
    var w = window.innerWidth;
    if (w > 750) {
        w = 750;
    }


    console.log(w);
    //设置1rem大小， html的fontSize属性
    document.documentElement.style.fontSize = w / 10 + 'px';    
    // console.log( w / 10 + 'px');
    
}

setRem();
// 动态监听屏幕尺寸变化，实时设置rem大小
// window.onresize = function () {
//     setRem();
// }

window.onresize = setRem;