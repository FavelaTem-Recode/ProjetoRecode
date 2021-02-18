
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


import styles from "./styles";

function Servico({ navigation }) {
  function cursos() {
    navigation.navigate("Cursos");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seja Bem Vindx!</Text>
      <Text style={styles.introducao}>
        Página de Serviços: Traga seu anúncio para cá e comece a conquistar clientes também pela internet
      </Text>
      <Image
        style={styles.imagem}
        source={require("../../../assets/paraisopolisfoto.png")}
        />
        <TouchableOpacity style={styles.btn} onPress={cursos}>
          <Text style={styles.texto}> Cursos</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  export default Servico;