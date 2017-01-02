/**
 * Created by Administrator on 2016/11/2.
 */
var head = document.getElementById("head");
var topNav = document.getElementById("topNav");
var topNavOpen = document.getElementById("topNavOpen");
var banner = document.getElementById("banner");
var bannerInner = document.getElementById("bannerInner");
var focusList = document.getElementById("focusList");

var left = document.getElementById("left");
var right = document.getElementById("right");
var width=utils.css(banner,"width");
~(function(){
    function fn(){
        var winW=document.documentElement.clientWidth||document.body.clientWidth;
        var tarW=winW,
            tarH=winW*0.6;
        $("#banner").css({"width":tarW,"height":tarH});
    }
    fn();
    $(window).on("resize",fn);
})();
//刷新页面
~(function () {
    var topBox = document.getElementById("topBox");
    topBox.onclick = function () {
        //window.location.reload();
        if(!utils.hasClass(document.body,"animated rotateIn")){
            utils.addClass(document.body,"animated rotateIn");
        }
        else{
            utils.removeClass(document.body,"animated rotateIn");
        }
    }
})();
//Nav事件
var topNavClose=utils.getElesByClass("topNavClose")[0];
topNavClose.onclick=topNav.onclick = function () {
    //$("#topNavOpen").toggle();
    if (topNavOpen.style.display == "block") {
        topNav.style.background = "url('images/topOpen.png')";
        //topNavOpen.style.display="none";
        $("#topNavOpen").animate({top: '-600px'}, 300);
        var timer = window.setTimeout(function () {
            $("#topNavOpen").css("display", "none")
        }, 300)
    }
    else {
        topNav.style.background = "url('images/topClose.png')";
        //topNavOpen.style.display="block";
        $("#topNavOpen").css("display", "block")
        $("#topNavOpen").animate({top: '100px'}, 300);


    }

};
//轮播图
~(function () {
    ~(function getData() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", "dataL.txt", false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                window.data = utils.jsonParse(xhr.responseText);
            }
        };
        xhr.send(null);
    })();
//console.log(data);
    ~(function bindData() {
        if (window.data) {
            var strImg = "", strLi = "";
            for (var i = 0; i < data.length; i++) {
                var curImg = data[i];
                strImg += "<div><img realSrc='" + curImg.img + "'><h2>" + curImg.h2 + "</h2><h3>" + curImg.h3 + "</h3><p>" + curImg.p + "</p><i></i></div>";
                strLi += i === 0 ? "<li class='select'></li>" : "<li></li>";
            }
            bannerInner.innerHTML = strImg;
            focusList.innerHTML = strLi;
        }
    })();
    var imgs = bannerInner.getElementsByTagName("img");
    var lis = focusList.getElementsByTagName("li");
//console.log(imgs);
    ~(function imgsLoad() {
        for (var i = 0; i < imgs.length; i++) {
            var curImg = imgs[i];
            var tempImg = new Image();
            tempImg.src = curImg.getAttribute("realSrc");
            tempImg.index = i;
            tempImg.onload = function () {
                imgs[this.index].parentNode.style.backgroundImage = "url("+this.src+")";
                if (this.index === 0) {
                    utils.css(imgs[this.index].parentNode, "zIndex", 1);
                    animate(imgs[this.index].parentNode, {opacity: 1}, 500);
                }
                utils.css(imgs[this.index], "display", "block");
            };
        }
    })();
    var timer = window.setInterval(autoMove, 5000);
    var step = 0;

    function autoMove() {
        step++;
        if (step === data.length) {
            step = 0;
        }
        setImg();
    }

    function setImg() {
        for (var i = 0; i < imgs.length; i++) {
            var curImg = imgs[i];
            if (i == step) {
                utils.css(curImg.parentNode, "zIndex", 1);
                animate(curImg.parentNode, {opacity: 1}, 500, function () {
                    var siblings = utils.siblings(this);
                    for (var i = 0; i < siblings.length; i++) {
                        utils.css(siblings[i], "opacity", 0);
                    }
                });
            } else {
                utils.css(curImg.parentNode, "zIndex", 0);
            }
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = i === step ? "select" : "";
        }
    }

    right.onclick = autoMove;
    left.onclick = function () {
        if (step === 0) {
            step = data.length;
        }
        step--;
        setImg();
    };
    ~(function bindLi() {
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
            lis[i].onclick = function () {
                step = this.index;
                setImg();
            }
        }
    })();
})();
//轮播图下面类似轮播图的
~(function () {
    var conBox1 = document.getElementById("conBox1");
    var innerBox1 = document.getElementById("innerBox1");
    var innerBox2 = utils.getElesByClass("innerBox2", innerBox1)[0];
    var minBanner = utils.getElesByClass("minBanner", innerBox2)[0];
    var inBox11 = utils.getElesByClass("inBox1")[0];
    var inBox12 = utils.getElesByClass("inBox1")[1];
    var ul = utils.getElesByClass("minBanner", innerBox2)[0];
    var lis = ul.getElementsByTagName("li");
    ~(function getData() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", "data2.txt", false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                window.Data = utils.jsonParse(xhr.responseText);
            }
        };
        xhr.send(null);
    })();
