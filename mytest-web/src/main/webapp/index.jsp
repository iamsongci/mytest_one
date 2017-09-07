<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>开发中......</title>
    <script type="text/javascript" src="./assets/js/jquery-1.7.2.js"></script>
</head>
<body>
<h2>Hello World!</h2>
<div>
    <h1><a href="/student/home.do">点我查看通过Vue获取学生信息</a></h1>
    <h2>用异步请求获取学生信息</h2><br>
    请输入学生学号，如果是0则查询所有学生信息
    <input id="studentid"type="text"><button onclick="findStudentInfo()">点我查询</button>
    <div id="showMessageDiv"></div>
</div>
<script type="application/javascript">
    function findStudentInfo() {
        var studentid=$("#studentid").val();
//        alert("获取到的studentid：" + studentid);
        $.ajax({
            type:"POST",
            url:"/studentApi/findAllStudentInfo.do",
            data:{id:studentid},
            dataType:"json",
            success : function (data) {
                if(data.success){
                    $("#showMessageDiv").empty();
                    $("#showMessageDiv").append("<table id='table1'></table>");
                    $("#table1").append("<tr><td>学生ID</td><td>姓名</td><td>性别</td><td>地址</td></tr>");
                    $.each(data.result,function (i,result) {
                        var sex="女"
                        if (result.sex){sex="男"}
                        var item="<tr><td>"+result.id+"</td><td>"+result.name+"</td><td>"+sex+"</td><td>"+result.address+"</td>";
                        $("#table1").append(item);
                    });
                }else {
                    $("#showMessageDiv").empty();
                    $("#showMessageDiv").append(data.message);
                }
            }
        });
    }
</script>
</body>
</html>
