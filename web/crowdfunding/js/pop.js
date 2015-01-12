$(function(){

    var width = $('#login').offset().left;

    $(".head_div").css('left', width + 260);
    $(".head_div").css('height', '65px');

    $('#login').remove();
    $(".head_pop").hide();

    // 鼠标停在头像上
    $(".head_div").mouseenter(function(){
        $(".head_pop").slideDown(500);
        $(".head_div").css('height', '266px');
    });
    $(".head_div").mouseleave(function(){
        $(".head_pop").slideUp(500);
        $(".head_div").css('height', '65px');
    });

    // 鼠标停在头像上
    $("#head_detail").hide();
    $("#pro_head").mouseenter(function(){
        $("#head_detail").show();
        $(".pro_context_body").hide();
    });
    $("#head_detail").mouseleave(function(){
        $("#head_detail").hide();
        $(".pro_context_body").show();
    });
});