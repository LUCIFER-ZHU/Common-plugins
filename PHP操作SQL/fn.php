<?php 
    // header('content-type:text/html;charset=utf-8');
    // 添加、删除、修改的逻辑基本只有，遂封装公共方法
    // 如何： 1-提取公共代码 2-变化部分暴露成参数
    // 参数：sql语句
    // 返回值：  成功 true 失败 false 

    define("HOST", "127.0.0.1");
    define("USER", "root");
    define("PWD", "root");
    define("DB", "z_stu");

    function my_exec($sql) {
        //1-连接数据库
        $link = mysqli_connect(HOST, USER, PWD, DB);

        //2-执行sql
        $result = mysqli_query($link, $sql);

        //判断
        if ($result) {
            echo '执行成功!';
        } else {
            echo '执行失败!';
        }

        //关闭数据连接
        mysqli_close($link);

        return $result;
    }



    //封装执行查询语法方法
    //参数：sql
    //返回值： 失败 false   成功： 二维数组
    function my_query($sql) {
        //1-连接数据
        $link = mysqli_connect(HOST, USER, PWD, DB);
        //2-执行
        $result = mysqli_query($link, $sql);
        //3-判断是否查询到数据
        //获取结果集行数
        $num = mysqli_num_rows($result);

        if (!$result || $num === 0) {
            return false;
        }

        //获取数据
        $data = []; //准备容器
        //遍历获取全部数据
        for($i = 0; $i < $num; $i++) {
            $data[] = mysqli_fetch_assoc($result);
        }
         //关闭数据库
        mysqli_close($link);

        return $data;//以二维数组的形式 返回数据       

    }

?>