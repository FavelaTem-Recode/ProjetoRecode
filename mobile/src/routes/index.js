import React from 'react';
import { 
    createAppContainer, 
    createSwitchNavigator
} from 'react-navigation';

import Login from '../screens/Login';
import Cursos from '../screens/Cursos';
import Home from '../screens/Home';
import Servico from '../screens/Servico';

const Rotas = {
    Home: {
        nome: "Home",
        screen: Home
    },
    Cursos: {
        nome: "Cursos",
        screen: Cursos
    },
    Login: {
        nome: "Login",
        screen: Login
    },
    Servico: {
        nome: "Servico",
        screen: Servico
    }
}

// Criar as rotas
const Navegacao = createSwitchNavigator(Rotas);

// passar para o App
export default createAppContainer(Navegacao);