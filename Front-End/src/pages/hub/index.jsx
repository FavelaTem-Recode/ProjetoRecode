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
                    <div className="foto-user">
                        <img src="" alt="foto usuario"/>
                    </div>
                    <div className="name-user">
                        <p>Nome Usuario/Loja</p>
                    </div>          
                    <div className="pontos">
                        <p>50</p>
                        <p>pontos</p>
                    </div>
                    <div className="atividades">
                        <p>1/3</p>
                        <p>atividades</p>
                    </div>
                    <div className="anuncios">
                        <p>10</p>
                        <p>anúncios</p>
                    </div>
                    <div className="experiencia">
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