import React from 'react';
import './style.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import Alerta from '../../assets/imagens/alert.png';

const Registro = () => {
    return (

        <div className='cadastro'>
            <header className='jumbotron jumbotron-fluid pt-4 h-25 section-1'>             
                    <button><img src={Voltar} alt="botão para voltar" /></button>
                    <p>Cadastre-se no Favela Tem e encontre um profissional para sua necessidade.</p>
                    <hr />
                
            </header>


            <main className='row d-flex justify-content-center'>
                
                    <div className="h3 col-sm-6 form bg-white">
                        <form action="post">
                            <div className='formulario'>
                                <p>Insira seu dados abaixo</p>

                                <div class="form-group">
                                    <label for="nome">Nome completo:</label>
                                    <input type="text" className="form-control" id="nome" placeholder="Digite seu nome completo"
                                        name="nome" required />
                                </div>

                                <div class="form-group">
                                    <label for="email">Email:</label>
                                    <input type="email" className="form-control" name="email" id="email"
                                        placeholder="Digite seu email" />
                                </div>

                                <div class="form-group">
                                    <label for="password">Senha:</label>
                                    <input type="password" className="form-control" name='senha' id='senha'
                                        placeholder="Crie sua senha" />
                                </div>

                                <div class="form-group">
                                    <label for='confpassword'>Confirme sua senha:</label>
                                    <input type="password" className='form-control' name="confsenha" id="confsenha" placeholder="Confirme sua senha" />
                                </div>


                                <div class="form-group">
                                    <input type="checkbox" className="checkbox" name="checkbox" id="checknox" />
                                    <label for="checkbox" className="form-check-label"></label>
                                </div>
                            </div>
                            <footer className="footer">
                                <div className='alerta'>
                                    <img src={Alerta} alt='atenção' />
                                    <p>Atenção <br /> Preencha todos os dados!</p>
                                </div>
                                <div className="cadastrar">
                                    <input type="button" value="Cadastrar" />
                                </div>
                            </footer>
                        </form>
                    </div>
                

            </main>
        </div>


    )

}
export default Registro;



