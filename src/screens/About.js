import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import React from "react";
import Menubar from "../component/menu_nav";

const About = () => {
  return (
    <>
      <View style={{ backgroundColor: "#3925A8" }}>
        <View style={styles.maincont}>
          <View>
            <Image
              source={require("../../assets/rajan.png")}
              style={styles.img}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.txt}>About Me</Text>
          <Text style={styles.txt1}></Text>
          <Text style={styles.txt2}>
            I am web developer and web design and these App is made by React
            native.
          </Text>
          <View style={styles.social}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.facebook.com/rajansinghnahne")
              }
            >
              <Image
                source={require("../../assets/social/facebook.png")}
                resizeMode="contain"
                style={styles.logo}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.instagram.com/rajan_singh_raj/?igshid=Mzc0YWU1OWY%3D"
                )
              }
            >
              <Image
                source={require("../../assets/social/instagram.png")}
                resizeMode="contain"
                style={styles.logo}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.linkedin.com/in/rajan-singh-5b5090228/"
                )
              }
            >
              <Image
                source={require("../../assets/social/linkedin.png")}
                resizeMode="contain"
                style={styles.logo}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://twitter.com/rajansinghnahn1?t=6lWdrnUuYgrXiWUg8Ou_fg&s=09"
                )
              }
            >
              <Image
                source={require("../../assets/social/twitter.png")}
                resizeMode="contain"
                style={styles.logo}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Menubar />
    </>
  );
};

export default About;

const styles = StyleSheet.create({
  maincont: {
    justifyContent: "center",
    // alignItems: "center",
    height: "100%",
    padding: 30,
  },
  img: {
    width: "100%",
    height: 400,
  },
  txt: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "900",
  },
  txt1: { width: 50, height: 2, backgroundColor: "white", marginTop: 3 },
  txt2: {
    color: "white",
    paddingVertical: 15,
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  logo: { width: 40, height: 40, marginHorizontal: 10 },
});