//console.log(Data);
    ~(function bindData() {
        if (window.Data) {
            var strImg1 = "", strImg2 = "";
            for (var i = 0; i < Data.length; i++) {
                var curData = Data[i];
                if (i < 2) {
                    strImg1 += "<div class='jk'><div class='jk-btn' style='background-image: url(" + curData.img + ")'></div><a href='javascript:void 0' class='innerJk'><span class='txt1'>" + curData.txt1 + "</span><span class='txt2'>" + curData.txt2 + "</span><span class='daySelf'></span></a><p><span class='span'><a href='javascript:void 0'></a><i class='i'>" + curData.span + "</i></span></p></div>";
                }
                else {
                    strImg2 += "<div class='jk'><div class='jk-btn' style='background-image: url(" + curData.img + ")'></div><a href='javascript:void 0' class='innerJk'><span class='txt1'>" + curData.txt1 + "</span><span class='txt2'>" + curData.txt2 + "</span><span class='daySelf'></span></a><p><span class='span'><a href='javascript:void 0'></a><i class='i'>" + curData.span + "</i></span></p></div>";
                }
            }
            inBox11.innerHTML = strImg1;
            inBox12.innerHTML = strImg2;
            utils.css(inBox12, "display", "block");
            animate(inBox12, {opacity: 1}, 300);
        }
    })();
    ~(function bindLi() {
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
            lis[i].onclick = function () {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className = i === this.index ? "selected" : "";
                }

                if (this.index === 0) {
                    animate(inBox11, {opacity: 1}, 500);
                    utils.css(inBox11, "display", "block");
                    utils.css(inBox12, "display", "none");
                    utils.css(inBox12, "opacity", 0);
                }
                else {
                    animate(inBox12, {opacity: 1}, 500);
                    utils.css(inBox12, "display", "block");
                    utils.css(inBox11, "display", "none");
                    utils.css(inBox11, "opacity", 0);
                }
            }

        }
    })()
    ;
})();
//点赞
var innerBox2=utils.getElesByClass("innerBox2")[0];
var innerShow=utils.getElesByClass("innerShow")[0];
var innerShow1=utils.getElesByClass("innerShow1")[0];
var i1=innerBox2.getElementsByTagName("i");
var i2=innerShow.getElementsByTagName("i");
var i3=innerShow1.getElementsByTagName("i");
var innerShow2=utils.getElesByClass("innerShow2")[0];
var innerShow3=utils.getElesByClass("innerShow3")[0];
var i4=innerShow2.getElementsByTagName("i");
var i5=innerShow3.getElementsByTagName("i");
//console.log(i1,i2,i3);
var argee=function(ele){
    for(var i=0;i<ele.length;i++){
        ele[i].onclick=function(){
            var j=parseFloat(this.innerHTML);
            j++;
            this.innerHTML=j+"人赞过";
        }
    }
};
argee(i1);
//获取新闻
~(function () {
    var newsTop=document.getElementById("newsTop");
    var newsList = document.getElementById("newsList");
    var newsText = document.getElementById("newsText");
    ~(function getData() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", "data3.txt", false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                window.data3 = utils.jsonParse(xhr.responseText);
            }
        };
        xhr.send(null);
    })();
