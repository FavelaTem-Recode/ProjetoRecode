<?php

require 'Connection.php';

class PrestadorServicos
{
    public $email;
    public $senha;
    public $id;
    public $fk_usuario;
    public $nome_fantasia;
    public $telefone;
    public $cep;
    public $logradouro;
    public $numero;
    public $bairro;
    public $estado;
    public $cidade;
    public $pontuacao;
    public $atividades;
    public $imagem;
    public $descricao;

    //checked
    public function registerPrestador()
    {
        //Pega o id do usuário do BD de acordo com a senha e email passado, caso não retorne nada, insere null
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser FROM cadastrobasico WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_usuario = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_usuario['0']['iduser']) ? $this->fk_usuario = $this->fk_usuario['0']['iduser'] : $this->fk_usuario = null;
        //----------------------------->

        $stmt = $conn->query("INSERT INTO cadastrolojaprestador
        (
            nome_fantasia,
            fk_cadastro,
            telefone,
            cep,
            logradouro,
            numero,
            bairro,
            estado,
            cidade,
            pontuacao,
            atividades,
            imagem,
            descricao_loja
        ) 
            VALUES 
        (
            '$this->nome_fantasia',
            '$this->fk_usuario',
            '$this->telefone',
            '$this->cep',
            '$this->logradouro',
            '$this->numero',
            '$this->bairro',
            '$this->estado',
            '$this->cidade',
            '$this->pontuacao',
            '$this->atividades',
            '$this->imagem',
            '$this->descricao'
        )
        ");

        return $stmt;
    }

    //ckecked
    public function deletePrestador()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser FROM cadastrobasico WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_usuario = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_usuario['0']['iduser']) ? $this->fk_usuario = $this->fk_usuario['0']['iduser'] : $this->fk_usuario = null;
        $stmt = $conn->query("DELETE FROM cadastrolojaprestador WHERE fk_cadastro = '$this->fk_usuario';");
        return $stmt->rowCount();
    }

    //Retorna os dados da página da loja
    public function selectPrestador()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT idcadastrolojaprestador,nome_fantasia,telefone,cep,logradouro,numero,bairro,estado,cidade,pontuacao,atividades,cadastrolojaprestador.imagem,descricao_loja,idportfolio,portfolio.imagem,descricao FROM cadastrolojaprestador LEFT OUTER JOIN favelatem.portfolio on cadastrolojaprestador.idcadastrolojaprestador = portfolio.fk_lojaprestador WHERE idcadastrolojaprestador = '$this->id';");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function selectPrestadorByLogin()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser,idcadastrolojaprestador FROM cadastrobasico INNER JOIN cadastrolojaprestador ON iduser = fk_cadastro WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_lojaprestador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_lojaprestador['0']['idcadastrolojaprestador']) ? $this->fk_lojaprestador = $this->fk_lojaprestador['0']['idcadastrolojaprestador'] : $this->fk_lojaprestador = null;
        
        $stmt = $conn->query("SELECT idcadastrolojaprestador,nome_fantasia,telefone,cep,logradouro,numero,bairro,estado,cidade,pontuacao,atividades,cadastrolojaprestador.imagem,descricao_loja FROM cadastrolojaprestador WHERE idcadastrolojaprestador = '$this->fk_lojaprestador';");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    //checked
    public function updatePrestador()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser FROM cadastrobasico WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_usuario = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_usuario['0']['iduser']) ? $this->fk_usuario = $this->fk_usuario['0']['iduser'] : $this->fk_usuario = null;

        $stmt = $conn->query("UPDATE cadastrolojaprestador
        SET nome_fantasia = '$this->nome_fantasia',
            telefone = '$this->telefone',
            cep = '$this->cep',
            logradouro = '$this->logradouro',
            numero = '$this->numero',
            bairro = '$this->bairro',
            estado = '$this->estado',
            cidade = '$this->cidade',
            imagem = '$this->imagem',
            descricao_loja = '$this->descricao'
        WHERE fk_cadastro = '$this->fk_usuario';");
        return $stmt->rowCount();
    }
}
