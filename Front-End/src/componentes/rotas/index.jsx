import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home';
import Servicos from '../../pages/servicos';
import Hub from '../../pages/hub';
import Cursos from '../../pages/cursos/curso-individual';

function Rotas () {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path='/servicos' component={Servicos}/>
            <Route exact path='/hub' component={Hub}/>
            <Route exact path='/cursos' component={Cursos}/>
        </Switch>
    )
}

export default Rotas;