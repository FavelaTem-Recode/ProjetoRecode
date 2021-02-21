
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


import styles from "./styles";

function Servico({ navigation }) {
  function portifolio() {
    navigation.navigate("Portifolio");
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
        <TouchableOpacity style={styles.btn} onPress={portifolio}>
          <Text style={styles.texto}> Portifólio</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  export default Servico;