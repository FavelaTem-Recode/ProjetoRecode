<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/PrestadorServicos.php";

$prestador = new PrestadorServicos;
$prestador->nome_fantasia = $_POST['nomefantasia'];
$prestador->telefone = $_POST['telefone'];
$prestador->email = $_POST['email'];
$prestador->cep = $_POST['cep'];
$prestador->logradouro = $_POST['rua'];
$prestador->numero = $_POST['numero'];
$prestador->bairro = $_POST['bairro'];
$prestador->estado = $_POST['estado'];
$prestador->cidade = $_POST['cidade'];
$prestador->senha = md5($_POST['senha']);
$prestador->pontuacao = 0;
$prestador->atividades = 0;
$prestador->imagem = null;
$prestador->descricao = $_POST["descricao"];

if (strlen($prestador->nome_fantasia) >= 1 && strlen($prestador->telefone) >= 8 && strlen($prestador->email) >= 9) {
    $validate = $prestador->registerPrestador();
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
} else {
    print_r(
        json_encode(
            array(
                'status' => 0,
                'mensagem' => 'Algum dado inserido não está correto'
            )
        )
    );
}
