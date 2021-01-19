import React from 'react';
import './stylecadport.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';

const CadPortifolio = () => {

    return (
    
    <div className="cadport">
    <div class="jumbotron jumbotron-fluid h-25 pt-4">
        <button class="image">
            <img src={Voltar} alt="voltar"/>
        </button>
    </div>

    <div class="row container-fluid flex-column d-flex h-75 align-items-center justify-content-top paraisopolis">
        <div className='col-sm-8'>
            <div class="form bg-white w-100 px-3 pt-3">
                <h3>Aqui vamos cadastrar seu portifólio!</h3>
             
                <form className="form-cadport"  id="cadastrar">
                <div class="form-group">
                    <label for="descricao">Capriche, ele será sua vitrine =D</label>
                    <input type="text" class="form-control" id="descricao" placeholder="Descreva aqui o que você faz"
                        name="descricaoservico" required />
                </div>

                <div className="form-row">
                    <div class="form-group mt-2 custom-control ">
                    <label for="file">Insira aqui suas melhores fotos:</label>
                    <input type="file" class="form-control-file" id="file"/>
                    </div>
                </div>
                  
                </form>
                
            </div>
            <footer className="footer d-flex e justify-content-end">

                <button class="btn btn-auto" type="submit" form="cadastrar">Enviar</button>


            </footer>
        </div>
    </div>
</div>

    )

}

export default CadPortifolio;