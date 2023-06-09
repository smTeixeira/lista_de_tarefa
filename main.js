$(document).ready(function() {
    $('form').on('submit', function(e)  {
        e.preventDefault();
        const endereçoDaNovaTarefa = $('#endereço-tarefa').val();
        const novaTarefa = $('<li></li>');

        $(`
        <li> ${endereçoDaNovaTarefa}</li>
        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#endereço-tarefa').val('')
    })

    $('ul').click(function(){
        $('li').addClass('concluido');
    })
})
