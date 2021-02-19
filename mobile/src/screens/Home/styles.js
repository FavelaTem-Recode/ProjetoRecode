import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#1ca8c9",
  },
  titulo: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
    marginTop: 50,
  },
  introducao: {
    color: "black",
    fontSize: 25,
    textAlign: "center",
    marginTop: 50,
  },
  imagem: {
    // width: 170,
    // height: 50,
    marginTop: 40,
    padding: 20,
    borderRadius: 6,
    marginTop: 50,
    marginLeft: 35,
    marginRight: 30,
  },
  btn: {
    backgroundColor: "#ff8C00",
    marginTop: 100,
    marginBottom: 20,
    padding: 10,
    borderRadius: 6,
    width: 200,
    height: 50,
  },
  texto: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default styles;
