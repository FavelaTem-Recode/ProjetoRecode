import React from 'react';
import './styleloja.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import Alerta from '../../assets/imagens/alert.png';

const Loja = () => {
    async function cadloja (event){
        event.preventDefault()
        console.log(event);

        const url = "http://projetos/ProjetoRecode/Back-End/registerPrestador.php";
        const form = new FormData(event.target);
        form.append('email', localStorage.getItem('login'))
        form.append('senha', localStorage.getItem('senha'))
        const envio = fetch(url, {
            method: "POST",
            body: form
        })
        const response = await envio;
        const res = await response.json();
        console.log(res);
            
    }
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

                        <form onSubmit={cadloja} id="cadloja">
                            <label for="nome">Seu nome ou nome fantasia:</label>
                            <input type="text" class="form-control" id="nome" name="nomefantasia" placeholder="Input exemplo" />

                            <div class="form-group">
                                <label for="telefone">Telefone:</label>
                                <input type="text" class="form-control" name="telefone" placeholder="" />
                            </div>

                            <div className="form-row">
                                <div class="form-group col-md-9">
                                    <label for="address">Endereço:</label>
                                    <input type="text" name="rua"class="form-control" id="address" placeholder="Rua do Meio" />
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="address">Número:</label>
                                    <input type="text" name="numero" class="form-control" id="address" placeholder="1000" />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="inputCity">Cidade</label>
                                    <select name="cidade"class="form-control" id="inputCity" >
                                    <option value="SP" >São Paulo</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputEstado" >Estado</label>
                                    <select id="inputEstado" name="estado" class="form-control">
                                        <option value="SP" >São Paulo</option>                                        
                                    </select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="bairro">Bairro</label>
                                    <select name="bairro" class="form-control" id="bairro" >
                                    <option value="Paraisópolis" >Paraisópolis</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputCEP">CEP</label>
                                    <input type="text" name="cep" class="form-control" id="inputCEP" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="textarea">Descreva seu trabalho em geral,públicos que atende, etc:</label>
                                <textarea class="form-control" id="textarea" rows="3" name="descricao"></textarea>
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
                                <button type="submit" class="btn" form="cadloja">Cadastrar</button>
                            </div>
                        </footer>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Loja;
