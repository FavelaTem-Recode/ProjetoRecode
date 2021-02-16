import React from "react";
import { Link } from "react-router-dom";

import Menu from "../../componentes/Menu";
import Apoio from "../../componentes/Apoio";

import "./stylehub.css";


import $ from 'jquery';

const Hub = () => {
  const [dados, setDados] = React.useState([]);
  const [pesquisa, setPesquisa] = React.useState(false);

  React.useEffect(async () => {
    const url = "http://projetos/ProjetoRecode/Back-End/selectPrestadorByLogin.php";
    const form = new FormData();
    form.append('email', localStorage.getItem('login'))
    form.append('senha', localStorage.getItem('senha'))
    const envio = fetch(url, {
      method: "POST",
      body: form
    })
    const response = await envio;
    const res = await response.json();
    setDados(res)
  }, [])

  React.useEffect(() => {
    async function checkAvaliacao() {
      const url = "http://projetos/ProjetoRecode/Back-End/checkPesquisa.php";
      const form = new FormData();
      form.append('email', localStorage.getItem('login'))
      form.append('senha', localStorage.getItem('senha'))
      const envio = fetch(url, {
        method: "POST",
        body: form
      })
      const response = await envio;
      const res = await response.json();
      setPesquisa(res);
    };
    checkAvaliacao();
  }, [])

  React.useEffect(() => {
    if (pesquisa.pesquisa === true) {
      window.$('#exampleModal').modal('show');
    }
  }, [pesquisa])

  const [cursos, setCursos] = React.useState([])
  React.useEffect(async () => {
    const url = 'http://projetos/ProjetoRecode/Back-End/selectAllCursos.php';
    const envio = fetch(url)
    const response = await envio;;
    const res = await response.json()
    setCursos(res);    

  });

  if (dados[0] != null) {
    return (
      <div className="hub">
        <div className="container-fluid">
          <div className="section-1">
            <div className="bloco-1">
              <Menu />
            </div>
          </div>
          <div className="section-principal">
            <div className="section-user">
              <aside className="inf-user">
                <div className="foto-user">
                  <img src={dados[0].imagem} className="rounded-circle" alt="foto usuario" />
                </div>
                <div className="name-user text-center">
                  <p>{dados[0].nome_fantasia}</p>
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
                <div className="btns">
                  <Link className="btn" to={`/portifolio?&id=${dados[0].idcadastrolojaprestador}`}>Meu perfil</Link>
                  <Link className="btn" to="/cadportifolio">Adicionar Portfólio</Link>
                  <Link className="btn" to="/servico">Criar Anúncio</Link>
                  <Link className="btn" to="/updateloja">Atualizar perfil</Link>
                  <button className="btn btn-large" data-toggle="modal" data-target="#exampleModal">Abrir modal</button>
                </div>
              </aside>
            </div>
            <div className="conteudo">
              <div class="modal" tabindex="-1" role="dialog" id="exampleModal">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Pesquisa de satisfação</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form id="form-pesquisa">
                        <div class="form-group">
                          <label for="pergunta1">O FavelaTem ajudou a melhorar seu negócio?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="pergunta[]" value="1" id="simAjudou" />
                            <label class="form-check-label" for="defaultCheck1">
                              Sim
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="pergunta[]" value="0" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Não
                              </label>
                          </div>
                          <input type="text" name="idpergunta[]" value="1" hidden />
                        </div>

                        <div class="form-group">
                          <label for="pergunta1">Após a divulgação no FavelaTem sua clientela aumentou?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="pergunta[]" value="1" id="simAjudou" />
                            <label class="form-check-label" for="defaultCheck1">
                              Sim
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="pergunta[]" value="0" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Não
                              </label>
                          </div>
                          <input type="text" name="idpergunta[]" value="2" hidden />
                        </div>

                        <div class="form-group">
                          <label for="pergunta1">Após a divulgação do seu serviço no FavelaTem seu rendimento mensal aumentou?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="pergunta[]" value="1" id="simAjudou" />
                            <label class="form-check-label" for="defaultCheck1">
                              Sim
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="pergunta[]" value="0" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Não
                              </label>
                          </div>
                          <input type="text" name="idpergunta[]" value="3" hidden />
                        </div>

                        <div class="form-group">
                          <label for="pergunta1">Se aumentou, quanto foi aproximadamente?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="pergunta[]" value="1" id="simAjudou" />
                            <label class="form-check-label" for="defaultCheck1">
                              Menos de 10%
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="pergunta[]" value="0" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Mais de 10%
                              </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="pergunta[]" value="0" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Mais de 30%
                              </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="pergunta[]" value="0" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Mais de 50%
                              </label>
                          </div>
                          <input type="text" name="idpergunta[]" value="4" hidden />
                        </div>

                        <div class="form-group">
                          <label for="pergunta1">Você indicaria o FavelaTem?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="pergunta[]" value="1" id="simAjudou" />
                            <label class="form-check-label" for="defaultCheck1">
                              Sim
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="pergunta[]" value="0" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Não
                              </label>
                          </div>
                          <input type="text" name="idpergunta[]" value="5" hidden />
                        </div>

                        <div class="form-group">
                          <label for="comentario">Faça um comentário:</label>
                          <textarea name="pergunta[]" className="form-control" id="comentario" rows="3"></textarea>
                          <input type="text" name="idpergunta[]" value="6" hidden />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary">Enviar</button>
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursos">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    {cursos.map((itemCurso) => {
                      if (itemCurso === cursos[0]) {
                        return (
                          <div class="carousel-item active">
                            <img src={itemCurso.imagem_curso} className="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                              <Link to={`/cursos?&id=${itemCurso.idcursos}`}>
                                <h5>{itemCurso.nome_curso}</h5>
                              </Link>                              
                              <p>{itemCurso.descricao}</p>
                            </div>
                          </div>
                        )
                      } else {
                        return (
                          <div class="carousel-item ">
                            <img src={itemCurso.imagem_curso} className="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                              <Link to={`/cursos?&id=${itemCurso.idcursos}`}>
                                <h5>{itemCurso.nome_curso}</h5>
                              </Link>
                              <p>{itemCurso.descricao}</p>
                            </div>
                          </div>
                        )
                      }
                    })
                  }
                   
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>

              </div>

              <div style={{ margin: 50 }}>

                <p>Apio: </p>
                <Apoio />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (<h1>Buscando dados</h1>)
  };
};

export default Hub;
