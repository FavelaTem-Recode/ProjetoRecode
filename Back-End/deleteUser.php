<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/UserBasico.php";


if (isset($_POST['email']) && isset($_POST['senha'])) {
    $usuario = new UserBasico;
    $usuario->email = $_POST['email'];
    $usuario->senha = md5($_POST['senha']);

    $validate = $usuario->deleteUser();
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