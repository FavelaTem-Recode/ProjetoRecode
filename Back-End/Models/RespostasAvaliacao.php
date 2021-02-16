<?php
require('Connection.php');

class RespostasAvaliacao
{
    public $idrespostas_avaliacao;
    public $resposta;
    public $id_prestador;
    public $id_pergunta;
    public $proxima_avaliacao;

    public function responderAvalicao()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("UPDATE respostas_avaliacao 
        SET resposta = $this->resposta,
            proxima_avaliacao = TIMESTAMPADD(MONTH,3,NOW())
        WHERE id_prestador = $this->id_prestador
        AND id_pergunta = $this->id_pergunta");
    }

}
