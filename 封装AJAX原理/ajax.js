        // 请求方式 type
        // 请求地址 url
        // 传递数据 data 
        // 处理返回数据方式 callback 
        // 前端给后台传的数据 'name=zs&age=18&sen=m'
        // 由于字符串拼接容易出错，找错麻烦，要求用户不传字符串，传对象，插件内部会自动将对象拼成对应字符串；
        var $ = {
            ajax: function (obj) {
                var type = obj.type || 'get'; // 默认get方式
                var url = obj.url || location.href; // 默认请求当前页面
                var callback = obj.callback; // 回调函数-负责渲染数据
                var data = this.processData(obj.data);  // 前端给后台传的数据name=zs&age=18&sex=m

                //1-创建一个XMLHttpRequest对象
                var xhr = new XMLHttpRequest();

                //2-设置请求报文
                //get请求在请求行中拼数据
                if (type == 'get') {
                    url = url + '?' + data;
                    data = null; //清空
                }
                //2-1请求行
                xhr.open(type, url);
                //2-2请求头
                if (type == 'post') {
                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
                }
                //2-3请求主体
                xhr.send(data);

                //3-监听服务器响应
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var r = xhr.responseText; //获取服务器的响应主体
                        //渲染 把数据交给callback来处理
                        // if (callback) {
                        //     callback(r);
                        // }
                        callback && callback(r);   //r 服务器返回的数据                    

                    }
                }
            },

            //处理数据，将对象转成 name=zs&age=18
            processData: function (data) {
                var str = '';
                if (data) {
                    for(var key in data) {
                        str += key + '=' + data[key] + '&';
                    }                  
                    //  substr(起始索引， 截几个);
                    str = str.substr(0, str.length-1);
                    // console.log(str);                    
                }
                return str;
            }
        }