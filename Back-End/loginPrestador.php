<?php

// header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
// header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/PrestadorServicos.php";

$prestador = new PrestadorServicos;
$prestador->email = $_POST['email'];
$prestador->senha = md5($_POST['senha']);

$validate = $prestador->loginPrestador();

if (count($validate)>0) {
    $validate[0]['senha'] = $_POST['senha'];
    print_r(
        json_encode(
            array(
                'status' => 'Usuário logado',
                'body' => $validate
            )
        )
    );
} else {
    print_r(
        json_encode(
            array(
                'status' => 0,
                'mensagem' => 'Não foi possível atualizar estes dados'
            )
        )
    );
}
