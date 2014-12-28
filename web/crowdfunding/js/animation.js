function numberScroll(className, number, delay) {
    delay = delay || 1000;
    window.odometerOptions = {
        format: '(ddd).dd'
    };
    setTimeout(function () {
        var e = '.' + className;
        $(e).html(number);
    }, delay);
}