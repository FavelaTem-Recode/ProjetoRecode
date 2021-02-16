import React from 'react';

const Emprendedorismo = () => {
    return (
        <div>
            <div className="container-fluid" >
                <div>
                    <iframe width="420" height="315"src="https://www.youtube.com/embed/qXRYQl60lgw"/>
                </div>               

                <form action="POST">
                    <h4 className=''>1 - Empreendedorismo é o esforço de  criar, idealizar,
                     coordenar e realizar projetos. Seja uma idéia, tecnologia, produto ou serviço.
                    </h4>

                    <input type="radio" name="Per1-res" id="" className="mr-1" />
                    <label htmlFor="Per1-res-a" className='mr-3'>Verdadeiro</label>
                    {/* resposta correta */}


                    <input type="radio" name="Per1-res" id="" className="mr-1" />
                    <label htmlFor="Per1-res-b" className='mr-3'>Falso</label>


                    <h4>2 - Para empreender é preciso ficar atento aos seguintes pontos:</h4>

                    <input type="radio" name="Per2-res" id="" className="mr-1" />
                    <label htmlFor="Per2-res" className='mr-3'>Responsabilidade, compensação, Risco de falha.</label>
                    {/* resposta correta */}
                    <br />

                    <input type="radio" name="Per2-res" id="" className="mr-1" />
                    <label htmlFor="Per2-res" className='mr-3'>Acordar cedo, trabalhar aos finais de semana e gastar pouco.</label>


                    <h4>3 - Algumas características ajudam a pessoa empreendedora. São elas:</h4>

                    <input type="radio" name="Per3-res" id="" className="mr-1" />
                    <label htmlFor="Per3-res" className='mr-3'>Força de vontade, persistência e acreditar na sua própria idéia.</label>
                    {/* resposta correta */}
                    <br />

                    <input type="radio" name="Per3-res" id="" className="mr-1" />
                    <label htmlFor="Per3-res" className='mr-3'>Cautela,  atenção e intuição.</label>

                    <br />

                    <input type="submit" value="Responder" className="btn btn-success m-2" />

                    <input type="reset" value="Limpar" className="btn btn-danger m-2" />

                </form>
            </div>     
            
        </div>
    )
}
export default Emprendedorismo;