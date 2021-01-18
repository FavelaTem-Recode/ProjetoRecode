import React from 'react';
import './styleservico.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import Alerta from '../../assets/imagens/alert.png';

const Servico = () => {
    const [categorias, setCategorias] = React.useState([]);
    const [subcategorias, setSubcategorias] = React.useState([]);

    React.useEffect(async () => {
        const url = "http://projetos/ProjetoRecode/Back-End/selectCategorias.php";
        const busca = fetch(url);
        const resposta = await busca;
        const dados = await resposta.json();

        setCategorias(dados);
    }, [])

    async function updateSubcategorias(event) {
        const id = event.target.value;
        let idForm = new FormData();
        idForm.append("id", id);

        const url = "http://projetos/ProjetoRecode/Back-End/selectSubcategorias.php";
        const busca = fetch(url, {
            method: "POST",
            body: idForm
        });
        const resposta = await busca;
        const dados = await resposta.json();
        setSubcategorias(dados)
    }

    async function cadServico(event) {
        event.preventDefault();
        console.log(event);

        const url = "http://projetos/ProjetoRecode/Back-End/registerServicos.php";
        const form = new FormData(event.target);
        form.append('email', localStorage.getItem('login'));
        form.append('senha', localStorage.getItem('senha'));

        // for (var value of form.values()) {
        //     console.log(value);
        //  }
        const envio = fetch(url, {
            method: "POST",
            body: form
        });
        const response = await envio;
        const res = await response.json();
        console.log(res);
    }

    return (
        <div className="servico">
            <div class="jumbotron jumbotron-fluid h-25 pt-4 header-servico">
                <div class="image">
                    <button><img src={Voltar} alt="voltar" /></button>
                </div>
            </div>
            <div class="container-fluid flex-column d-flex h-75 align-items-center justify-content-top paraisopolis">
                <div class="form bg-white w-50 px-4 pt-3">
                    <h3>Dados do serviço!</h3>
                    <hr />
                    <form className="form-log" id="cadastroservico" onSubmit={cadServico}>
                        <div class="form-group">
                            <label for="nome">Nome do serviço:</label>
                            <input type="text" class="form-control" id="nome" placeholder="Digite o nome do seu serviço"
                                name="nome" required />
                        </div>
                        <div className="form-row" >
                            <div class="form-group">
                                <label for="nome">Categorias:</label>
                                <select className="form-select-sm mt-2 w-100" onChange={updateSubcategorias}>
                                    <option selected>Categoria</option>
                                    {categorias.map((item) => {
                                        return (
                                            <option value={item.idcategorias_servico}>{item.categoria}</option>
                                        )
                                    })};
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="nome">Subcategoria:</label>
                                <select className="form-select-sm mt-2 w-100" name="idsubcategoria">
                                    {subcategorias.map((subcat) => {
                                        return (
                                            <option value={subcat.idsubcategorias}>{subcat.nome_subcategoria}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="descricao">Descreva o seu serviço aqui:</label>
                            <input type="text" class="form-control" id="descricao" placeholder="Digite aqui o que você faz"
                                name="descricaoservico" required />
                        </div>
                        <div class="checks">
                            <div class="atendimento custom-control">
                                <p>Atendimento</p>

                                <input class="custom-control-input" type="checkbox" name="atendimentodomicilio" id="domicilio" />
                                <label class="custom-control-label" for="domicilio">Domicilio</label>

                                <input class="custom-control-input" type="checkbox" name="atendimentolocal" id="local" />
                                <label class="custom-control-label" for="local">No local </label>

                            </div>
                            <div class="atendimento custom-control">
                                <p >Pagamento</p>

                                <input class="custom-control-input" type="checkbox" name="pagamentodinheiro" id="dinheiro" />
                                <label class="custom-control-label" for="dinheiro">Dinheiro</label>

                                <input class="custom-control-input" type="checkbox" name="pagamentocartao" id="cartao" />
                                <label class="custom-control-label" for="cartao">Cartão </label>

                            </div>

                        </div>
                        <div class="p custom-control">
                            <p>Horário de atendimento:</p>
                            <label htmlFor='inicio'>Das:</label>
                            <input type="time" class="custom-control" name="inicioatendimento" id="inicio" />

                            <label htmlFor='fim'>Até:</label>
                            <input type="time" class="custom-control" name='fimatendimento' id='fim' />
                        </div>
                        <div className="form-row">
                           <div class="form-group mt-2 custom-control ">
                            <label htmlFor="arquivo">Inserir imagem do serviço: </label>
                            <input type="url" name="imagemservico" id="arquivo" />
                        </div> 
                        </div>
                        
                    </form>
                </div>
                <footer className="w-50 p-3">
                    <div className="azul">
                        <div className="inferior">
                            <div id="alerta">
                                <img src={Alerta} alt="voltar" />
                            </div>
                            <div id="alertap" >
                                <p>Importante!</p>
                                <p>Preencha todos os dados</p>
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="cadserv btn m-0" form="cadastroservico">Cadastrar serviço</button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Servico;