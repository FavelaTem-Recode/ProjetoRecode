import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity,} from 'react-native';
import Fundo from '../../../assets/paraisopolisfoto.png';

import styles from './styles';

// const apiUsuario = {
//     id: 1,
//     senha1: "favelatem@teste.com",
//     senha: "123"
// }

function Cadastro({navigation}) {

    function hub() {
    //     // fetch("")
    //     if (apiUsuario.senha1 === senha1 && apiUsuario.senha === senha) {
            navigation.navigate("Hub");
    //     }else {
    //         Alert.alert("Usuario inválido", "É necessário informar um usuário válido.")
    //     }
     
    }

    // const [senha1, setSenha1] = React.useState("");
    // const [senha, setSenha] = React.useState("");

    return (
        <View style={styles.caixa}>
            <ImageBackground source={Fundo} style={styles.fundo}>

                <View>
                    <Text style={styles.titulo}>CADASTRO</Text>
                </View>

                <View style={styles.container0}>
            
                <Text style={styles.labelcadastro}>Nome:</Text>
                        <TextInput
                    placeholder="Digite seu nome"
                    style={styles.inputcadastro}
                    />

                <Text style={styles.labelcadastro}>Sobrenome:</Text>
                    <TextInput
                    placeholder="Digite seu sobrenome"
                    style={styles.inputcadastro}
                    />
            
                <Text style={styles.labelcadastro}>Email:</Text>
                    <TextInput 
                        placeholder="Digite seu email" 
                        style={styles.inputcadastro}
                        // value={usuario}
                        // onChangeText={(text) => setUsuario(text)}
                    />

              <Text style={styles.labelcadastro}>Senha:</Text>
                    <TextInput 
                        placeholder="Digite sua senha" 
                        style={styles.inputcadastro} 
                        // secureTextEntry={true}
                        // value={senha}
                        // onChangeText={(text) => setSenha(text)}
                    />

                 <Text style={styles.labelcadastro}>Confirme sua senha:</Text>
                    <TextInput 
                        placeholder="Confirme sua senha" 
                        style={styles.inputcadastro} 
                        // secureTextEntry={true}
                        // value={senha1}
                        // onChangeText={(text) => setSenha1(text)}
                    />

                    <TouchableOpacity style={styles.btnX} onPress={hub}>
                        <Text style={styles.textobotao}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>
                 {/* </Card> */}
                 <View>
                <Text
                    style={{
                        marginBottom: "auto",
                        marginTop: 90,
                        textAlign: "center",
                        fontSize: 14,
                        color: "white",
                    }}>
                    © Squad 04 SP 2 -Recode Pro 2020 - 2021
          </Text>
         </View>
            </ImageBackground>

        </View>
        
    )
}


export default Cadastro;
