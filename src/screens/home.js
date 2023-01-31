import { Image, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Menubar from "../component/menu_nav";

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgcontainer}>
          <Image
            style={styles.img}
            source={require("../../assets/shivji.jpg")}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.txt1}>MyBookz</Text>
        <Text style={styles.txt2}>
          विद्या ददाति विनयं विनयाद् याति पात्रताम् ।
        </Text>
        <Text style={styles.txt2}>
          पात्रत्वात् धनमाप्नोति धनात् धर्मं ततः सुखम् ॥
        </Text>
      </View>

      <Menubar />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#06283D",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  txt1: {
    color: "white",
    textAlign: "center",
    fontSize: 36,
    paddingVertical: 15,
  },
  // imgcontainer: {
  //   marginHorizontal: 20,
  // },
  img: {
    marginHorizontal: 15,
    width: 400,
    height: 300,
  },
  txt2: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "400",
    color: "white",
  },
});
