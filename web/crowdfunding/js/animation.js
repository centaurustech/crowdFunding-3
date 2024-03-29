function numberScroll(className, number, delay) {
    delay = delay || 1;
    window.odometerOptions = {
        format: '(ddd).dd'
    };
    setTimeout(function () {
        var e = '.' + className;
        $(e).html(number);
    }, delay);
}

$(function(){
    $('#indexslider').slides({
        effect: 'fade, fade',
        crossfade: true,
        container:'index-img',
        paginationClass: 'index-pagination',
        preloadImage: '',
        play:3000,
        fadeSpeed: 500,
        pause:10,
        generatePagination: false,
        animationStart: function(current){
            $('.index-pagination span').stop().animate({width:0}).hide();
        }	,
        animationComplete: function(current){
            var $back=$('.back');
            var leftw=(current-1)*34;
            $back.animate({left:leftw},1000,'easeOutBack');
            $('.index-pagination li').eq(current-1).find('span').show().animate({width:60},3000);
        },
        slidesLoaded: function() {
            $('.index-pagination li').eq(0).find('span').animate({width:60},3000);
        }
    });
});