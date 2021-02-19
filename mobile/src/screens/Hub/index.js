import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';


function Hub () {

    return(
        <ScrollView>
            <TouchableOpacity style={styles.btn} onPress={home}>
          <Text style={styles.texto}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={servico}>
          <Text style={styles.texto}>Serviços</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={login}>
          <Text style={styles.texto}>Login</Text>
        </TouchableOpacity>
        </ScrollView>
    )
}

export default Hub;