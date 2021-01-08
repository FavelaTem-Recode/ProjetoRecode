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
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser,idcadastrolojaprestador from cadastrobasico inner join cadastrolojaprestador on iduser = fk_cadastro WHere email = '$this->email' and senha = '$this->senha';");
        $this->fk_usuario = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_usuario['0']['idcadastrolojaprestador'])? $this->fk_usuario = $this->fk_usuario['0']['idcadastrolojaprestador']:$this->fk_usuario = null;

        $stmt = $conn->query("INSERT INTO respostas_usuarios (fk_usuario, resposta_usuario, fk_pergunta) VALUES ('$this->fk_usuario', '$this->resposta_usuario', '$this->fk_pergunta')");
        return $stmt;
    }
}
