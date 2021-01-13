import React from "react";
import "./style.css";
import logo from "../../assets/imagens/logofavelatem.png";
import tesoura from "../../assets/imagens/tesoura.png";
import voltar from "../../assets/imagens/setaesquerda.png";
import avancar from "../../assets/imagens/setadireita.png";
import beleza from "../../assets/imagens/belezaaa.jpg";
import zap from "../../assets/imagens/whatsapp.png";



const Portifolio = () => {

    function showForm() {
        var comentario = document.getElementById('toShow');
        console.log(comentario)
        comentario.hidden = !comentario.hidden

    }
    return (
        <div className="portfolio">
            <header className="header">
                <img src={logo} alt="logo" />
                <nav>
                    <button><a href="#qs">Como funciona</a></button>
                    <button>Login</button>
                </nav>
            </header>
            <section class="section1 container-fluid">
                <div class="voltar">
                    <h4> Voltar para buscas</h4>
                </div>
                <div class="tesoura">
                    <img src={tesoura} alt="logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div class="primeiro col-lg-6 col-sm-12">
                            <h4 class="topo"> nome da loja </h4>
                            <div className="corpo descricao"> <p>Trabalhamos com preparo de cabelo maquiagem e manicure
                    para eventos como casamento, formatura, e festas especificas. </p></div>
                        </div>
                    </div>
                    <div class="segundo row my-2 d-flex justify-content-center align-items-stretch">
                        <div class="one">
                            <h4 class="topo"> Nosso endereço </h4>
                            <div className="corpo">
                                <p>rua das dores numero zero</p>
                            </div>

                        </div>
                        <div class="one">
                            <h4 class="topo"> Contato </h4>
                            <div className="corpo">
                                <p>meuemail@contato.com </p>
                                <button className="btn btn-dark">Whatsapp</button>
                            </div>
                        </div>
                    </div>
                    <div class="terceiro container d-flex justify-content-center">
                        <div class="two my-2 mx-1">
                            <p class="p-servico">TITURALKJSAHFFVJKS </p>
                        </div>
                        <div class="two my-2 mx-1">
                            <p class="p-servico">TITURHDFLKJSAHFFVJKS </p>
                        </div>
                        <div class="two my-2 mx-1">
                            <p class="p-servico">TITURAKJDHFKSJKS </p>
                        </div>
                        <div class="two my-2 mx-1">
                            <p class="p-servico">TITURAVJKS </p>
                        </div>
                        <div class="two my-2 mx-1">
                            <p class="p-servico">TITURAKJDHFKSHDFLKJSAHFFVJKS </p>
                        </div>
                        <div class="two my-2 mx-1">
                            <p class="p-servico">TITURAKJFVJKS </p>
                        </div>
                        <div class="two my-2 mx-1">
                            <p class="p-servico">TITURAKJDHFJSAHFFVJKS </p>
                        </div>
                        <div class="two my-2 mx-1">
                            <p class="p-servico">TITURAKJDHFKSHDFAHFFVJKS </p>
                        </div>

                    </div>
                </div>
            </section>
            <div class="quarto container d-flex align-items-center flex-column">
                <div class="um1">
                    <h3>Portfólio</h3>
                </div>

                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={beleza} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={beleza} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={beleza} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
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
                </div>
            </div>


            <section class="section3 container py-2">
                <div id="comenttitulo">
                    <h2>Comentários</h2>
                    <div class="coment">
                        <p> Nome de quem comentou </p>
                        <p> Data e hora </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget placerat massa, ut tincidunt eros. Pellentesque ac lorem ipsum. Vestibulum dapibus pretium nisl in vehicula. Nulla ut justo commodo, lobortis purus in, ultricies eros. Duis sodales, magna blandit dapibus iaculis, augue orci dignissim sem, at luctus eros diam vitae ligula. Donec sit amet dui ultricies, vehicula libero ut, ultrices nunc. Fusce laoreet hendrerit magna, sed rutrum neque egestas nec.</p>
                    </div>
                </div>
                <div class="test2">
                    <button type="button" onClick={showForm}>+Comentarios</button>
                </div>


                <div id="toShow" hidden>
                    <p>Comentarios:</p>
                    <div class="coment">
                        <p>nome da loja </p>
                        <textarea id="w3review" name="comentario" placeholder="Digite aqui seu comentário!" rows="4" cols="50" className="w-100"></textarea>
                        <div class="test2">

                            <button type="submit">Enviar comentario</button>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    )
}
export default Portifolio;