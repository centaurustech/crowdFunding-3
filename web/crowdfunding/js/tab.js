$(document).ready(function(){
    var $tab_li = $('#tab1').find('ul li');
    $tab_li.click(function(){
        $(this).addClass("selected_1").siblings().removeClass("selected_1");
        var index = $tab_li.index(this);
        $('div.tab_box1 > div').eq(index).show().siblings().hide();
    });
});