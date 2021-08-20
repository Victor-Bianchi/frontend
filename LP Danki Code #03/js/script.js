$(function(){
    $('nav.mobile h3').click(function(){
        $(this).parent().find('ul').slideToggle()
    })
})