import React from 'react';
import './styleservico.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import Alerta from '../../assets/imagens/alert.png';

const Servico = () => {
    return (
        <div className="servico">
            <div class="jumbotron jumbotron-fluid h-25 pt-4 header-servico">
                <div class="image">
                    <button><img src={Voltar} alt="voltar" /></button>
                </div>
            </div>
            <div class="container-fluid flex-column d-flex h-75 align-items-center justify-content-top paraisopolis">
                <div class="form bg-white w-50 px-4 pt-3">
                    <h3>Dados do serviço!</h3>
                    <hr />
                    <form className="form-log">
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
                        <div class="checks">
                            <div class="atendimento custom-control">
                                <p>Atendimento</p>
                                <input class="custom-control-input" type="checkbox" name="caracteristica" id="alto" value="Alto" />
                                <label id="pclaro" class="custom-control-label" for="alto">
                                    Domicilio</label>
                                <input class="custom-control-input" type="radio" name="caracteristica" id="rapido" value="Rápido" />
                                <label id="pclaro" class="custom-control-label" for="rapido">
                                    No local </label>
                            </div>
                            <div class="atendimento custom-control">
                                <p >Pagamento</p>
                                <input class="custom-control-input" type="checkbox" name="caracteristica" id="alto" value="Alto" />
                                <label id="pclaro" class="custom-control-label" for="alto">
                                    Dinheiro</label>
                                <input class="custom-control-input" type="radio" name="caracteristica" id="rapido" value="Rápido" />
                                <label id="pclaro" class="custom-control-label" for="rapido">
                                    Cartão </label>
                            </div>
                            <div class="p custom-control">
                                <p>Horário de atendimento:</p>
                                <textarea type="date" class="custom-control-input" name="caracteristica" id="alto"
                                    value="" />
                                <textarea class="custom-control-label" for="alto">
                                </textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <footer className="w-50 p-3">
                    <div className="azul">
                        <div className="inferior">
                            <div id="alerta">
                                <img src={Alerta} alt="voltar" />
                            </div>
                            <div id="alertap">
                                <p>Importante!</p>
                                <p>Preencha todos os dados</p>
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="cadserv btn m-0">Cadastrar serviço</button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Servico;