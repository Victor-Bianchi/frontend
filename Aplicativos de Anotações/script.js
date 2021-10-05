$(function(){
    $('.btn-add').click(function(){
        var element = '<div class="anotacao-single"><textarea placeholder="Insira uma nova anotação"></textarea></div>'
        $('.container').append(element)

        var textArea = $('.anotacao-single').last().find('textarea')

        var date = new Date();
        var hora = date.getHours()
        var minutos = date.getMinutes()
        var final = hora + ':' + minutos

        textArea.html(final)
    })

    
})