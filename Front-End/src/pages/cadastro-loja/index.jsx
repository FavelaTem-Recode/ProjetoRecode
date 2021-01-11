import React from 'react';
import './styleloja.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import Alerta from '../../assets/imagens/alert.png';

const Loja = () => {
    return (

        <div className="loja">

            <div class="jumbotron jumbotron-fluid">
                <div class="image">
                    <img src="./images/icons8-voltar-26.png" alt="voltar" />
                </div>
                <h3 class="title">Seja um profissional disponível no Favela Tem!</h3>

            </div>

            <div class="row d-flex justify-content-center">

                <div class="h3 col-6 form bg-white">

                    <div class="box.int">
                        <h3>Cadastre-se para divulgar seu serviço:</h3>
                        <hr />

                        <form>
                            <label for="nome">Seu nome ou nome fantasia:</label>
                            <input type="text" class="form-control" id="nome" placeholder="Input exemplo" />
                            <div />
                            <div class="form-group">
                                <label for="categoria">Categoria (separe com vírgula):</label>
                                <input type="text" class="form-control" id="categoria" placeholder="Outro input" />
                            </div>
                        </form>

                        <form>
                            <div class="form-group">
                                <label for="telefone">Telefone:</label>
                                <input type="text" class="form-control" placeholder="" />
                                <div />
                                <div class="form-group">
                                    <label for="email">E-mail:</label>
                                    <input type="text" class="form-control" placeholder="Digite seu e-mail" />
                                </div>

                            </div>

                            <div class="form-group">
                                <label for="address">Endereço:</label>
                                <input type="text" class="form-control" id="address" placeholder="Ex: Rua do Meio, nº 10" />
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputCity">Cidade</label>
                                    <input type="text" class="form-control" id="inputCity" />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputEstado">Estado</label>
                                    <select id="inputEstado" class="form-control">
                                        <option selected>Escolher...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputCEP">CEP</label>
                                    <input type="text" class="form-control" id="inputCEP" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="textarea">Fale sobre horário e público que atende:</label>
                                <textarea class="form-control" id="textarea" rows="3"></textarea>
                            </div>
                        </form>



                        <div class="portifolio">
                            <p>Portifólio</p>
                        </div>
                        <hr />
                        <div class="file">
                            <p>Poste o antes e depois de serviços que já realizou!</p>
                        </div>
                        <form>
                            <div class="file form-file">
                                <label class-for="file">Clique aqui para anexar ou arraste o arquivo para cá.</label>
                                <input type="file" class="form-control-file" id="file" />
                            </div>
                            <div class="form-group">
                                <label for="textarea">Descreva brevemente o serviço feito:</label>
                                <textarea class="form-control" id="textarea" rows="3"></textarea>
                            </div>
                        </form>
                    </div>

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

export default Loja;
