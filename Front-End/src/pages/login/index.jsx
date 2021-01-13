import React from 'react';
import './stylelogin.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';

const Login = () => {
    return (

        <div className="login">
            <div class="jumbotron jumbotron-fluid h-25 pt-4">
                <div class="image">
                    <img src={Voltar} alt="voltar" />
                </div>
            </div>

            <div class="container-fluid flex-column d-flex h-75 align-items-center justify-content-top paraisopolis">
                <div class="form bg-white w-75 px-3 pt-3">
                    <h3>Seja bem-vindo(a)!</h3>
                    <div class="link">
                        <a href="#">
                            Ainda não tem uma conta?
                        </a>
                    </div>
                    <hr />
                    <form className="form-log">
                        <div class="form-group">
                            <label for="email">Endereço de email</label>
                            <input type="email" class="form-control" id="email" placeholder="Digite aqui seu email" />
                        </div>
                        <div class="form-group">
                            <label for="password">Senha</label>
                            <input type="password" class="form-control" id="password" placeholder="Digite sua senha" />
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Lembrar sua senha</label>
                        </div>
                    </form>
                    <div class="link">
                        <a href="#">Esqueceu sua senha?</a>
                    </div>
                </div>
                <footer className="w-75 p-3">
                        <button type="submit" class="btn m-0">Entrar</button>
                </footer>

            </div>
        </div>
    )
}

export default Login;