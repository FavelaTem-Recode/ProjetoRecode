<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/RespostasUsuario.php";

$resposta = new RespostasUsuario;
$resposta->email = $_POST['email'];
$resposta->resposta_usuario = md5($_POST['resposta']);
$resposta->senha = $_POST['senha'];


$validate = $resposta->insertRespostas();

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