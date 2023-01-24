import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menubar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menucontainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/icons/house-chimney-solid.png")}
          resizeMode="cover"
        />

        {/* <Text>Home</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Course")}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/icons/book-solid.png")}
          resizeMode="cover"
        />
        {/* <Text>Course</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("About")}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/icons/exclamation-solid.png")}
          resizeMode="cover"
        />
        {/* <Text>About</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/icons/address-book-solid.png")}
          resizeMode="cover"
        />
        {/* <Image
          style={styles.img}
          source={require("../../assets/shivji.jpg")}
          resizeMode="cover"
        /> */}
        {/* <Text>Contact</Text> */}
      </TouchableOpacity>
      {/* <Button onPress={() => navigation.navigate("Home")} title="Home" />
      <Button onPress={() => navigation.navigate("Login")} title="login" /> */}
    </View>
  );
};

export default Menubar;

const styles = StyleSheet.create({
  menucontainer: {
    width: " 100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#AD8E70",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    // backgroundColor: "red",
    // paddingHorizontal: 12,
    paddingVertical: 10,
  },
  logo: {
    width: 26,
    height: 26,
    zIndex: 999,
  },
});
