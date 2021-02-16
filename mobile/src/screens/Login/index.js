import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

import Fundo from '../../../assets/paraisopolisfoto.png';
import Logo from '../../../assets/logofavelatem.png';

import styles from './styles';

function Login() {
    return(
    <View style={styles.caixa}>

        <ImageBackground source={Fundo} style={styles.fundo}>

        {/* < Imagem Logo = { exigir ( '../../../assets/logofavelatem.png' ) } />   */}

        
            <View>

                 <Text style={styles.titulo}>Seja bem-vindo(a)!</Text>

            </View>

            <View style={styles.inputs}>

                <TextInput placeholder="Digite o e-mail..." style={styles.input}/>  
            
                <TextInput placeholder="Digite sua senha..." style={styles.input} 
                secureTextEntry={true}/> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.texto}>Entrar</Text>
                </TouchableOpacity>
            
            </View>
            
        </ImageBackground>

    </View>


    )
}

export default Login;