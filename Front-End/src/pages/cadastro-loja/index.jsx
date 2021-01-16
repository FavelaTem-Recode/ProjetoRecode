import React from 'react';
import './styleloja.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import Alerta from '../../assets/imagens/alert.png';

const Loja = () => {
    return (

        <div className="loja">

            <div class="jumbotron jumbotron-fluid py-5">
                <div class="image">
                    <img src={Voltar} alt="voltar" />
                </div>
                <h3 class="title">Seja um profissional disponível no Favela Tem!</h3>

            </div>

            <div class="row d-flex justify-content-center">

                <div class="h3 col-md-8 col-lg-6 form bg-white form-inteiro">

                    <div class="box.int p-3">
                        <h3>Cadastre-se para divulgar seu serviço:</h3>
                        <hr />

                        <form>
                            <label for="nome">Seu nome ou nome fantasia:</label>
                            <input type="text" class="form-control" id="nome" placeholder="Input exemplo" />

                            <div class="form-group">
                                <label for="telefone">Telefone:</label>
                                <input type="text" class="form-control" placeholder="" />

                            </div>

                            <div className="form-row">
                                <div class="form-group col-md-9">
                                    <label for="address">Endereço:</label>
                                    <input type="text" class="form-control" id="address" placeholder="Rua do Meio" />
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="address">Número:</label>
                                    <input type="text" class="form-control" id="address" placeholder="1000" />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="inputCity">Cidade</label>
                                    <input type="text" class="form-control" id="inputCity" />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputEstado">Estado</label>
                                    <select id="inputEstado" class="form-control">
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espírito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP" selected>São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputCEP">CEP</label>
                                    <input type="text" class="form-control" id="inputCEP" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="textarea">Descreva seu trabalho em geral,públicos que atende, etc:</label>
                                <textarea class="form-control" id="textarea" rows="3"></textarea>
                            </div>
                        </form>
                    </div>

                    <div class="footer">
                        <footer>
                            <div class="alert">
                                <img src={Alerta} alt="alert" />
                                <p className="pl-2 m-0">Importante!<br />Preencha todos os dados.</p>
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
