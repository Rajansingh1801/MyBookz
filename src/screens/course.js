import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Menubar from "../component/menu_nav";
import Courseapi from "../Api/courseapi";

const Course = ({ navigation }) => {
  const courseCard = ({ item }) => {
    console.log(item);
    return (
      <>
        <View style={styles.cardContainer}>
          <View style={styles.carditems}>
            <View>
              <Image source={item.img} style={styles.img} />
            </View>
            <Text style={styles.txt1}>{item.title}</Text>
            <Text style={styles.txt2}>{item.description}</Text>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() =>
                  navigation.navigate("courseDeatils", { item: item })
                }
              >
                <Text style={styles.btntxt}>Course Details</Text>
              </TouchableOpacity>
            </View>
            {/* <Button style={styles.btn} title="Course Details" /> */}
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={Courseapi}
          renderItem={courseCard}
        />
      </View>
      <Menubar />
    </>
  );
};

export default Course;

const styles = StyleSheet.create({
  cardContainer: { backgroundColor: "#FAF1E5" },
  carditems: {
    backgroundColor: "white",
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 50,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 5,
    borderRadius: 15,
    paddingBottom: 10,
  },
  img: {
    width: "100%",
    height: 300,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  txt1: {
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 15,
    color: "black",
    fontWeight: "700",
    fontFamily: "Poppins",
  },
  txt2: {
    fontSize: 14,
    color: "black",
    padding: 10,
    textAlign: "center",
    fontFamily: "cursive",
  },
  btn: {
    // width: "fit-content",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#263159",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  btntxt: {
    color: "white",
    fontSize: 18,
  },
});
