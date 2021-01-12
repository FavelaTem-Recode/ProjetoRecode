import React from "react";

import "./stylehub.css";

import logo from "../../assets/imagens/logofavelatem.png";
import consultoria from "../../assets/imagens/consultoria.png";
import marketing from "../../assets/imagens/marketing-digital.png";
import empreendedorismo from "../../assets/imagens/empreendedorismo.png";

const Hub = () => {
  return (
    <div className="hub">
      <div className="container-fluid">
        <div className="section-1">
          <div className="bloco-1">
            <div className="header">
              <a href="">
                <img src={logo} alt="logo" />
              </a>
              <nav>
                <button>Como funciona</button>
                <button>Login</button>
              </nav>
            </div>
          </div>
        </div>
        <div className="section-principal">
          <div className="section-user">
            <aside className="inf-user">
              <div className="foto-user">
                <img src="" alt="foto usuario" />
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
              <div className="btns">
                <button className="btn">Portifólio</button>
                <button className="btn">Perfil</button>
              </div>
            </aside>
          </div>
          <div className="conteudo">
            <div className="cursos">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={consultoria}
                      class="consultoria-empresarial"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Consultoria</h5>
                      <p>
                        Um curso completo com dicas para melhor administrar seu
                        negócio.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={marketing} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Marketing Digital</h5>
                      <p>
                        Descubra como seu negócio pode evoluir com nosso curso
                        de Marketing.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src={empreendedorismo}
                      class="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Empreendedorismo</h5>
                      <p>Otimas dicas e sugestões para seu negócio evoluir!</p>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Anterior</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Próximo</span>
                </a>
              </div>

              {/* <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={marketing} className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block bg-dark">
                      <h5>First slide label</h5>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={marketing} className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block bg-dark">
                      <h5>Second slide label</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={marketing} className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block bg-dark">
                      <h5>Third slide label</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div> */}

            </div>

            <div className="propaganda">
              <h1>
                Sua Empresa aqui! Sendo vista por mais de 400 Mil Pessoas.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hub;
