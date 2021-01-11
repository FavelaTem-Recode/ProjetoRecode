import React from "react";
import logo from "../../assets/imagens/logofavelatem.png";
import financas from "../../assets/imagens/financas.png";
import marketing from "../../assets/imagens/mktdigital.png";
import empreendedorismo from "../../assets/imagens/empreendedorismo2.png";
import "./style.css";


const Home = () => {
    return (
        <div>
            <header className="header">
                <img src={logo} alt="logo" />
                <nav>
                    <button ><a href="#qs">Como funciona</a></button>
                    <button>Login</button>
                </nav>
            </header>
            <main>
                <h1>o que você procura?</h1>
                <div>
                    <input type="text" placeholder="Digite aqui" name="buscar"></input>
                    <button type="button">Buscar</button>
                </div>
            </main>

            <section class="containerflex">
                <div class="item1">
                    <img />
                </div>
                <div class="item2">
                    <div id="frase">
                        <h1>64</h1>
                        <h2>Clientes compartilharam suas exeperiencias aqui</h2>
                    </div>
                    <div id="frase">
                        <h1>42</h1>
                        <h2 id="fraseA">empresas registradas</h2>
                    </div>
                    <div id="fraseB">
                        <h1>Dezenas</h1>
                        <h2>de possibilidades</h2>
                    </div>
                </div>
            </section>
            <section class="containerflex2">
                <div class="item3">
                    <div id="frase2B">
                        <h1>+ Negócios</h1>
                    </div>
                    <div id="frase2">
                        <h2 id="frase2A">Traga seu negócio <br /> para cá e comece a conquistar <br /> clientes também pela internet
                    </h2>
                    </div>
                    <div id="frase2B">
                        <input class="button" type="button" value="ANÚNCIAR"></input>
                    </div>
                </div>
                <div>
                    <div class="item4">
                        <img />
                </div>
                </div>
            </section>
            <section>
                <div>
                    <h2  id="item5">Favela tem é uma plataforma de pubicidade de serviços dos moradores de paraisópolis <a href name="qs"></a> </h2>
                </div>
            </section>
            <section class="containerflex3">
                <div class="cursos">
                    <img class="icone" src={empreendedorismo} alt=""/>
                    <img class="icone" src={financas} alt=""/>
                    <img class="icone" src={marketing} alt=""/>

                </div>
                <div>
                    <h2 id="item6">Ao fazer o cadastro você passara por um trilha rápida de aprendizado que te ensinará não só a
                    usar a plataforma, mas também a fazer o melhor anúncio do universo!</h2>
                </div>
                </section>
                <div id="item7">
                    <h1>Tudo isso, totalmente gratuito!!</h1>
                </div>
                <div id="botaocadastrar">
                    <input class="button" type="button" value="CADASTRAR AGORA"></input>
                </div>
                <section class="contanerflex4">
                    <div id="logo">
                        <img src="./imagen/logofavelatem.png" alt=""/>
                    </div> 
                    <p id="fraseC">
                        Foi idealizado por um grupo de jovens com o intuito de ajudar
                        comerciantes que não possuem condições de se estabelecerem em
                        um espaço físico a ampliarem sua carteira de clientes atrávez
                        da internet, com um aúxilio educacional.
                    </p>
                    <div>
                        <img src="" alt=""/>
                        <p id="fraseD">Contato</p>
                        <img src="" alt=""/>
                        <p id="fraseC">Av. Hebe Camargo n°128b - Paraisópolis</p>
                    </div>
                </section>
            </div>
    )
}
export default Home;