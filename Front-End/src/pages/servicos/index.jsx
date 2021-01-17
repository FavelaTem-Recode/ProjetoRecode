import React from "react";

import "./style.css";
import CardServicos from "../../componentes/card-servicos";
// import  'bootstrap / dist / css / bootstrap.min.css' ;

import logo from "../../assets/imagens/logofavelatem.png";
import reformas from "../../assets/imagens/parede-de-tijolos.png";
import confeitaria from "../../assets/imagens/bolo-de-aniversario.png";
import beleza from "../../assets/imagens/maquiagem.png";
import costura from "../../assets/imagens/maquina-de-costura-cb.png";
import frete from "../../assets/imagens/caminhao-cb.png";
import camera from "../../assets/imagens/camera-cb.png";
import diarista from "../../assets/imagens/uso-domestico-cb.png";
import refeicao from "../../assets/imagens/prato-cb.png";
import lupa from "../../assets/imagens/analise.png";
import teste from "../../assets/imagens/maquininha.jpg";

import Home from "../home";

const Servicos = () => {
  const [categorias, setCategorias] = React.useState([]);
  const [subcategorias, setSubcategorias] = React.useState([]);
  const [servicos, setServicos] = React.useState([]);

  React.useEffect(async () => {
    const url = "http://projetos/ProjetoRecode/Back-End/selectCategorias.php";
    const busca = fetch(url);
    const resposta = await busca;
    const dados = await resposta.json();

    setCategorias(dados);
  }, [])

  React.useEffect(async () => {
    const url = "http://projetos/ProjetoRecode/Back-End/selectServicos.php";
    const busca = fetch(url);
    const resposta = await busca;
    const dados = await resposta.json();
    setServicos(dados);
    console.log(dados)

  }, [])

  async function updateSubcategorias(event) {
    const id = event.target.value;
    let idForm = new FormData();
    idForm.append("id", id);

    const url = "http://projetos/ProjetoRecode/Back-End/selectSubcategorias.php";
    const busca = fetch(url, {
      method: "POST",
      body: idForm
    });
    const resposta = await busca;
    const dados = await resposta.json();
    setSubcategorias(dados)
  }

  return (
    <div className="page-servicos">
      <div className="container-fluid p-0">
        <div className="section-1">
          <div className="bloco-1">
            <div className="header">
              <a href={Home}>
                <img src={logo} alt="logo" />
              </a>
              <nav>
                <button>Como funciona</button>
                <button>Login</button>
              </nav>
            </div>
          </div>
        </div>
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
                    <img src={reformas} alt="" />
                    <p>Reforma</p>
                  </button>
                </li>

                <li class="nav-item">
                  <button>
                    <img src={confeitaria} alt="" />
                    <p>Confeitaria</p>
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
                    <img src={costura} alt="" />
                    <p>Costura</p>
                  </button>
                </li>
                <li class="nav-item">
                  <button>
                    <img src={camera} alt="" />
                    <p>Fotografia</p>
                  </button>
                </li>
                <li class="nav-item">
                  <button>
                    <img src={diarista} alt="" />
                    <p>Diarista</p>
                  </button>
                </li>
                <li class="nav-item">
                  <button>
                    <img src={refeicao} alt="" />
                    <p>Refeição</p>
                  </button>
                </li>
                <li class="nav-item">
                  <button>
                    <img src={frete} alt="" />
                    <p>Frete</p>
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

                <select className="form-select-sm mt-2 w-100">
                  {subcategorias.map((subcat) => {
                    return (
                      <option id={subcat.idsubcategorias}>{subcat.nome_subcategoria}</option>
                    )
                  })}
                </select>
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
                ></input>
                <button className="btn btn-light">
                  <img src={lupa} />
                </button>
              </div>
            </div>

            <div className="group-servicos flex-wrap justify-content-center">
              {servicos.map((servico)=>{
                return(
                  <CardServicos local={servico.logradouro+", "+servico.numero} nome={servico.nome_fantasia} imgpessoa={servico.imagem} imgcard={servico.imagem_servico} descricao={servico.descricao_servico} id={servico.idcadastrolojaprestador}/>
                )
              })}
              <CardServicos local="Rua X" nome="José Test" imgpessoa={teste} imgcard={teste} descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum quo nisi rem voluptatem distinctio corrupti laudantium necessitatibus commodi. Cupiditate excepturi voluptatem nam enim eveniet libero iste debitis aliquid explicabo." />
              <CardServicos local="Rua X" nome="José Test" imgpessoa={teste} imgcard={teste} descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum quo nisi rem voluptatem distinctio corrupti laudantium necessitatibus commodi. Cupiditate excepturi voluptatem nam enim eveniet libero iste debitis aliquid explicabo." />
              <CardServicos local="Rua X" nome="José Test" imgpessoa={teste} imgcard={teste} descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum quo nisi rem voluptatem distinctio corrupti laudantium necessitatibus commodi. Cupiditate excepturi voluptatem nam enim eveniet libero iste debitis aliquid explicabo." />
              <CardServicos local="Rua X" nome="José Test" imgpessoa={teste} imgcard={teste} descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum quo nisi rem voluptatem distinctio corrupti laudantium necessitatibus commodi. Cupiditate excepturi voluptatem nam enim eveniet libero iste debitis aliquid explicabo." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
