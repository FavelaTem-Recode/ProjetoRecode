<?php

require 'Connection.php';

class RespostasUsuario
{


    public $idrespostas;
    public $fk_usuario;
    public $resposta_usuario;
    public $email;
    public $senha;


    public function insertRespostas()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT idcadastrolojaprestador FROM cadastrolojaprestador WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_usuario = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_usuario['0']['idcadastrolojaprestador'])? $this->fk_usuario = $this->fk_usuario['0']['idcadastrolojaprestador']:$this->fk_usuario = null;

        $stmt = $conn->query("INSERT INTO respostas_usuarios (fk_usuario, resposta_usuario) VALUES ('$this->fk_usuario', '$this->resposta_usuario')");
        return $stmt;
    }
}
