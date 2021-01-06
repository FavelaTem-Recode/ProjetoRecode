<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Servicos.php";

$servico = new Servicos;
$servico->fk_servico = $_GET['id'];

$validate = $servico->selectCategoriaServicos();

print_r(json_encode($validate));


