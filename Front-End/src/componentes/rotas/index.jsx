import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home';
import Servicos from '../../pages/servicos';
import Hub from '../../pages/hub';
import Cursos from '../../pages/cursos/';
import Login from '../../pages/login/';
import Registro from '../../pages/cadastro-usuario/';
import Contato from '../../pages/contato/';
import Servico from '../../pages/cadastro-servico/';
import Loja from '../../pages/cadastro-loja/';
import Portifolio from '../../pages/portifolio';

function Rotas () {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path='/servicos' component={Servicos}/>
            <Route exact path='/hub' component={Hub}/>
            <Route exact path='/cursos' component={Cursos}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/registro' component={Registro}/>
            <Route exact path='/contato' component={Contato}/>
            <Route exact path='/servico' component={Servico}/>
            <Route exact path='/loja' component={Loja}/>
            <Route exact path='/portifolio' component={Portifolio}/>
            
        </Switch>
    )
}

export default Rotas;