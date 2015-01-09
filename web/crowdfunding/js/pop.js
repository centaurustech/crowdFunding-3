$(function(){

    $(".head_pop").hide();
    var width = $('#in_head').offset().left;
    $('.head_pop').css('margin-left', width);
    // 鼠标停在头像上
    $("#in_head").mouseover(function(){
        $(".head_pop").slideDown(500);
    });
    // 鼠标离开头像
    $("#in_head").mouseleave(function(){
        $(".head_pop").slideUp(500);
    });


    // 鼠标停在头像上
    $("#head_detail").hide();
    $("#pro_head").mouseover(function(){
        $("#head_detail").show();
        $(".pro_context_body").hide();
    });
    $("#head_detail").mouseleave(function(){
        $("#head_detail").hide();
        $(".pro_context_body").show();
    });
});