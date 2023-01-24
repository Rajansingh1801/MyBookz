import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Login from "./src/screens/login";
import Contact from "./src/screens/contactus";
import Course from "./src/screens/course";
import About from "./src/screens/About";
import Content from "./src/screens/content";

const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#06283D",
              color: "#fff",
            },
            headerBlurEffect: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: "#06283D",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerStyle: {
              backgroundColor: "#06283D",
            },
            headerTitleAlign: "center",
            headerBlurEffect: true,
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerStyle: {
              backgroundColor: "#06283D",
            },
            headerTitleAlign: "center",
            headerBlurEffect: true,
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerStyle: {
              backgroundColor: "#06283D",
            },
            Headers: {},
            headerTitleAlign: "center",
            headerBlurEffect: true,
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="courseDeatils"
          component={Content}
          options={{
            headerStyle: {
              backgroundColor: "#06283D",
            },
            Headers: {},
            headerTitleAlign: "center",
            headerBlurEffect: true,
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});
