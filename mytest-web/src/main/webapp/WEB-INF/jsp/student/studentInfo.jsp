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
    <link rel="stylesheet" href="../../../assets/plugins/photoSwiper/default-skin/default-skin.css">
    <link rel="stylesheet" href="../../../assets/plugins/photoSwiper/photoswipe.css">
    <script src="../../../assets/plugins/photoSwiper/photoswipe.min.js"></script>
    <script src="../../../assets/plugins/photoSwiper/photoswipe-ui-default.min.js"></script>

    <%--<style>--%>
        <%--img {     transform: scale(1);     transition: all ease 0.5s; } img.scale {     transform: scale(2);position: relative;z-index: 100; }--%>
    <%--</style>--%>
</head>
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
                        <th width="5%"><small>学生ID</small></th>
                        <th width="10%"><small>照片</small></th>
                        <th width="15%"><small>姓名</small></th>
                        <th width="15%"><small>性别</small></th>
                        <th width="50%"><small>地址</small></th>
                    </tr>
                    </thead>
                    <tbody id="tbody">
                    <tr v-for="(studentInfo,index) in studentInfos">
                        <td>{{index+1}}</td>
                        <td>{{studentInfo.id}}</td>
                        <td><img v-bind:src="studentInfo.photo" class="stuPic" style="width: 150px"></td>
                        <%--<td><img :class="{scale:imgIstrue[index]}"  v-bind:src="studentInfo.photo" style="width: 150px" @click="imgScale(index)"></td>--%>
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

<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <!-- Background of PhotoSwipe.
        It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>
    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

        <!-- Container that holds slides.
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

                <!--  Controls are self-explanatory. Order can be changed. -->

                <div class="pswp__counter"></div>

                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                <button class="pswp__button pswp__button--share" title="Share"></button>

                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                <!-- element will get class pswp__preloader--active when preloader is running -->
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                        <div class="pswp__preloader__cut">
                            <div class="pswp__preloader__donut"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>

        </div>

    </div>
</div>
</body>
</html>
