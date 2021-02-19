// import React from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

// import styles from "./styles";

// function Home({ navigation }) {
//   function servicos() {
//     navigation.navigate("Servico");
//   }
//   return (
//     <ScrollView style={styles.container}>
//       <Image
//         style={styles.imagem}
//         source={require("../../../assets/logofavelatem.png")}
//         />
//       <Text style={styles.titulo}>Seja Bem Vindx!</Text>
//       <Text style={styles.introducao}>
//         Página Home: Aqui no FullStack Eletro Mobile Programadores tem desconto!!!
//       </Text>
      
//         <TouchableOpacity style={styles.btn} onPress={servicos}>
//           <Text style={styles.texto}>Servicos</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     );
//   }
  
//   export default Home;

  import React from 'react';
  import { View, Text, Image, TouchableOpacity} from 'react-native';
  
  
  import styles from "./styles";
  
  function Home({ navigation }) {
    function servicos() {
      navigation.navigate("Servico");
    }
    return (
     
      <View style={styles.container}>
        <Text style={styles.titulo}>Seja Bem Vindx!</Text>
        <Text style={styles.introducao}>
          Página de Home: Traga seu anúncio para cá e comece a conquistar clientes também pela internet
        </Text>
        <Image
          style={styles.imagem}
          source={require("../../../assets/paraisopolisfoto.png")}
          />
          <TouchableOpacity style={styles.btn} onPress={servicos}>
            <Text style={styles.texto}> Cursos</Text>
          </TouchableOpacity>
        </View>
      
      );
    }
    
    export default Home;