$(function(){
    $('nav a').hover(function () { 
       $('nav li').removeClass('selected')
       $('nav li').addClass('selected')
    });
})