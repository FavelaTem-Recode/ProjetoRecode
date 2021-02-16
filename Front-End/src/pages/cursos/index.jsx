import React from "react";

import "./style.css";

import Menu from "../../componentes/Menu";
import { Link } from "react-router-dom";
import Apoio from "../../componentes/Apoio";

import Cursos from "../../componentes/Cursos";

const Hub = () => {
    const [dados, setDados] = React.useState([])
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
        console.log(res)

    }, [])

    function getInfo() {
        const queryString = window.location.href;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        return id;
    }
   
    if (dados[0] != null) {
        return (
            <div className="curso">
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
                                </div>
                            </aside>
                        </div>
                        <div className="conteudo">
                            <div className="cursos">
                                <div className="container-fluid my-3">

                                    <Cursos id={getInfo()} />                               

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
