<%--
  Created by IntelliJ IDEA.
  User: SongLiuxin
  Date: 2017/9/7
  Time: 13:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html>
<head>
    <title><sitemesh:write property='title' /></title>
    <!-- start: META -->
    <meta charset="utf-8" />
    <!--[if IE]-->
    <meta http-equiv='X-UA-Compatible' content="IE=edge,IE=9,IE=8,chrome=1" />
    <!-- [endif]-->
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta content="" name="description" />
    <meta content="" name="author" />
    <base href="<%=basePath%>">
    <!-- end: META -->
    <!-- start: MAIN CSS -->
    <link rel="stylesheet"
          href="assets/plugins/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet"
          href="assets/plugins/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/fonts/style.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/main-responsive.css">
    <link rel="stylesheet" href="assets/plugins/iCheck/skins/all.css">
    <link rel="stylesheet"
          href="assets/plugins/bootstrap-paginator/css/bootstrap-responsive.min.css">
    <link rel="stylesheet"
          href="assets/plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css">
    <link rel="stylesheet"
          href="assets/plugins/perfect-scrollbar/src/perfect-scrollbar.css">
    <link rel="stylesheet" href="assets/css/theme_light.css" type="text/css"
          id="skin_color">
    <link rel="stylesheet" href="assets/css/print.css" type="text/css"
          media="print" />
    <!--  [if IE 7]-->
    <link rel="stylesheet"
          href="assets/plugins/font-awesome/css/font-awesome-ie7.min.css">
    <!-- [endif]-->
    <!-- end: MAIN CSS -->
    <!-- start: CSS REQUIRED FOR THIS PAGE ONLY -->
    <link rel="stylesheet"
          href="assets/plugins/fullcalendar/fullcalendar/fullcalendar.css">
    <!-- end: CSS REQUIRED FOR THIS PAGE ONLY -->
    <link rel="shortcut icon" href="favicon.ico" />

    <!-- start: MAIN JAVASCRIPTS -->
    <!--  [if lt IE 9]>-->
    <script src="assets/plugins/respond.min.js"></script>
    <script src="assets/plugins/excanvas.min.js"></script>
    <script type="text/javascript" src="assets/js/jquery-1.7.2.min.js"></script>
    <!--  [endif]-->
    <!--[if gte IE 9]><!-->

    <script type="text/javascript" src="assets/js/jquery-1.7.2.min.js"></script>
    <!--<![endif]-->
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>-->
    <script src="assets/plugins/jquery-ui/jquery-ui-1.10.2.custom.min.js"></script>
    <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script
            src="assets/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"></script>
    <script src="assets/plugins/blockUI/jquery.blockUI.js"></script>
    <script src="assets/plugins/iCheck/jquery.icheck.min.js"></script>
    <script src="assets/plugins/perfect-scrollbar/src/jquery.mousewheel.js"></script>
    <script src="assets/plugins/perfect-scrollbar/src/perfect-scrollbar.js"></script>
    <script src="assets/plugins/less/less-1.5.0.min.js"></script>
    <script src="assets/plugins/jquery-cookie/jquery.cookie.js"></script>
    <script
            src="assets/plugins/bootstrap-colorpalette/js/bootstrap-colorpalette.js"></script>
    <script src="assets/js/main.js"></script>
    <!-- end: MAIN JAVASCRIPTS -->
    <!-- start: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
    <script src="assets/plugins/flot/jquery.flot.js"></script>
    <script src="assets/plugins/flot/jquery.flot.pie.js"></script>
    <script src="assets/plugins/flot/jquery.flot.resize.min.js"></script>
    <script src="assets/plugins/jquery.sparkline/jquery.sparkline.js"></script>
    <script
            src="assets/plugins/jquery-easy-pie-chart/jquery.easy-pie-chart.js"></script>
    <script
            src="assets/plugins/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js"></script>
    <script src="assets/plugins/fullcalendar/fullcalendar/fullcalendar.js"></script>
    <script src="assets/js/index.js"></script>
    <!-- end: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
    <!--start:vue.js-->
    <script src="assets/js/vue.js"></script>
    <script src="assets/js/vue.min.js"></script>
    <!--end:vue.js-->
    <script>
        jQuery(document).ready(function() {
            Main.init();
        });
    </script>
    <sitemesh:write property='head' />
