import React from 'react';
import './styleservico.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import Alerta from '../../assets/imagens/alert.png';

const Servico = () => {
    return (

        <div className="servico">

            <div class="jumbotron jumbotron-fluid">
                <div class="image">
                    <img src={Voltar} alt="voltar" />
                </div>
                <h3 class="title">Seja um profissional disponível no Favela Tem!</h3>

            </div>

            <div class="row d-flex justify-content-center">

                <div class="h3 col-6 form bg-white">

                    <div class="box.int">
                        <h3>Cadastre-se aqui e seja visto:</h3>
                        <hr />

                        <div class="form-group">
                            <label for="nome">Nome do serviço:</label>
                            <input type="text" class="form-control" id="nome" placeholder="Digite o nome do seu serviço"
                                name="nome" required />

                        </div>
                        <div class="form-group">
                            <label for="nome">Categorias (separe com vírgula):</label>
                            <input type="text" class="form-control" id="nome"
                                placeholder="Digite a categoria, ex: moda, beleza, manutenção" name="nome" required />

                        </div>
                        <div class="form-group">
                            <label for="nome">Descreva o seu serviço aqui:</label>
                            <input type="text" class="form-control" id="nome" placeholder="Digite aqui o que você faz"
                                name="nome" required />

                        </div>
                        <div class="checkbox1">

                            <div class="p custom-control custom-radio">
                                <p>Atendimento:</p>
                                <input class="custom-control-input" type="checkbox" name="caracteristica" id="alto"
                                    value="Alto" />
                                <label class="custom-control-label" for="alto">
                                    Em domicílio
                        </label>
                            </div>
                            <div class="p custom-control custom-radio">
                                <input class="custom-control-input" type="radio" name="caracteristica" id="rapido"
                                    value="Rápido" />
                                <label class="custom-control-label" for="rapido">
                                    No local
                        </label>
                            </div>
                            <br />
                            <div class="p custom-control custom-radio">
                                <p>Horário de atendimento:</p>
                                <input class="custom-control-input" type="checkbox" name="caracteristica" id="alto"
                                    value="Alto" />
                                <label class="custom-control-label" for="alto">
                                    Das
                        </label>
                            </div>
                            <div class="p custom-control custom-radio">
                                <input class="custom-control-input" type="checkbox" name="caracteristica" id="rapido"
                                    value="Rápido" />
                                <label class="custom-control-label" for="rapido">
                                    Até
                        </label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="checkbox2">
                        <div class="custom-control custom-radio">
                            <p>Pagamento:</p>
                            <input class="custom-control-input" type="checkbox" name="caracteristica" id="alto" value="Alto" />
                            <label class="custom-control-label" for="alto">
                                Apenas dinheiro
                    </label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input class="custom-control-input" type="checkbox" name="caracteristica" id="rapido"
                                value="Rápido" />
                            <label class="custom-control-label" for="rapido">
                                Aceitamos cartão
                    </label>
                        </div>
                    </div>
                    <br />
                    <div class="file">
                        <p>Envie a foto do ser serviço. Capriche pois esta será a cara do seu anúncio!</p>
                    </div>
                    <form>
                        <div class="file form-file">
                            <label class-for="file">Clique aqui para anexar ou arraste o arquivo para cá.</label>
                            <input type="file" class="form-control-file" id="file" />
                        </div>
                    </form>
                    <div class="footer">
                        <footer>
                            <div class="alert">

                                <img src={Alerta} alt="alert" />
                                <p>Importante!<br />Preencha todos os dados.</p>
                            </div>

                            <div>
                                <button type="submit" class="btn">Cadastrar</button>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Servico;