import React from "react";
import logo from "../../assets/imagens/logofavelatem.png";
import financas from "../../assets/imagens/financas.png";
import marketing from "../../assets/imagens/mktdigital.png";
import empreendedorismo from "../../assets/imagens/empreendedorismo2.png";
import "./style.css";
import Menu from "../../componentes/Menu";
import { Link } from 'react-router-dom';


const Home = () => {
    const [pesquisa,setPesquisa] = React.useState("")
    const [dados,setDados] = React.useState([{qntdPrestadores: 0, qntdComentarios: 0}])
    function onChangeHandler(event){
        setPesquisa(event.target.value)
    }

    React.useEffect(()=>{
        async function getDados(){
            const url = "http://projetos/ProjetoRecode/Back-End/selectDadosPublicos.php";
            const req = fetch(url);
            const res = await req;
            const dados = await res.json();
            setDados(dados);
        }
        getDados();
    },[])

    return (
        <div className="home">
            <Menu />
            <main>
                <h1>o que você procura?</h1>
                <div>
                    <input type="text" placeholder="Digite aqui" name="buscar" value={pesquisa} onChange={onChangeHandler}></input>
                    <Link type="button" to={{
                        pathname: "/servicos",
                        search: "?&pesquisa="+pesquisa
                    }}>Buscar</Link>
                </div>
            </main>

            <section class="containerflex">
                <div class="item1">
                    <img />
                </div>
                <div class="item2">
                    <div id="frase">
                        <h1>{dados[0].qntdComentarios}</h1>
                        <h2>Clientes compartilharam suas exeperiências aqui</h2>
                    </div>
                    <div id="frase">
                        <h1>{dados[0].qntdPrestadores}</h1>
                        <h2 id="fraseA">profissionais registrados</h2>
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
                        <h2 id="frase2A">Traga seu anúncio <br /> para cá e comece a conquistar <br /> clientes também pela internet
                    </h2>
                    </div>
                    <div id="frase2B">
                        <input class="button" type="button" value="ANUNCIAR"></input>
                    </div>
                </div>
                <div>
                    <div class="item4">
                        <img />
                </div>
                </div>
            </section>
            <section>
            <div id="comofunciona">
                    <h2  id="item5">Favela tem é uma plataforma de publicidade de serviços dos moradores de paraisópolis. <a href name="qs"></a> </h2>
                </div>
            </section>
            <section class="containerflex3">
                <div class="cursos">
                    <img class="icone" src={empreendedorismo} alt=""/>
                    <img class="icone" src={financas} alt=""/>
                    <img class="icone" src={marketing} alt=""/>

                </div>
                <div>
                    <h2 id="item6">Ao fazer o cadastro você passará por um trilha rápida de aprendizado que te ensinará não só a
                    usar a plataforma, mas também a fazer o melhor anúncio do universo!</h2>
                </div>
                </section>
                <div id="item7">
                    <h1>Tudo isso, totalmente gratuito!!</h1>
                </div>
                <div id="botaocadastrar">
                    <Link class="button" to="/registro" type="button">Cadastrar-se agora</Link>
                </div>
                <section class="contanerflex4">
                    <div id="logo">
                        <img src={logo} alt=""/>
                    </div> 
                    <p id="fraseC">
                    o Favela Tem foi desenvolvido por um grupo de jovens, com o propósito de divulgar os serviços de moradores de paraisópolis que não possuem ponto comercial, para que aumentem suas carteiras de clientes através da internet. Além de empoderar esses trabalhadores com um conteúdo educacional em forma de gamificação.
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