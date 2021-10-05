$(function(){
    $('span.menu').click(function(){
        var element = $('.sidebar');

        if(element.is(':visible')){
            element.hide()
            $('.main').css('left', '0px')
        } else {
            element.slideToggle();
            $('.main').css('left', '300px')
        }
    })
})