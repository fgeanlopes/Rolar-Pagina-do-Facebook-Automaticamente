// Criado por: Gean Lopes
//Facebook: https://www.facebook.com/f.geanlopes

// Adiciona os botões a pagina do Facebook
$('body').after('<div class="botoes_de_acao_personalizada"' +
    ' style="position: fixed;' +
    'bottom:15vh; ' +
    'flex-direction:column;' +
    'display: flex;' +
    'align-items: flex-start;' +
    '  left: 15px;' +
    'justify-content: center;">'

    // Botao que ativa funcao
    +'<button class="botao_que_ativa_rolagem"' +
    ' style="background:#4267b2;' +
    ' cursor: pointer;' +
    ' height: 30px;' +
    ' margin-top: 15px;' +
    ' border: none;' +
    ' font-size: 16px;' +
    ' color: white;' +
    ' font-weight: bold;' +
    ' border-radius: 5px;' +
    '">Ativar Rolagem</button>'+

    // Botao que desativa funcao
    '<button class="botao_que_desativa_rolagem"' +
    ' style="background:#4267b2;' +
    ' cursor: pointer;' +
    ' height: 30px;' +
    ' margin-top: 15px;' +
    ' border: none;' +
    ' font-size: 16px;' +
    ' color: white;' +
    ' font-weight: bold;' +
    ' border-radius: 5px;' +
    '">Parar Rolagem</button>'+

    '</div>');

// Jquery usado para realizar a funcao de rolagem e aplicar suavidade

jQuery(document).ready(function($) {

    // Variavel declarada vazia para usar nos botoes criados
    var interval = null;

    // Botao que incicia a rolagem automatica
    $(".botao_que_ativa_rolagem").click(function(event){
        event.preventDefault();

        // Pegando a altura do top com scrollTo e levando até classe do facebook '#pagelet_rhc_footer'
        // O Id #pagelet_rhc_footer é local a onde fica setado as
        // opções de linguaguem do facebook, logo após ao item grupos sugereditos
        function ativar_rolagem_automatica(){
            $('html,body').animate({scrollTop:$('#pagelet_rhc_footer').offset().top}, 1500);
        }
        // Há varivel vazia agora esta recebendo o setInterval para executar a cada 3 segundos
        // este foi valor padrao definido

        // OBS: CASO QUERIA PODE MUDAR PARA SUA PREFERENCIA

        var tempo_repetir_a_funcao = 3000;

        interval = setInterval(function(){
            // funcao que realiza a rolagem
            ativar_rolagem_automatica();
        },tempo_repetir_a_funcao);

    });

    // Botâo para pausar a funcão de auto rolagem
    $(".botao_que_desativa_rolagem").click(function(){
        // Aqui a varivel 'interval' é usada novamente agora para pausar a auto rolagem
        clearInterval(interval);
    });
});

// Criado por: Gean Lopes
//Facebook: https://www.facebook.com/f.geanlopes