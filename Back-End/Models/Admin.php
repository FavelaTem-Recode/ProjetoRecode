<?php
require 'Connection.php';

class Admin
{
    public $id;
    public $email;
    public $senha;

    public function loginAdmin()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT * FROM cadastroadmin WHERE email = '$this->email' AND senha = '$this->senha';");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function selectProporcaoUsers()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT (SELECT COUNT(*) FROM cadastrobasico RIGHT OUTER JOIN cadastrolojaprestador ON idcadastrolojaprestador = iduser WHERE cadastrobasico.delecao_cadastro IS NULL AND cadastrolojaprestador.delecao_cadastro IS NULL ) AS prestadores, (SELECT COUNT(*) AS todosCadastros FROM cadastrobasico WHERE delecao_cadastro IS NULL) AS todosCadastros;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function selectCursosFeitos()
    {
        $conn = Connection::getConnection();
        //Retorna o total de perguntas respondidas de cada user
        $stmt1 = $conn->query("SELECT COUNT(*) AS acertos FROM respostas_usuarios INNER JOIN respostas_padrao ON resposta_usuario = idrespostas_padrao INNER JOIN perguntas ON respostas_usuarios.fk_pergunta = idperguntas inner join cadastrolojaprestador on fk_usuario = idcadastrolojaprestador WHERE delecao_cadastro IS NULL GROUP BY fk_usuario;");
        //Retorna o total de perguntas dos cursos
        $stmt2 = $conn->query("SELECT count(*) AS qntdPerguntas FROM perguntas;");
        $qntdPerguntas = (int)$stmt2->fetchAll(PDO::FETCH_ASSOC)[0]['qntdPerguntas'];
        $notasFinais = [];

        foreach ($stmt1->fetchAll(PDO::FETCH_ASSOC) as $nota) {
            if ($nota['acertos'] == $qntdPerguntas) {
                array_push($notasFinais, $nota);
            }
        };

        return array(
            "qntsAcertos" => count($notasFinais),
            "qntdPerguntas" => $qntdPerguntas
        );
    }

    public static function selectMediaAnuncios()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT(SELECT COUNT(*) FROM servicos) AS qntdServicos,(SELECT COUNT(*) FROM cadastrolojaprestador) AS qntdPrestadores;");

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function selectChurn()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT(SELECT count(*) FROM cadastrobasico inner join cadastrolojaprestador on fk_cadastro = iduser WHERE cadastrolojaprestador.delecao_cadastro >= timestampadd(month,-1,now()))as saidaClientes,(SELECT count(*) FROM cadastrobasico inner join cadastrolojaprestador on fk_cadastro = iduser WHERE cadastrolojaprestador.criacao_cadastro <= timestampadd(month,-1,now()) and cadastrolojaprestador.delecao_cadastro >= timestampadd(month,-1,now()) or cadastrolojaprestador.delecao_cadastro IS NULL) as clientelaInicial;");

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}