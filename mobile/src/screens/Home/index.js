import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import styles from "./styles";


function Home({ navigation }) {
  function servico() {
    navigation.navigate("Servico");
  }
  function cursos() {
    navigation.navigate("Cursos");
  }
  return (
    <ScrollView style={styles.caixa}>
      <View style={styles.abertura}>
        <Text style={styles.titulo}>FAVELA TEM</Text>
        <Text style={styles.label}>
          Plataforma de publicidade de serviços dos moradores de Paraisópolis
        </Text>
      </View>

      <View style={styles.inputs}>
        <TextInput placeholder="O que você procura?" style={styles.input} />
        <TouchableOpacity style={styles.btn1} onPress={servico}>
          <Text style={styles.texto}> Buscar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container_normal}>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require("../../../assets/mocaboloroxo.jpg")}
          />
          <Text style={styles.label2}>
            64 Clientes compartilharam suas experiências
          </Text>
          <Text style={styles.label2}>42 profissionais registrados</Text>
          <Text style={styles.label2}> Dezenas de possibilidades</Text>
        </View>
      </View>

      <View style={styles.container_normal}>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require("../../../assets/costura.jpg")}
          />
          <Text style={styles.label2}>+ Negócios</Text>
          <Text style={styles.label2}>
            Traga seu anúncio para cá e comece a conquistar clientes também pela
            internet
          </Text>
        </View>
      </View>

      <View style={styles.container_row}>
        <View style={styles.container}>
          <Text style={styles.label2}>
            Ao fazer o cadastro você passará por uma trilha de aprendizado que
            te ensinará a fazer o melhor anúncio do universo!
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ margin: 10 }}>
              <Image
                style={styles.imgcurso}
                source={require("../../../assets/empreendedorismo2.png")}
              />
            </View>

            <View style={{ margin: 10 }}>
              <Image
                style={styles.imgcurso}
                source={require("../../../assets/financas.png")}
              />
            </View>

            <View style={{ margin: 10 }}>
              <Image
                style={styles.imgcurso}
                source={require("../../../assets/mktdigital.png")}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container_normal}>
        <View style={styles.container}>
          <Text style={styles.label3}>Tudo isso, totalmente Gratuito!!!</Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={cursos}>
          <Text style={styles.texto}> Cursos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container_normal}>
        <View style={styles.container}>
          <Text
            style={{
              marginBottom: "auto",
              textAlign: "center",
              fontSize: 14,
              color: "white",
            }}
          >
            © Squad 04 SP 2 -Recode Pro 2020 - 2021
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

