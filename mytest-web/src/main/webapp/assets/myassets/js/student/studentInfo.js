/**
 * Created by SongLiuxin on 2017/9/7.
 */
     //创建一个新的 Vue 实例
var app=new Vue({
    el: '#app',
    //数据对象
    data: {
        studentInfos : []
    },
    //加载时自动执行
    mounted() {
        this.getData(0)
    },
    //方法写这里
    methods: {
        getData: function (id) {
            $.ajax({
                type: "POST",
                url: "/studentApi/findAllStudentInfo.do",
                data: {id:id},
                dataType: "json",
                success: function (data) {
                 if(data.success)
                 {
                     app.studentInfos=data.result;
                 }
                 else
                 {
                     //调用Bootstrop中的模态框
                     $('#myModal').modal('show');
                     $("#myModalLabel").html("糟糕");
                     $("#modal-body").html("数据获取异常"+data.message);
                     $("#bt1").html("确定");
                     $("#bt1").attr("data-dismiss","modal");
                 }

                }
            });
        }
    },
    //过滤器
    filters: {
        studentSex:function(sex) {
            var stuSex="女";
            if(sex){
                stuSex="男";
            }
            return stuSex;
        }
    }
});