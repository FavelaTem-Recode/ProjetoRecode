import * as React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';


function BtnMenu({ navigation }) {

    function home() {
      navigation.navigate("Home");
    }
     function servico() {
       navigation.navigate("Servico");
    }
    function login() {
      navigation.navigate("Login");
    }
    function hub() {
      navigation.navigate("Hub");
    }
// const BtnMenu = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

//   const home = () => navigation.navigate("Home");
  
    

  return (
    <Provider>
      <View
        style={{
          paddingTop: 10,
          flexDirection: 'row',
          justifyContent: 'center',        
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu} >Menu</Button>}>
          {/* <TouchableOpacity onPress={home}><Text>Home</Text></TouchableOpacity>
          <TouchableOpacity onPress={hub}><Text>Cursos</Text></TouchableOpacity>
          <TouchableOpacity onPress={servico}><Text>Serviços</Text></TouchableOpacity>
          <TouchableOpacity onPress={login}><Text>Login</Text></TouchableOpacity>
          <TouchableOpacity onPress={home}><Text>Home</Text></TouchableOpacity> */}
          <Menu.Item onPress={(navigation) => {home}} title="Home" />
          <Menu.Item onPress={(navigation) => {login}} title="Login" />
          <Menu.Item onPress={(navigation) => {servico}} title="Serviços" />
          <Menu.Item onPress={() => {}} title="Quem Somos" />
          

          <Divider />
          <Menu.Item onPress={() => {}} title="Serviços" />
        </Menu>
      </View>
    </Provider>
  );
};

export default BtnMenu;