/**
 * Created by SongLiuxin on 2017/9/7.
 */
     //创建一个新的 Vue 实例
var app=new Vue({
    el: '#app',
    //数据对象
    data: {
        studentInfos : [],
        imgIstrue:[]
    },
    //加载时自动执行
    mounted() {
        this.getData(0)
    },
    //方法写这里
    methods: {
        // imgScale:function (index) {
        //     var isTrue = app.imgIstrue[index];
        //     app.imgIstrue.forEach(function (val,row) {
        //         app.imgIstrue.splice(row,1,false)
        //     })
        //     app.imgIstrue.splice(index,1,!isTrue)
        // },
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

                     //图片放大初始化
                     setTimeout(function() {
                         photoSwiper.init($('#tbody img'))
                     },20);

                     //图片放大数组初始化
                     // for(var i =0;i<app.studentInfos.length;i++) {
                     //     app.imgIstrue[i] = false;
                     // }

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


// 初始化预览图片
var photoSwiper = {
    imgDom:null,
    init:function ($dom) {
        this.imgDom = $dom
        this.getItems()
        this.addImgIndex()
        var me = this
        this.imgDom.click(function(item) {
            me.toBigPic($(this).data('index'))
        })
    },
    addImgIndex:function() {
        var imgs = this.imgDom
        for(var i=0;i<imgs.length;i++) {
            var img = imgs[i]
            img.dataset.index = i
        }
    },
    toBigPic:function(index) {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        // build items array
        var items = this.getItems()
        // define options (if needed)
        var options = {

        };
        options.index = index;
        options.mainClass = 'pswp--minimal--dark';
        options.barsSize = {top:0,bottom:0};
        options.captionEl = false;
        options.fullscreenEl = false;
        options.shareEl = false;
        options.bgOpacity = 0.85;
        options.tapToClose = true;
        options.closeOnScroll =false;
        options.tapToToggleControls = false;
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    },
    getItems:function() {
        var items = []
        var imgs = this.imgDom
        if(imgs.length > 0) {
            for (var i = 0; i < imgs.length; i++) {
                var img = imgs[i];
                var item = {
                    src: img.src,
                    w: img.naturalWidth,
                    h: img.naturalHeight
                };
                items.push(item);
            }
        }
        return items;
    },

}