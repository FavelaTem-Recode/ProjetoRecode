<?php

require 'Connection.php';

class Portfolio
{
    public $idportfolio;
    public $imagem;
    public $descricao;
    public $fk_lojaprestador;
    public $email;
    public $senha;


    public function insertPortfolio()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT idcadastrolojaprestador FROM cadastrolojaprestador WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_lojaprestador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_lojaprestador['0']['idcadastrolojaprestador'])? $this->fk_lojaprestador = $this->fk_lojaprestador['0']['idcadastrolojaprestador']:$this->fk_lojaprestador = null;
        $stmt = $conn->query("INSERT INTO portfolio
        (
            imagem,
            descricao,
            fk_lojaprestador
        ) 
            VALUES 
        (
            '$this->imagem',
            '$this->descricao',
            '$this->fk_lojaprestador'
        )
        ");

        return $stmt;
    }

    public function deletePortfolio()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT idcadastrolojaprestador FROM cadastrolojaprestador WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_lojaprestador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_lojaprestador['0']['idcadastrolojaprestador'])? $this->fk_lojaprestador = $this->fk_lojaprestador['0']['idcadastrolojaprestador']:$this->fk_lojaprestador = null;
        
        $stmt = $conn->query("DELETE FROM portfolio WHERE fk_lojaprestador = '$this->fk_lojaprestador' AND idportfolio = '$this->idportfolio';");
        return $stmt->rowCount();
    }


    public function selectPortfolios()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT idcadastrolojaprestador FROM cadastrolojaprestador WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_lojaprestador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_lojaprestador['0']['idcadastrolojaprestador'])? $this->fk_lojaprestador = $this->fk_lojaprestador['0']['idcadastrolojaprestador']:$this->fk_lojaprestador = null;

        $stmt = $conn->query("SELECT * FROM portfolio WHERE fk_lojaprestador = '$this->fk_lojaprestador';");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


    public function updatePortfolios()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT idcadastrolojaprestador FROM cadastrolojaprestador WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_lojaprestador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_lojaprestador['0']['idcadastrolojaprestador'])? $this->fk_lojaprestador = $this->fk_lojaprestador['0']['idcadastrolojaprestador']:$this->fk_lojaprestador = null;
      
      $stmt = $conn->query("UPDATE portfolio
        SET imagem = '$this->imagem',
            descricao = '$this->descricao'
        WHERE fk_lojaprestador = '$this->fk_lojaprestador'
        AND idportfolio = '$this->idportfolio';");
        return $stmt->rowCount();
    }
}

// INSERT DELETE UPDATE PORTFOLIO
