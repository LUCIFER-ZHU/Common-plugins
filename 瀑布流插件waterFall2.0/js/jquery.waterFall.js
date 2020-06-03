$.fn.waterFall = function () {
    // 每个图片在布局之前，现在找当前高度最小的列，向最小列后面进行添加
    // 1-准备数组存储每一列列高
    // 2-追加时当前图片的位置：
    //     top = 最小列列高 + 间距
    //     left = 最小列索引值 * （宽度+ 间距）
    // 3-更新当前列高， 用新列高进行后面比较

    //定义数据
    var column = [0, 0, 0, 0, 0];
    // 列宽
    var width = 230;
    // 间距
    var gap = 10;

    //获取所有items
    // var items = $('.item');
    // console.log(items);/
    //依次对每个图片进行定位
    $('.item').each(function (index, ele) {
        //1-先找高度最小的列
        var min = column[0]; //假设第一列是最小值
        var minIndex = 0; 
        //找最小列
        column.forEach(function (v, i) {
            if (v < min) {
                min = v;
                minIndex = i;  //保存最小列索引值
            }
        })

        //2-设置图片的位置
        $(ele).css({
            left: minIndex * (width + gap),
            top: min + gap
        });

        //3-更最小列列高
        column[minIndex] += $(ele).height() + gap;
    });


    //获取最大列列高， 设置给items，撑开items盒子
    var h = Math.max.apply(null, column);
    // console.log(column, h);

    // $('.items').height(h);
    // 把最大列高设置给items
    this.height(h);

}