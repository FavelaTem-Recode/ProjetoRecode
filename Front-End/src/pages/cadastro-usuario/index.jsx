import React from 'react';
import './stylerg.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import Alerta from '../../assets/imagens/alert.png';

const Registro = () => {
    return (

        <div className="registro">

            <div class="jumbotron jumbotron-fluid">
                <div class="image">
                    <img src={Voltar} alt="voltar" />
                </div>
                <h3 class="title">Cadastre-se no Favela Tem e encontre um profissional Paraísopolis.</h3>

            </div>


            <div class="row d-flex justify-content-center">

                <div class="h3 col-6 form bg-white">

                    <form>
                        <div class="box.int">
                            <h3>Insira seus dados abaixo:</h3>
                            <hr />

                            <div class="form-group">
                                <label for="nome">Nome completo:</label>
                                <input type="text" class="form-control" id="nome" placeholder="Digite o nome do seu serviço" name="nome" required />

                            </div>
                            <div class="form-group">
                                <label for="email">Endereço de email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Digite aqui seu email" />

                            </div>
                            <div class="form-group">
                                <label for="password">Senha:</label>
                                <input type="password" class="form-control" id="password" placeholder="Crie uma senha" />
                            </div>
                            <div class="form-group">
                                <label for="confpassword">Confirme sua senha:</label>
                                <input type="password" class="form-control" id="confpassword" placeholder="Confirme sua senha" />
                            </div>

                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Li e concordo com os termos de uso e a Política de Privacidade.</label>
                            </div>
                        </div>

                    </form>
                    <div class="footer">
                        <footer>
                            <div class="alert">

                                <img src={Alerta} alt="alert" />
                                <p>Importante!<br />Preencha todos os dados.</p>
                            </div>

                            <div>
                                <button type="submit" class="btn">Salvar cadastro</button>
                            </div>
                        </footer>
                    </div>
                </div>

            </div>

        </div>


    )


}
export default Registro;
