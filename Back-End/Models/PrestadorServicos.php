<?php

require 'Connection.php';

class PrestadorServicos
{
    public $id;
    public $nome_fantasia;
    public $nome;
    public $sobrenome;
    public $cpf_cnpj;
    public $telefone;
    public $email;
    public $cep;
    public $data_nascimento;
    public $logradouro;
    public $numero;
    public $bairro;
    public $estado;
    public $cidade;
    public $senha;
    public $pontuacao;
    public $atividades;
    public $imagem;
    public $descricao;

    public function registerPrestador()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("INSERT INTO cadastrolojaprestador
        (
            nome_fantasia,
            nome,
            sobrenome,
            cpf_cnpj,
            telefone,
            email,
            cep,
            data_nascimento,
            logradouro,
            numero,
            bairro,
            estado,
            cidade,
            senha,
            pontuacao,
            atividades,
            imagem,
            descricao_loja
        ) 
            VALUES 
        (
            '$this->nome_fantasia',
            '$this->nome',
            '$this->sobrenome',
            '$this->cpf_cnpj',
            '$this->telefone',
            '$this->email',
            '$this->cep',
            '$this->data_nascimento',
            '$this->logradouro',
            '$this->numero',
            '$this->bairro',
            '$this->estado',
            '$this->cidade',
            '$this->senha',
            '$this->pontuacao',
            '$this->atividades',
            '$this->imagem',
            '$this->descricao'
        )
        ");

        return $stmt;
    }

    public function deletePrestador()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT idcadastrolojaprestador FROM cadastrolojaprestador WHERE email = '$this->email' AND senha = '$this->senha';");
        $idUser = $stmt->fetch(PDO::FETCH_ASSOC)['idcadastrolojaprestador'];
        $stmt = $conn->query("DELETE FROM cadastrolojaprestador WHERE idcadastrolojaprestador = '$idUser';");
        return $stmt->rowCount();
    }

    public function selectPrestador()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT idcadastrolojaprestador,nome_fantasia,nome,sobrenome,cpf_cnpj,telefone,email,cep,logradouro,numero,bairro,estado,cidade,pontuacao,atividades,cadastrolojaprestador.imagem,descricao_loja,idportfolio,portfolio.imagem,descricao FROM cadastrolojaprestador LEFT OUTER JOIN favelatem.portfolio on cadastrolojaprestador.idcadastrolojaprestador = portfolio.fk_lojaprestador WHERE idcadastrolojaprestador = '$this->id';");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
