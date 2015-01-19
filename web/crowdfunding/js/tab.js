$(document).ready(function(){
    var $tab_li1 = $('#tab1').find('ul li');
    $tab_li1.click(function(){
        $(this).addClass("selected_1").siblings().removeClass("selected_1");
        var index = $tab_li1.index(this);
        $('div.tab_box1 > div').eq(index).show().siblings().hide();
    });
    var $tab_li2 = $('#tab2').find('ul li');
    $tab_li2.click(function(){
        $(this).addClass("selected_2").siblings().removeClass("selected_2");
        var index = $tab_li2.index(this);
        $('div.tab_box2 > div').eq(index).show().siblings().hide();
    });

    var $tab_li3 = $('#tab3').find('ul li');
    $tab_li3.click(function(){
        $(this).addClass("selected_3").siblings().removeClass("selected_3");
        var index = $tab_li3.index(this);
        $('div.tab_box3 > div').eq(index).show().siblings().hide();
    });
    var $tab_li5 = $('#tab5').find('ul li');
    $tab_li5.click(function(){
        $(this).addClass("selected_3").siblings().removeClass("selected_3");
        var index = $tab_li5.index(this);
        $('div.tab_box5 > div').eq(index).show().siblings().hide();
    });

    var $tab_li4 = $('#tab4').find('ul li');
    $tab_li4.click(function(){
        $(this).addClass("selected_4").siblings().removeClass("selected_4");
        var index = $tab_li4.index(this);
        $('div.tab_box4 > div').eq(index).show().siblings().hide();
    });

    var $tab_lit1 = $('.subNavBox').find('li');
    $tab_lit1.click(function(){
        var index = $tab_lit1.index(this);
        $('div.tab_box > div').eq(index).show().siblings().hide();
        $('#subNavLi').text($(this).text());
    });

    var $tab_li6 = $('#tab6').find('ul li');
    $tab_li6.click(function(){
        $(this).addClass("selected_6").siblings().removeClass("selected_6");
        var index = $tab_li6.index(this);
        $('div.tab_box6 > div').eq(index).show().siblings().hide();
    });
});