//console.log(data3);
    ~(function bindData() {
        var str = "";
        if (window.data3) {
            for (var i = 0; i < data3.length; i++) {
                var curData = data3[i];
                if(i==0){
                    str+="<a id='newTop' href='javascript:void 0'></a><a id='newsTitle' href='javascript:void 0'>"+curData.a1+"</a>";
                }
                else {
                    str += "<div id='newsText'><ul id='newsList'><li><a href='javascript:void 0'>" + curData.a1 + "</a><span>" + curData.span + "</span></li></ul></div>";
                }
            }
            newsTop.innerHTML = str;
        }
    })();

})();
//换一批下面的展示
~(function(){
    var innerShow=utils.getElesByClass("innerShow")[0];
    var innerShow1=utils.getElesByClass("innerShow1")[0];
    ~(function getData(){
        var xhr=new XMLHttpRequest();
        xhr.open("get","data4.txt",false);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                window.data4=utils.jsonParse(xhr.responseText);
            }
        };
        xhr.send(null);
    })();
    //console.log(data4);
    ~(function bindData(){
        if(window.data4){
            var str1="",str2="";
            for(var i=0;i<data4.length;i++){
                var curData=data4[i];
                if(i<3){
                    str1+="<div class='show1'><a class='showA' href='javascript:void 0'><img src='"+curData.img+"'><div class='showClose'></div></a><p class='showText1'>"+curData.showText1+"</p><p class='showText2'>"+curData.showText2+"</p><span><a class='good' href='javascript:void 0'><i>"+curData.i+"人赞过</i></a></span><a class='in' href='javascript:void 0'>进入官网</a></div>";
                }
                else{
                    str2+="<div class='show2'><a class='showA' href='javascript:void 0'><img src='"+curData.img+"'><div class='showClose'></div></a><p class='showText1'>"+curData.showText1+"</p><p class='showText2'>"+curData.showText2+"</p><span><a class='good' href='javascript:void 0'><i>"+curData.i+"人赞过</i></a></span><a class='in' href='javascript:void 0'>进入官网</a></div>";
                }
            }
            innerShow.innerHTML=str1;
            innerShow1.innerHTML=str2;
        }
    })();
})();
argee(i2);
argee(i3);
//换一批
~(function () {
    var p = document.getElementById("showTitle");
    var a = p.getElementsByTagName("a")[0];
    var show = document.getElementById("show");
    var innerShow = utils.getElesByClass("innerShow");
    var innerShow1 = utils.getElesByClass("innerShow1");
    var show1 = utils.getElesByClass("show1");
    var show2 = utils.getElesByClass("show2");
    //console.log(innerShow, innerShow1);
    a.onclick = function () {
        if (!$(".show1").hasClass("animated zoomOut")) {
            $(".show1").removeClass("animated zoomIn").addClass("animated zoomOut").parent().css({"zIndex": 0});
            $(".show2").css({"display":"block"}).removeClass("animated zoomOut").addClass("animated zoomIn").parent().css({"zIndex": 1000});

        }
        else{
            $(".show1").removeClass("animated zoomOut").addClass("animated zoomIn").parent().css({"zIndex": 1000});
            $(".show2").removeClass("animated zoomIn").addClass("animated zoomOut").parent().css({"zIndex": 0});

        }
    }
})();
//游戏热爱者的图片
~(function(){
    var gameLove=document.getElementById("gameLove");
    var gameLover=utils.getElesByClass("gameLover",gameLove)[0];
    ~(function getData(){
        var xhr =new XMLHttpRequest();
        xhr.open("get","data5.txt",false);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                window.data5=utils.jsonParse(xhr.responseText);
            }
        };
        xhr.send(null);
    })();
//console.log(data5);
    ~(function bindData(){
        if(window.data5){
            var str="";
            for(var i=0;i<data5.length;i++){
                var curData=data5[i];
                str+="<a style='background-image:url("+curData.img+")' href='javascript:void 0'><em class='font1'></em><em class='font2'></em><span class='font3'>"+curData.span+"</span></a>";
            }
            gameLover.innerHTML=str;
        }
    })();
})();
//后面的换一批
~(function(){
    var innerShow2=utils.getElesByClass("innerShow2")[0];
    var innerShow3=utils.getElesByClass("innerShow3")[0];
    ~(function getData(){
        var xhr=new XMLHttpRequest();
        xhr.open("get","data6.txt",false);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                window.data6=utils.jsonParse(xhr.responseText);
            }
        };
        xhr.send(null);
    })();
    console.log(data6);
    ~(function bindData(){
        if(window.data6){
            var str1="",str2="";
            for(var i=0;i<data6.length;i++){
                var curData=data6[i];
                if(i<3){
                    str1+="<div class='show1'><a class='showA' href='javascript:void 0'><img src='"+curData.img+"'></a><p class='showText1'>"+curData.showText1+"</p><p class='showText2'>"+curData.showText2+"</p><span><a class='good' href='javascript:void 0'><i>"+curData.i+"人赞过</i></a></span><a class='in' href='javascript:void 0'>进入官网</a></div>";
                }
                else{
                    str2+="<div class='show2'><a class='showA' href='javascript:void 0'><img src='"+curData.img+"'></a><p class='showText1'>"+curData.showText1+"</p><p class='showText2'>"+curData.showText2+"</p><span><a class='good' href='javascript:void 0'><i>"+curData.i+"人赞过</i></a></span><a class='in' href='javascript:void 0'>进入官网</a></div>";
                }
            }
            innerShow2.innerHTML=str1;
            innerShow3.innerHTML=str2;
        }
    })();
})();
~(function(){
    var i2=document.getElementById("i2");
    var a=i2.parentNode;
    a.onclick = function () {
        if (!$(".show1").hasClass("animated zoomOut")) {
            $(".show1").removeClass("animated zoomIn").addClass("animated zoomOut").parent().css({"zIndex": 0});
            $(".show2").css({"display":"block"}).removeClass("animated zoomOut").addClass("animated zoomIn").parent().css({"zIndex": 1000});

        }
        else{
            $(".show1").removeClass("animated zoomOut").addClass("animated zoomIn").parent().css({"zIndex": 1000});
            $(".show2").removeClass("animated zoomIn").addClass("animated zoomOut").parent().css({"zIndex": 0});

        }
    }
})();
//点赞
argee(i4);
argee(i5);





