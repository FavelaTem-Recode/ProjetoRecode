import React from "react";
import "./style.css";
import { Link } from 'react-router-dom'

const CardServicos = (props) => {
  return (
    <div className="cardServicos card">
      <div className="card-header d-flex">
        <img src={props.imgpessoa} alt="imngteste" className="rounded-circle" />
        <div className="ml-2">
          <p className="nome">{props.nome}</p>
          <p className="local">{props.local}</p>
        </div>
      </div>

      <div className="card-body p-0">
        <img src={props.imgcard} alt="rggege" />
      </div>
      <div className="card-footer p-1">
        <p>{props.descricao}</p>
        <Link to={{
          pathname: "/portfolio",
          search: "?id="+props.id
        }} className="btn btn-block">Ver perfil completo</Link>
      </div>
    </div>
  );
};

export default CardServicos;
