import React from "react";
import logo from "../../assets/imagens/logofavelatem.png";
import "./style.css";

const Home = () => {
    return (
        <div className="section-1">
            <div className="container"> 
                <header className="header">       
                    <a><img src={logo} alt="logo" /></a>
                        <nav>
                            <button>Como funciona</button>
                            <button>Login</button>
                        </nav>
                </header>
                <main>
                    <h1>o que você precisa?</h1>
                    <div className="buscar">
                        <input type="text" placeholder="Digite aqui" name="buscar"></input>
                        <button type="button" >Buscar</button>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Home;