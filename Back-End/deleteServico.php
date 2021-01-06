  
<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Servicos.php";

$servicos = new Servicos;
$servicos->id = $_POST ['id'];

$validate = $servicos->deleteServico();

if ($validate == true) {
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