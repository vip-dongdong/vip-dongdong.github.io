$(function(){
    var widths=$(".slides li").width();
    var s=$(".slides li").length;
    //var w=$(".slides").css("width",widths*s);

    var flag=true;
    var box=$(".slides");
    $(".flex-control-paging li a:eq(0)").css("background","#000");
    var t=setInterval(move,3000);
    var num=0;
    function move(){
         num++;
        if(num==s){
            num=0;
        }
        box.animate({marginLeft: -widths},function(){
                $(".slides li:eq(0)").appendTo(box);
            box.css('marginLeft', "0");
            flag = true;
        })
        $(".flex-control-paging li a").css("background","");
        $(".flex-control-paging li a")[num].style.background="#000";
    }
    //var btn=$(".flex-control-paging li a");
    //btn.click(function(){
    //    var index=btn.index(this);
    //    $("btn").css("background","");
    //    $("btn")[index].style.background="#000";
    //    num=index ;
    //})


})