<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/PrestadorServicos.php";

$prestador = new PrestadorServicos;
$prestador->email = $_POST['email'];
$prestador->senha = md5($_POST['senha']);

$validate = $prestador->deletePrestador();

if ($validate === 1) {
    print_r(
        json_encode(
            array(
                'status' => 'sucesso',
                'mensagem' => 'Conta deletada com sucesso'
            )
        )
    );
} else {
    print_r(
        json_encode(
            array(
                'status' => 'falha',
                'mensagem' => 'Houve um erro ao deletar esta conta'
            )
        )
    );
}