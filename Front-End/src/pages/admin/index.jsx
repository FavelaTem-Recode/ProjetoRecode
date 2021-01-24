import React from "react";

import "./styleadmin.css";


import consultoria from "../../assets/imagens/consultoria.png";
import marketing from "../../assets/imagens/marketing-digital.png";
import empreendedorismo from "../../assets/imagens/empreendedorismo.png";
import Menu from "../../componentes/Menu";
import { Link } from "react-router-dom";

const Admin = () => {

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
                                <img src="" className="rounded-circle" alt="foto usuario" />
                            </div>
                            <div className="name-user text-center">
                                <p>Nome</p>
                            </div>

                            <div className="btns">
                                <Link className="btn" to="`/portifolio">Profissionais Cadastrados</Link>
                                <Link className="btn" to="/cadportifolio">Usuários Cadastrados</Link>
                                <Link className="btn" to="/servico">Administradores Cadastrados</Link>
                                <Link className="btn" to="/updateloja">Índice de exclusões</Link>
            
                            </div>

                            
                        </aside>
                    </div>

                </div>

    </div>
    </div>

    )
}
export default Admin;