<?php

require 'Connection.php';
//checked
class UserBasico
{
    public $id;
    public $email;
    public $senha;
    public $nome;
    public $sobrenome;

    //Cria um novo usuário padrão
    public function registerUser()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("INSERT INTO cadastrobasico
        (
            nome,
            sobrenome,
            email,
            senha
        ) 
            VALUES 
        (
            '$this->nome',
            '$this->sobrenome',
            '$this->email',
            '$this->senha'
        )
        ");

        return $stmt;
    }

    //Deleta um usuário padrão
    public function deleteUser()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser FROM cadastrobasico WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->id = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->id['0']['iduser']) ? $this->id = $this->id['0']['iduser'] : $this->id = null;
        $stmt = $conn->query("DELETE FROM cadastrobasico WHERE iduser = '$this->id';");
        return $stmt->rowCount();
    }

    //Update de usuários
    public function updateUser()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser FROM cadastrobasico WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->id = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->id['0']['iduser']) ? $this->id = $this->id['0']['iduser'] : $this->id = null;

        $stmt = $conn->query("UPDATE cadastrobasico
        SET nome = '$this->nome',
            sobrenome = '$this->sobrenome'
        WHERE iduser = '$this->id';");
        return $stmt;
    }

    //Login de usuários
    public function loginUser()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser,nome,email,idcadastrolojaprestador FROM cadastrobasico LEFT OUTER JOIN cadastrolojaprestador ON iduser = fk_cadastro WHERE email = '$this->email' AND senha = '$this->senha';");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

