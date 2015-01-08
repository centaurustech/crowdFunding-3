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

    var $tab_lit1 = $('#navContent_1').find('li');
    $tab_lit1.click(function(){
        var index = $tab_lit1.index(this);
        $('div.tab_box1 > div').eq(index).show().siblings().hide();
        $('#subNavLi').text(this.textContent);
    });
    var $tab_lit2 = $('#navContent_2').find('li');
    $tab_lit2.click(function(){
        var index = $tab_lit2.index(this);
        $('div.tab_box2 > div').eq(index).show().siblings().hide();
    });
    var $tab_lit3 = $('#navContent_3').find('li');
    $tab_lit3.click(function(){
        var index = $tab_lit3.index(this);
        $('div.tab_box3 > div').eq(index).show().siblings().hide();
    });
    var $tab_lit4 = $('#navContent_4').find('li');
    $tab_lit4.click(function(){
        var index = $tab_lit4.index(this);
        $('div.tab_box4 > div').eq(index).show().siblings().hide();
    });
    var $tab_lit5 = $('#navContent_5').find('li');
    $tab_lit5.click(function(){
        var index = $tab_lit5.index(this);
        $('div.tab_box5 > div').eq(index).show().siblings().hide();
    });
    var $tab_lit6 = $('#navContent_6').find('li');
    $tab_lit6.click(function(){
        var index = $tab_lit6.index(this);
        $('div.tab_box6 > div').eq(index).show().siblings().hide();
    });
    var $tab_lit7 = $('#navContent_7').find('li');
    $tab_lit7.click(function(){
        var index = $tab_lit7.index(this);
        $('div.tab_box7 > div').eq(index).show().siblings().hide();
    });


});