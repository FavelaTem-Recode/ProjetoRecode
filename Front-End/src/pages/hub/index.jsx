import React from 'react';

import './stylehub.css';

import logo from '../../assets/imagens/logofavelatem.png'

const Hub = () => {
    return(
        <div className="container-fluid">
            <div className="section-1">
                <div className="bloco-1">
                    <div className="header">
                        <a href=""><img src={logo} alt="logo" /></a>
                        <nav>
                            <button>Como funciona</button>
                            <button>Login</button>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="section-user">
                <aside className="inf-user">
                    <img src="" alt="foto usuario"/>
                    <h4>DACA PRINT</h4>
                    <div>
                        retorno do banco
                        <p>Pontos</p>
                    </div>
                    <div>
                        atividade
                        <p>atividades</p>
                    </div>
                    <div>
                        qnt banco
                        <p>anúncios</p>
                    </div>
                    <div>
                        <ul>
                            <li>Nivel</li>
                            <li>EXP</li>
                        </ul>                        
                    </div>
                    <div>
                        <button>Portifólio</button>
                        <button>Perfil</button>
                    </div>
                </aside>
            </div>
        </div>        
    )
}

export default Hub;