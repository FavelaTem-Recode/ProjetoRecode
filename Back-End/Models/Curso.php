<?php

require 'Connection.php';
//Checked
class Cursos
{

    public $idcursos;
    public $nome_curso;
    public $pontuacao;
    public $descricao;
    public $imagem;

    public static function selectAllCursos()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT * FROM cursos;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function selectCursos()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT * FROM cursos left outer join perguntas on idcursos = fk_curso where idcursos = '$this->idcursos';");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
