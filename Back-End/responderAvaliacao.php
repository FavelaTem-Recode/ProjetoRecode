<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/RespostasAvaliacao.php";



for ($i = 0; $i < count($_POST['idpergunta']); $i++) {
    print_r(
        json_encode(
            array(
                'pergunta' => $_POST['idpergunta'][$i],
                'resposta' => $_POST['resposta'][$i]
            )
        )
    );
}

// $contato = new Contato;
// $contato->email_contato = $_POST['email_contato'];
// $contato->nome = $_POST['nome'];
// $contato->msg = $_POST['msg'];



// //se não estã validado não esta retornando nenhum valor
// if (strlen($contato->email_contato) >= 9 && strlen($contato->nome) >=1 && strlen($contato->msg) >=3) {

// $validate = $contato->registerContato();
// if ($validate == true) {
//     print_r(
//         json_encode(
//             array(
//                 'status' => 1,
//                 'mensagem' => 'Mensagem inserida com sucesso'
//             )
//         )
//     );
// } else {
//     print_r(
//         json_encode(
//             array(
//                 'status' => 0,
//                 'mensagem' => 'Falha no envio da mensagem'
//             )
//         )
//     );

// }
// }else {
//     print_r(
//         json_encode(
//             array(
//                 'status' => 0,
//                 'mensagem' => 'Formato Invalido'
//             )
//         )
//     );
// }