function animate(element,obj,fn){
  clearInterval(element.timerid);
  element.timerid = setInterval(() => {
    var flag = true;

    for (var k in obj){
      var attr = k;
      var target = obj[k];

      var current = window.getComputedStyle(element,null)[attr];
      current = parseInt(current);

      var step = (target - current)/10;
      step = step > 0 ? Math.ceil(step) :Math.floor(step);

      currrent += step;
      element.style[attr] = current +'px';

      if(current != target){
        flag = false;
      }
    }

    if(flag){
      clearInterval(element.timerid);
      fn&&fn();
    }
  }, 30);

}