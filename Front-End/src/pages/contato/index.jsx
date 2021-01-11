import React from 'react';
import './stylecontato.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import Alerta from '../../assets/imagens/alert.png';

const Contato = () => {
    return (

        <div className="contato">

            <nav class="navbar-nav navbar-expand-lg navbar-light bg-white">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="logo" href="#"><img src="./images/favelatemlogobranco.png" alt="voltar" /></a>
                    <div class="link">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="link" href="#">COMO FUNCIONA <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="link" href="#">ENTRAR</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

            <div class="jumbotron jumbotron-fluid">
                <div class="image">
                    <img src={Voltar} alt="voltar" />
                </div>
                <h3 class="title">Alguma dúvida, comentário ou sugestão?<br /> Conte para gente =D</h3>
            </div>
            <div class="row d-flex justify-content-center">

                <div class="h3 col-6 form bg-transparent">

                    <div class="box.int">

                        <form>
                            <div class="form-group">
                                <label for="nome">Seu nome:</label>
                                <input type="text" class="form-control" id="nome" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="email">Seu e-mail:</label>
                                <input type="text" class="form-control" id="email" placeholder="" />
                            </div>

                            <div class="form-group">
                                <label for="textarea">Sua mensagem:</label>
                                <textarea class="form-control" id="textarea" rows="3"></textarea>
                            </div>
                        </form>

                        <div class="portifolio">


                            <div class="footer">
                                <footer>
                                    <div class="alert">

                                        <img src={Alerta} alt="alert" />
                                        <p>Importante!<br />Preencha todos os dados.</p>
                                    </div>

                                    <div>
                                        <button type="submit" class="btn">Entrar</button>
                                    </div>

                                </footer>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contato;