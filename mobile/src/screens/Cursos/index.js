
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


import styles from "./styles";

function Cursos({ navigation }) {
  function home() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seja Bem Vindx!</Text>
      <Text style={styles.introducao}>
        Página de Cursos:Ao fazer o cadastro você passará por um trilha rápida de aprendizado que te ensinará não só a
        usar a plataforma, mas também a fazer o melhor anúncio do universo!
      </Text>
      <Image
        style={styles.imagem}
        source={require("../../../assets/paraisopolisfoto.png")}
        />
        <TouchableOpacity style={styles.btn} onPress={home}>
          <Text style={styles.texto}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  export default Cursos;