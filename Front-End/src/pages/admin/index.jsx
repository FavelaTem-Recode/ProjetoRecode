import React, { useEffect } from "react";
import Chart from 'chart.js';

import "./styleadmin.css";

import Menu from "../../componentes/Menu";
import { Link } from "react-router-dom";

const Admin = () => {
    const [proporcaoUsers, setProporcaoUsers] = React.useState({ total: 0, prestadores: 0, usersBasicos: 0 });
    const [mediaAnuncios, setMediaAnuncios] = React.useState(0);
    const [mediaCursosFeitos, setMediaCursosFeitos] = React.useState({ qntsAcertos: 0, qntdPerguntas: 0 });
    const [churn, setChurn] = React.useState({ saidaClientes: 0, clientelaInicial: 0 });
    useEffect(() => {
        async function graficoProporcao() {
            const url = "http://projetos/ProjetoRecode/Back-End/selectProporcaoUsers.php";
            const busca = fetch(url);
            const retorno = await busca;
            const dados = await retorno.json();
            setProporcaoUsers({ total: dados[0].todosCadastros, prestadores: dados[0].prestadores, usersBasicos: dados[0].todosCadastros - dados[0].prestadores });
        }
        graficoProporcao();
    }, [])

    useEffect(() => {
        async function getChurn() {
            const url = "http://projetos/ProjetoRecode/Back-End/selectChurn.php";
            const busca = fetch(url);
            const retorno = await busca;
            const dados = await retorno.json();
            setChurn({ saidaClientes: dados[0].saidaClientes, clientelaInicial: dados[0].clientelaInicial });
        }
        getChurn();
    }, [])

    useEffect(() => {
        async function getMediaAnuncios() {
            const url = "http://projetos/ProjetoRecode/Back-End/selectMediaAnuncios.php";
            const busca = fetch(url);
            const retorno = await busca;
            const dados = await retorno.json();
            const media = (dados[0].qntdServicos) / (dados[0].qntdPrestadores);
            setMediaAnuncios(media);
        }
        getMediaAnuncios();
    }, [])

    useEffect(() => {
        async function getCursosFeitos() {
            const url = "http://projetos/ProjetoRecode/Back-End/selectCursosFeitos.php";
            const busca = fetch(url);
            const retorno = await busca;
            const dados = await retorno.json();
            setMediaCursosFeitos(dados);
        }
        getCursosFeitos();
    }, [])

    useEffect(() => {
        var ctx = document.getElementById('proporcao').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Usuários Básicos', 'Prestadores de serviços'],
                datasets: [{
                    label: '',
                    data: [proporcaoUsers.usersBasicos, proporcaoUsers.prestadores],
                    backgroundColor: [
                        'rgba(255, 77, 0, 0.3)',
                        'rgba(28, 168, 201, 0.3)'

                    ],
                    borderColor: [
                        'rgba(255, 77, 0, 1)',
                        'rgba(28, 168, 201, 1)'

                    ],
                    borderWidth: 1
                }]
            }
        });
    }, [proporcaoUsers])

    useEffect(() => {
        console.log(churn.clientelaInicial)
        var ctx = document.getElementById('churn').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Prestadores que continuaram', 'Prestadores que saíram'],
                datasets: [{
                    label: '',
                    data: [(churn.clientelaInicial - churn.saidaClientes), churn.saidaClientes],
                    backgroundColor: [
                        'rgba(28, 168, 201, 0.3)',
                        'rgba(255, 77, 0, 0.3)'
                    ],
                    borderColor: [
                        'rgba(28, 168, 201, 1)',
                        'rgba(255, 77, 0, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
    }, [churn])


    return (
        <div className="admin">
            <div className="container-fluid">
                <div className="section-1">
                    <div className="bloco-1">
                        <Menu />
                    </div>
                </div>
                <div className="section-principal row">
                    <div className="section-user col-md-2">
                        <aside className="inf-user">
                            <div className="foto-user">
                                <img src={localStorage.getItem("imagem")} className="rounded-circle" alt="foto usuario" />
                            </div>
                            <div className="name-user text-center">
                                <p>{localStorage.getItem("nome")}</p>
                            </div>

                            <div className="btns">
                                <Link className="btn">Profissionais Cadastrados</Link>
                                <Link className="btn">Usuários Cadastrados</Link>
                                <Link className="btn">Índice de exclusões</Link>
                            </div>


                        </aside>
                    </div>
                    <div className="col-md-8 p-0 d-flex flex-wrap">
                        <div className="parentCanvas">
                            <canvas id="proporcao" width="100" height="100"></canvas>
                        </div>
                        <div className="parentCanvas">
                            <canvas id="churn" width="100" height="100"></canvas>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="dadoNumero">
                            <h1>{proporcaoUsers.total}</h1>
                            <small>Usuários Totais</small>
                        </div>

                        <div className="dadoNumero">
                            <h1>{(mediaAnuncios).toFixed(2)}</h1>
                            <small>Anúncios/Prestador</small>
                        </div>

                        <div className="dadoNumero">
                            <h1>{(mediaCursosFeitos.qntsAcertos / proporcaoUsers.prestadores * 100).toFixed(2)}%</h1>
                            <small>Terminaram todo o curso</small>
                        </div>

                        <div className="dadoNumero">
                            <h1>{(churn.saidaClientes / churn.clientelaInicial * 100).toFixed(2)}%</h1>
                            <small>Rotatividade de prestadores</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Admin;