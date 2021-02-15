import React from "react";
import DoisP from "../../assets/imagens/DoisP-tudoresolvido.jpeg";
import Abri from "../../assets/imagens/abri_minha_empresa_patrocinio.png";
import Otimize from "../../assets/imagens/organize.png";

const Apoiadores = () => {
    return (
        <div>
     
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" >
                <div class="carousel-inner" style={{width:350, borderRadius: 100, backgroundColor: "#6ebaed " }}>
                    <div class="carousel-item active">
                        <img src={DoisP} style={{width: 400, height: 350, }} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Abri} style={{width: 400, height: 350, }} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Otimize} style={{width: 400, height: 350, }} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}

export default Apoiadores;