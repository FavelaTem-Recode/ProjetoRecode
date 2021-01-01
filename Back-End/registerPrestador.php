<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/PrestadorServicos.php";

$prestador = new PrestadorServicos;
$prestador->nome_fantasia = $_POST['nomefantasia'];
$prestador->nome = $_POST['nome'];
$prestador->sobrenome = $_POST['sobrenome'];
$prestador->cpf_cnpj = $_POST['cpfcnpj'];
$prestador->telefone = $_POST['telefone'];
$prestador->email = $_POST['email'];
$prestador->cep = $_POST['cep'];
$prestador->data_nascimento = $_POST['datanascimento'];
$prestador->logradouro = $_POST['rua'];
$prestador->numero = $_POST['numero'];
$prestador->bairro = $_POST['bairro'];
$prestador->estado = $_POST['estado'];
$prestador->cidade = $_POST['cidade'];
$prestador->senha = $_POST['senha'];
$prestador->pontuacao = 0;
$prestador->atividades = 0;
$prestador->imagem = null;
$prestador->descricao = "";

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
