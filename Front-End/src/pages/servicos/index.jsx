import React from 'react';
import { Container } from 'react-bootstrap';

import './style.css';
// import  'bootstrap / dist / css / bootstrap.min.css' ;

import logo from '../../assets/imagens/logofavelatem.png';
import reformas from '../../assets/imagens/parede-de-tijolos.png';
import confeitaria from '../../assets/imagens/bolo.png';
import beleza from '../../assets/imagens/salao.png';
import costura from '../../assets/imagens/maquina-de-costura.png';
import frete from '../../assets/imagens/caminhao.png';
import camera from '../../assets/imagens/camera.png';
import diarista from '../../assets/imagens/uso-domestico.png';
import refeicao from '../../assets/imagens/prato.png';


const Servicos = () => {
    return (

        <div className="section-1">
            <div className="container-1">
                <div className="header">
                    <a><img src={logo} alt="logo" /></a>
                    <nav>
                        <button > Como funciona</button>
                        <button>Login</button>
                    </nav>
                </div>
                <div className="section-2">
                    <div className="container-2 fluid">
                        <div className="categorias">
                            <div className="cat-1">
                                <img src={reformas} alt="" />
                                <p>Reformas</p>
                            </div>
                            <div className="cat-1">
                                <img src={confeitaria} alt="" />
                                <p>Confeitaria</p>
                            </div>
                            <div className="cat-1">
                                <img src={beleza} alt="" />
                                <p>beleza</p>
                            </div>
                            <div className="cat-1">
                                <img src={costura} alt="" />
                                <p>Costura</p>
                            </div>
                            <div className="cat-1">
                                <img src={frete} alt="" />
                                <p>Fretes</p>
                            </div>
                            <div className="cat-1">
                                <img src={camera} alt="" />
                                <p>Fotografia</p>
                            </div>
                            <div className="cat-1">
                                <img src={diarista} alt="" />
                                <p>Diaristas</p>
                            </div>
                            <div className="cat-1">
                                <img src={refeicao} alt="" />
                                <p>Refeição</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-3">
                    <div className="container-3">
                        <div className="principal">
                            <main>

                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Servicos;