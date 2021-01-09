import React from 'react';

import './style.css';
// import  'bootstrap / dist / css / bootstrap.min.css' ;

import logo from '../../assets/imagens/logofavelatem.png';
import reformas from '../../assets/imagens/parede-de-tijolos.png';
import confeitaria from '../../assets/imagens/bolo-de-aniversario.png';
import beleza from '../../assets/imagens/maquiagem.png';
import costura from '../../assets/imagens/maquina-de-costura-cb.png';
import frete from '../../assets/imagens/caminhao-cb.png';
import camera from '../../assets/imagens/camera-cb.png';
import diarista from '../../assets/imagens/uso-domestico-cb.png';
import refeicao from '../../assets/imagens/prato-cb.png';
import lupa from '../../assets/imagens/analise.png'

import Home from '../home';


const Servicos = () => {
    return (
        <div className="container-fluid">
            <div className="section-1">
                <div className="bloco-1">
                    <div className="header">
                        <a href={Home}><img src={logo} alt="logo" /></a>
                        <nav>
                            <button>Como funciona</button>
                            <button>Login</button>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="section-2 ">
                <div className="nav navbar-expand-lg mr-auto mr-6">
                    <div className="categorias">
                        <button>
                            <img src={reformas} alt="" />
                            <p>Reforma</p>
                        </button>
                        <button>
                            <img src={confeitaria} alt="" />
                            <p>Confeitaria</p>
                        </button>
                        <button>
                            <img src={beleza} alt="" />
                            <p>Beleza</p>
                        </button>
                        <button>
                            <img src={costura} alt="" />
                            <p>Costura</p>
                        </button>
                        <button>
                            <img src={camera} alt="" />
                            <p>Fotografia</p>
                        </button>
                        <button>
                            <img src={diarista} alt="" />
                            <p>Diarista</p>
                        </button>
                        <button>
                            <img src={refeicao} alt="" />
                            <p>Refeição</p>
                        </button>
                        <button>
                            <img src={frete} alt="" />
                            <p>Frete</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="section-3">
                <div className="filtro">
                    <aside className="itens">
                        <ul>
                            <p>Filtrar</p>
                            <select class="form-select-sm " aria-label="Default select example">
                                <option selected>Todos os Serviços</option>
                                <option value="1">Reforma</option>
                                <option value="2">Confeitaria</option>
                                <option value="3">Frete</option>
                                <option value='4'>Diarista</option>
                                <option value='5'>Refeição</option>
                                <option value="6">Costura</option>
                                <option value="7">Grafica</option>
                                <option value="8">Beleza</option>
                            </select>
                        </ul>
                    </aside>
                </div>
                <div className="servicos">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control-sm" placeholder="O que você esta procurando?" aria-label="Username" aria-describedby="basic-addon1"></input>
                        <button className="btn-group-toggler"><img src={lupa}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicos;