<?php

require 'Connection.php';
//checked
class RespostasUsuario
{


    public $idrespostas;
    public $fk_usuario;
    public $fk_pergunta;
    public $resposta_usuario;
    public $email;
    public $senha;

    public function insertRespostas()
    {
        //Pega o ID do prestador/loja para inserir na resposta
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser,idcadastrolojaprestador from cadastrobasico inner join cadastrolojaprestador on iduser = fk_cadastro WHere email = '$this->email' and senha = '$this->senha';");
        $this->fk_usuario = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_usuario['0']['idcadastrolojaprestador'])? $this->fk_usuario = $this->fk_usuario['0']['idcadastrolojaprestador']:$this->fk_usuario = null;

        //Insere a resposta
        $stmt = $conn->query("INSERT INTO respostas_usuarios (fk_usuario, resposta_usuario, fk_pergunta) VALUES ('$this->fk_usuario', '$this->resposta_usuario', '$this->fk_pergunta')");
        
        //Pega o ID da resposta inserida e faz uma consulta com join em respostas padrão para retornar a veracidade da resposta
        $this->idrespostas = $conn->lastInsertId();
        $stmt = $conn->query("SELECT * FROM favelatem.respostas_usuarios INNER JOIN respostas_padrao on resposta_usuario = idrespostas_padrao AND idrespostas = '$this->idrespostas';");
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    //QUERY para retornar todas respostas acertadas pelo usuário, base para retornar a pontuação
    //SELECT * FROM favelatem.respostas_usuarios INNER JOIN respostas_padrao ON fk_usuario = 14 AND veracidade = 1 AND resposta_usuario = idrespostas_padrao inner join perguntas on respostas_padrao.fk_pergunta = idperguntas;
}
