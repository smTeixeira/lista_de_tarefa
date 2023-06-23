$(document).ready(function() {
    $('form').on('submit', function(e)  {
        e.preventDefault();
        const endereçoDaNovaTarefa = $('#endereço-tarefa').val();
        const novaTarefa = $('<li class="nova-tarefa"></li>');

        $(`
        <div>${endereçoDaNovaTarefa}</div>f

        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#endereço-tarefa').val('')
    })

    $('ul').on('click','li',function(){
        $(this).css("text-decoration", "line-through");
    })
})
