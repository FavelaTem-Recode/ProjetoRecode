
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';


import styles from "./styles";

function RotaServicos ({navigation}) {
  function servico() {
     navigation.navigate("Servico");
  }
 
}

function Cursos({ navigation }) {
  function home() {
    navigation.navigate("Home");
  }
  return (
    <ScrollView >
      <TouchableOpacity>
        <Image
        style={styles.imagem}
        source={require("../../../assets/logofavelatem.png")} onPress={home}></Image>
      </TouchableOpacity>

     <View style={styles.containerCursos}>
       <Image style={styles.imagemCurso} source={require("../../../assets/financas.png")} />
        {/* <Image style={styles.imagemCurso} source={require("../../../assets/mktdigital.png")} />
        <Image style={styles.imagemCurso} source={require("../../../assets/consultoria.png")} /> */}
          <View style={styles.containerCard}>
            <Text>64 Clientes compartilharam suas experiências</Text>
          <Text>42 Empresas registradas</Text>
        </View>
        
     </View>     
      
        <TouchableOpacity style={styles.btn} onPress={home}>
          <Text style={styles.texto}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={RotaServicos}>
          <Text style={styles.texto}>Serviços</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
  
  export default Cursos;