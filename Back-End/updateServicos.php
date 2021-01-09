<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Servicos.php";

$servicos = new Servicos;

$servicos->id = $_POST['idservico'];
$servicos->descricao_servico = $_POST['descricaoservico'];
$servicos->atendimento_domicilio = $_POST['atendimentodomicilio'];
$servicos->atendimento_local = $_POST['atendimentolocal'];
$servicos->pagamento_dinheiro = $_POST['pagamentodinheiro'];
$servicos->pagamento_cartao = $_POST['pagamentocartao'];
$servicos->inicio_atendimento = $_POST['inicioatendimento'];
$servicos->fim_atendimento = $_POST['fimatendimento'];
$servicos->imagem_servico = $_POST['imagemservico'];
$servicos->senha = md5($_POST['senha']);
$servicos->email = $_POST['email'];

$validate = $servicos->updateServicos();
if ($validate == true) {
    print_r(
        json_encode(
            array(
                'status' => 'sucesso',
                'mensagem' => 'Dados atualizados com sucesso'
            )
        )
    );
} else {
    print_r(
        json_encode(
            array(
                'status' => 'falha',
                'mensagem' => 'Não foi possível atualizar estes dados'
            )
        )
    );
}
