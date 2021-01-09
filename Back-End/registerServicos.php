<?php

 header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
 header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Servicos.php";

$servico = new Servicos;

$servico->fk_subcategoria= $_POST['idsubcategoria'];
$servico->descricao_servico = $_POST['descricaoservico'];
$servico->atendimento_domicilio = $_POST['atendimentodomicilio'];
$servico->atendimento_local = $_POST['atendimentolocal'];
$servico->pagamento_dinheiro = $_POST['pagamentodinheiro'];
$servico->pagamento_cartao = $_POST['pagamentocartao'];
$servico->inicio_atendimento = $_POST['inicioatendimento'];
$servico->fim_atendimento = $_POST['fimatendimento'];
$servico->imagem_servico= $_POST['imagemservico'];
$servico->senha= md5($_POST['senha']);
$servico->email= $_POST['email'];


$validate = $servico->registerServicos();


if ($validate == true) {
    print_r(
        json_encode(
            array(
                'status' => 1,
                'mensagem' => 'Dados inseridos com sucesso'
            )
        )
    );
} else {
    print_r(
        json_encode(
            array(
                'status' => 0,
                'mensagem' => 'Falha na inserção de dados'
            )
        )
    );
}
