import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

import Fundo from '../../../assets/paraisopolisfoto.png';
import CardServicos from '../../../assets/card-servicos';
import Logo from  '../../../assets/logofavelatem.png';
import Reformas from '../../../assets/parede-de-tijolos.png';
import Assistencia from '../../../assets/assets/lasca.png';
import Beleza from '../../../assets/maquiagem.png';
import Costura from '../../../assets/maquina-de-costura.png';
import Auto from '../../../assets/servico-automotivo.png';
import Camera from '../../../assets/camera-cb.png';
import Consultoria from '../../../assets/servicos-de-consultoria.png';
import Alimentacao from '../../../assets/prato-cb.png';
import Caixa from '../../../assets/caixa-de-ferramentas.png';
import Saude from '../../../assets/batimento-cardiaco.png';
import Lupa from '../../../assets/analise.png';
import Menu from '../../../assets/Menu';


import styles from './styles';


function Serviço() {
    return(
        <div className="page-servicos">
        <div className="container-fluid p-0">
          <Menu />
          <div className="section-2 pb-3">
            <nav class="navbar navbar-expand-lg navbar-dark">
              <button
                class="navbar-toggler btn btn-info"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0 w-100 justify-content-between">
  
                  <li class="nav-item">
                    <button>
                      <img src={camera} alt="" />
                      <p>Arte</p>
                    </button>
                  </li>
  
                  <li class="nav-item">
                    <button>
                      <img src={assistencia} alt="" />
                      <p>Assistência Técnica</p>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button>
                      <img src={beleza} alt="" />
                      <p>Beleza</p>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button>
                      <img src={caixa} alt="" />
                      <p>Serviços Gerais</p>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button>
                      <img src={alimentacao} alt="" />
                      <p>Alimentação</p>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button>
                      <img src={costura} alt="" />
                      <p>Moda</p>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button>
                      <img src={saude} alt="" />
                      <p>Saúde e bem-estar</p>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button>
                      <img src={consultoria} alt="" />
                      <p>Outros</p>
                    </button>
                  </li>
  
                </ul>
              </div>
            </nav>
          </div>
          <div className="section-3 row">
            <div className="filtro col-lg-2 col-md-3 col-sm-4">
              <aside className="itens">
                <ul className="mx-2">
  
                  <p>Filtrar</p>
                  <select className="form-select-sm w-100" onChange={updateSubcategorias}>
                    <option selected>Categoria</option>
                    {categorias.map((item) => {
                      return (
                        <option value={item.idcategorias_servico}>{item.categoria}</option>
                      )
                    })};
  
  
                  </select>
  
                  <select className="form-select-sm mt-2 w-100" onChange={filtrar}>
                    <option selected>Subcategoria</option>
                    {subcategorias.map((subcat) => {
                      return (
                        <option value={subcat.idsubcategorias}>{subcat.nome_subcategoria}</option>
                      )
                    })}
                  </select>
                  <div className="btn btn-block mt-2 cleanFilter" onClick={limparFiltro}>Limpar filtro</div>
                </ul>
              </aside>
            </div>
            <div className="servicos col-md-9 col-lg-10 col-sm-8 p-0">
              <div className="pesquisa">
                <div class="input-group mb-3 d-flex align-items-center justify-content-center">
                  <input
                    type="text"
                    class="form-control-sm w-75"
                    placeholder="O que você esta procurando?"
                    value={pesquisa}
                    onChange={changeStatePesquisa}
                  ></input>
                  <button className="btn btn-light" onClick={search}>
                    <img src={lupa} />
                  </button>
                </div>
              </div>
  
              <div className="group-servicos flex-wrap justify-content-center">
                {servicos.filter(servico => servico.fk_subcategoria == filtro.subcateg || filtro.subcateg === "Todos").map((servico) => {
                  return (
                    <CardServicos cartao={servico.pagamento_cartao} dinheiro={servico.pagamento_dinheiro} atenddomicilio={servico.atendimento_domicilio} atendlocal={servico.atendimento_local} imgModal={servico.imagem_servico} local={servico.logradouro + ", " + servico.numero} nome={servico.nome_fantasia} imgpessoa={servico.imagem} imgcard={servico.imagem_servico} descricao={servico.descricao_servico} id={servico.idcadastrolojaprestador} idservico={servico.idservicos} />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };



export default Serviço;