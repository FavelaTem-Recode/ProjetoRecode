import React from "react";
import "./style.css";
import logo from "../../assets/imagens/logofavelatem.png";
import tesoura from "../../assets/imagens/tesoura.png";
import voltar from "../../assets/imagens/setaesquerda.png";
import avancar from "../../assets/imagens/setadireita.png";
import beleza from "../../assets/imagens/belezaaa.jpg";
import zap from "../../assets/imagens/whatsapp.png";



const Portifolio = () => {
    return (
        <div>
            <header className="header">
                <img src={logo} alt="logo" />
                <nav>
                    <button><a href="#qs">Como funciona</a></button>
                    <button>Login</button>
                </nav>
            </header>
            <section class="section1">
                <div class="voltar">
                    <h4> Voltar para buscas</h4>
                </div>
                <div class="tesoura">
                    <img src={tesoura} alt="logo" />
                </div>
                <div class="primeiro">
                    <h4 class="topo"> nome da loja </h4>
                    <p class="corpo">Trabalhamos com preparo de cabelo maquiagem e manicure
                    para eventos como casamento, formatura, e festas especificas. </p>
                </div>
                <div class="segundo">
                    <div class="one">
                        <h4 class="topo">> Nosso endereço </h4>
                        <p class="corpo">rua das dores numero zero</p>
                    </div>
                    <div class="one">
                        <h4 class="topo">> Contato </h4>
                        <p class="corpo">meuemail@contato.com </p>
                    </div>
                    <div class="one">
                        <h4 class="topo">> Atendemos </h4>
                        <p class="corpo">pessoa fisica <br /> pequenas empresas </p>
                    </div>
                </div>
                <div class="terceiro">
                    <div class="two">
                        <p class="p-servico">TITURAKJDHFKSHDFLKJSAHFFVJKS </p>
                    </div>
                    <div class="two">
                        <p class="p-servico">MANICURENDBKHJDFKJASHZSBVJNDB </p>
                    </div>
                    <div class="two">
                        <p class="p-servico">ESCOVA MARROQUINADXMNC,ZN </p>
                    </div>
                </div>
            </section  >
            <section class="section2">
                <div class="quarto">
                    <div class="um1">
                        <h4>Portifólio</h4>
                    </div>
                    <div class="dois2">
                        <div class="a">
                            <img src={voltar} alt="" />
                        </div>
                        <div class="b">
                            <img src={beleza} alt="" />
                        </div>
                        <div class="c">
                            <img src={avancar} alt="" />
                        </div>
                    </div>
                </div>
                <div class="test">
                    <img src={zap} alt="" />
                    <p>Contato</p>
                </div>
            </section>
            <section class="section3">
                <div id="comenttitulo">
                    <p>Comentarios:</p>
                    <div class="coment">
                        <p>nome da loja </p>
                        <p> Data e hora </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget placerat massa, ut tincidunt eros. Pellentesque ac lorem ipsum. Vestibulum dapibus pretium nisl in vehicula. Nulla ut justo commodo, lobortis purus in, ultricies eros. Duis sodales, magna blandit dapibus iaculis, augue orci dignissim sem, at luctus eros diam vitae ligula. Donec sit amet dui ultricies, vehicula libero ut, ultrices nunc. Fusce laoreet hendrerit magna, sed rutrum neque egestas nec.</p>
                    </div>
                </div>
                <div class="test2">
                   
                    <p>+Comentário</p>
                </div>


                <div>
                    <p>Comentarios:</p>
                    <div class="coment">
                        <p>nome da loja </p>
                        <p> Data e hora </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget placerat massa, ut tincidunt eros. Pellentesque ac lorem ipsum. Vestibulum dapibus pretium nisl in vehicula. Nulla ut justo commodo, lobortis purus in, ultricies eros. Duis sodales, magna blandit dapibus iaculis, augue orci dignissim sem, at luctus eros diam vitae ligula. Donec sit amet dui ultricies, vehicula libero ut, ultrices nunc. Fusce laoreet hendrerit magna, sed rutrum neque egestas nec.</p>
                    </div>
                </div>
                <div class="test2">
                
                    <p>Enviar Comentários</p>
                </div>

            </section>
        </div>
    )
}
export default Portifolio;