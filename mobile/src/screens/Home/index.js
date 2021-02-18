import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from "./styles";

function Home({ navigation }) {
  function servicos() {
    navigation.navigate("Servico");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seja Bem Vindx!</Text>
      <Text style={styles.introducao}>
        Página Home: Aqui no FullStack Eletro Mobile Programadores tem desconto!!!
      </Text>
      <Image
        style={styles.imagem}
        source={require("../../../assets/paraisopolisfoto.png")}
        />
        <TouchableOpacity style={styles.btn} onPress={servicos}>
          <Text style={styles.texto}>Servicos</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  export default Home;