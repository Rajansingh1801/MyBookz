import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import Menubar from "../component/menu_nav";

const Contact = () => {
  const [ispress, setpress] = useState(false);
  const [ischeck, setcheck] = useState(false);
  return (
    <>
       <View style={styles.cont}>
        <View>
          <Text style={styles.txt1}>
            Contact us{"\n"}Any where,{"\n"}Any time
          </Text>
          <SafeAreaView>
            <View>
              <Text style={styles.txt2}>Enter your name</Text>
              <TextInput
                keyboardType="ascii-capable"
                onPressIn={() => setpress(!ispress)}
                style={[
                  styles.input,
                  { borderColor: ispress ? "gray" : "blue" },
                ]}
              />
            </View>
            <View>
              <Text style={styles.txt2}>Enter Email</Text>
              <TextInput
                onPressIn={() => setpress(!ispress)}
                style={[
                  styles.input,
                  { borderColor: ispress ? "gray" : "blue" },
                ]}
                keyboardType="email-address"
              />
            </View>
            <View>
              <Text style={styles.txt2}>Enter Your Mobile Mo.</Text>
              <TextInput
                onPressIn={() => setpress(!ispress)}
                style={[
                  styles.input,
                  { borderColor: ispress ? "gray" : "blue" },
                ]}
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text style={styles.txt2}>How can we help you ?</Text>
              <TextInput
                onPressIn={() => setpress(!ispress)}
                multiline
                numberOfLines={4}
                style={[
                  styles.textarea,
                  { borderColor: ispress ? "gray" : "blue" },
                ]}
                keyboardType="ascii-capable"
              />
            </View>
            <View style={{ flexDirection: "row", marginVertical: 15 }}>
              <Checkbox
                value={ischeck}
                onValueChange={() => {
                  setcheck(!ischeck);
                }}
                style={styles.checkbox}
              />
              <Text style={{ paddingStart: 10 }}>I have read all T&C</Text>
            </View>
            <TouchableOpacity style={styles.submit}>
              <Text style={styles.subtxt}>Contact Us</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </View> 
      <Menubar />
    </>
  );
};

export default Contact;

const styles = StyleSheet.create({
  cont: { backgroundColor: "#F3EFE0", paddingHorizontal: 30, height: "100%" },
  txt1: { fontSize: 32, fontWeight: "800" },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    // borderColor: "gray",
    fontSize: 18,
    paddingStart: 12,
    paddingVertical: 7,
    borderRadius: 6,
  },
  textarea: {
    backgroundColor: "white",
    borderWidth: 1,
    // borderColor: "gray",
    fontSize: 18,
    paddingStart: 12,
    paddingVertical: 7,
    borderRadius: 6,
  },
  txt2: { fontSize: 18, fontWeight: "600", marginTop: 25, marginBottom: 10 },
  checkbox: { height: 20, width: 20, borderColor: "black", borderWidth: 1 },
  submit: {
    backgroundColor: "green",
    marginHorizontal: 30,
    marginVertical: 20,
    marginBottom: 60,
    paddingVertical: 10,
    borderRadius: 5,
  },
  subtxt: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontWeight: "800",
  },
});
