<%--
  Created by IntelliJ IDEA.
  User: SongLiuxin
  Date: 2017/9/7
  Time: 13:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<html>
<head>
    <title>学生信息</title>

</head>
<body onload="showFunction1(null,null)">
<!-- start: PAGE HEADER -->
<div class="row">
    <div class="col-sm-12">
        <!-- start: PAGE TITLE & BREADCRUMB -->
        <ol class="breadcrumb">
            <li><i class="clip-home-3"></i> <a
                    href="./${sessionScope.pathCode}/home.do"> 首页 </a>
            </li>

        </ol>
        <div class="page-header">
            <h3>学生信息</h3>
        </div>
        <!-- end: PAGE TITLE & BREADCRUMB -->
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <!-- start: TABLE WITH IMAGES PANEL -->
        <div class="panel-body">
            <div class="row"></div>
            <div class="panel-body" id="app">
                <table class="table table-striped table-bordered table-hover"style="TABLE-LAYOUT:fixed;WORD-BREAK:break-all">
                    <thead>
                    <tr>
                        <th width="5%"><small>序号</small></th>
                        <th width="15%"><small>学生ID</small></th>
                        <th width="15%"><small>姓名</small></th>
                        <th width="15%"><small>性别</small></th>
                        <th width="50%"><small>地址</small></th>
                    </tr>
                    </thead>
                    <tbody id="tbody">
                    <tr v-for="(studentInfo,index) in studentInfos">
                        <td>{{index+1}}</td>
                        <td>{{studentInfo.id}}</td>
                        <td>{{studentInfo.name}}</td>
                        <td>{{studentInfo.sex | studentSex }}</td>
                        <td>{{studentInfo.address}}</td>
                    </tr>

                    </tbody>
                </table>
            </div>

        </div>
    </div>
</div>
<script src="../../../assets/myassets/js/student/studentInfo.js"></script>
</body>
</html>