</head>
<body>
<!-- start: HEADER -->
<div class="navbar navbar-inverse navbar-fixed-top">
    <!-- start: TOP NAVIGATION CONTAINER -->
    <div class="container">
        <div class="navbar-header">
            <!-- start: RESPONSIVE MENU TOGGLER -->
            <button data-target=".navbar-collapse" data-toggle="collapse"
                    class="navbar-toggle" type="button">
                <span class="clip-list-2"></span>
            </button>
            <!-- end: RESPONSIVE MENU TOGGLER -->
            <!-- start: LOGO -->
            <a class="navbar-brand"
               href="./${sessionScope.pathCode}/homePage.do"> Maven多模块学习 </a>
            <!-- end: LOGO -->
        </div>
        <div class="navbar-tools">
            <!-- start: TOP NAVIGATION MENU -->
            <ul class="nav navbar-right">
                <!-- start: USER DROPDOWN -->
                <li class="dropdown current-user"><a data-toggle="dropdown"
                                                     data-hover="dropdown" class="dropdown-toggle"
                                                     data-close-others="true" href="#"><i class="clip-user-3 "></i>
                    <span class="username">管理员</span> <i class="clip-chevron-down"></i>
                </a>
                    <ul class="dropdown-menu">
                        <li><a href="./logout.do"> <i class="clip-calendar"></i>
                            &nbsp;退出
                        </a></li>
                    </ul></li>
                <!-- end: USER DROPDOWN -->
            </ul>
            <!-- end: TOP NAVIGATION MENU -->
        </div>
    </div>
    <!-- end: TOP NAVIGATION CONTAINER -->
</div>
<!-- end: HEADER -->
<!-- start: MAIN CONTAINER -->
<div class="main-container">
    <div class="navbar-content">
        <!-- start: SIDEBAR -->
        <div class="main-navigation navbar-collapse collapse">
            <!-- start: MAIN MENU TOGGLER BUTTON -->
            <div class="navigation-toggler">
                <i class="clip-chevron-left"></i> <i class="clip-chevron-right"></i>
            </div>
            <!-- end: MAIN MENU TOGGLER BUTTON -->
            <!-- start: MAIN NAVIGATION MENU -->
            <ul class="main-navigation-menu">

                <li id="index" class="active open"><a
                        href="./student/home.do"><i
                        class="clip-home-3"></i> <span class="title">首页</span><span
                        class="selected"></span> </a></li>


                <li id="studentInfo"><a
                        href=".//student/studentInfo.do"> <i
                        class="clip-cogs"></i> <span class="title">学生信息</span> <span
                        class="selected"></span>
                </a></li>
            </ul>
            <!-- end: MAIN NAVIGATION MENU -->
        </div>
        <!-- end: SIDEBAR -->
    </div>
    <!-- start: PAGE -->
    <div class="main-content">
        <div class="container">
            <sitemesh:write property='body' />
        </div>
    </div>
    <!-- end: PAGE -->
</div>
<!-- end: MAIN CONTAINER -->
<!-- start: FOOTER -->
<div class="footer clearfix">
    <div class="footer-inner">2017 &copy; Maven多模块学习.</div>
    <div class="footer-items">
        <span class="go-top"><i class="clip-chevron-up"></i> </span>
    </div>
</div>
<!-- end: FOOTER -->
<div id="event-management" class="modal fade" tabindex="-1"
     data-width="760" style="display: none;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true">&times;</button>
                <h4 class="modal-title">Event Management</h4>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer">
                <button type="button" data-dismiss="modal"
                        class="btn btn-light-grey">Close</button>
                <button type="button"
                        class="btn btn-danger remove-event no-display">
                    <i class='fa fa-trash-o'></i> Delete Event
                </button>
                <button type='submit' class='btn btn-success save-event'>
                    <i class='fa fa-check'></i> Save
                </button>
            </div>
        </div>
    </div>
</div>
<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    模态框（Modal）标题
                </h4>
            </div>
            <div class="modal-body"id="modal-body">
                在这里添加一些文本
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                </button>
                <button id="bt1" type="button" class="btn btn-primary">
                    确定
                </button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
<script type="text/javascript">
    var level1menuId = '${menuSelected1}';
    var level2menuId = '${menuSelected1}';
    $(".open").each(function() {
        $(this).removeClass('active open');
    });

    $('#' + level1menuId).click();
    $('#' + level1menuId).addClass('active open');
</script>

</body>
</html>
