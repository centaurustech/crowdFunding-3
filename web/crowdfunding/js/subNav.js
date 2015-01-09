$(function(){

    // 左侧二级菜单
    $(".subNav").click(function(){
        $(this).toggleClass("currentDd").siblings(".subNav").removeClass("currentDd");
        $(this).toggleClass("currentDt").siblings(".subNav").removeClass("currentDt");

        // 修改数字控制速度， slideUp(500)控制卷起速度
        $(this).next(".navContent").slideToggle(500).siblings(".navContent").slideUp(500);

        // 设置首个li为默认选中状态
        if ($(this).find("a").has(".label_7")) {
            $(this).parent().find("li a").removeClass("label_7");
            $(this).next().find('li').first().find("a").addClass("label_7");
        }

        // 设置首个li对应的内容显示
        var index = $('.subNavBox').find('li').index($(this).next().find('li').first());
        $('div.tab_box > div').eq(index).show().siblings().hide();

        // 设置导航
        $('#subNavUl').text($(this).text());
        $('#subNavLi').text($(this).next().find('li').first().text());
    });

    // 左侧二级菜单最后一个li样式控制
    $(".navContent").each(function(){
        var y = $(this).children().last();
        y.find("a").css("border-bottom", "none");
    });

    // 鼠标点击后改变字体颜色
    $(".navContent li").click(function () {
        if ($(this).find("a").has(".label_7")) {
            $(this).parent().find("li a").removeClass("label_7");
            $(this).find("a").addClass("label_7");
        }
    });

    $(".nav-ul li").click(function () {
        if ($(this).has(".onNav")) {
            $(".nav-ul li").removeClass("onNav");
            $(this).addClass("onNav");
        }
    });

});