import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";

const Content = ({ navigation, route }) => {
  // console.log(props);
  return (
    <View style={styles.contentCont}>
      <View style={styles.cont}>
        <View>
          <Image source={route.params.item.img} style={styles.img} />
        </View>
        <View style={styles.textcont}>
          <Text style={styles.txt}>{route.params.item.title}</Text>
          <Text style={styles.txt3}>{route.params.item.course1}</Text>
          <Text style={styles.txt3}>{route.params.item.course2}</Text>
          <Text style={styles.txt3}>{route.params.item.course3}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#002B5B",
            paddingVertical: 10,
            marginHorizontal: 15,
            marginVertical: 20,
            borderRadius: 30,
          }}
        >
          <Text style={styles.txt4}>₹{route.params.item.price}</Text>
          <Button title="Buy Now" style={styles.btn} />
        </View>
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  contentCont: {
    backgroundColor: "#3F3B6C",
    padding: 30,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    // alignItems: "center",
  },
  cont: {
    borderRadius: 15,
    backgroundColor: "white",
  },
  img: {
    width: "100%",
    height: 300,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  textcont: { padding: 10 },
  txt: {
    color: "black",
    fontWeight: "800",
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
  },
  txt2: {
    color: "black",
    fontWeight: "600",
    fontFamily: "Kailasa",
    fontSize: 22,
  },
  txt3: {
    color: "black",
    fontWeight: "600",
    letterSpacing: 2,
    fontFamily: "sans-serif-medium",
  },
  txt4: {
    color: "white",
    fontWeight: "600",
    letterSpacing: 2,
    fontSize: 26,
  },
});
