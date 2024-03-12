import React from "react";
import 'react-native-gesture-handler';
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, Pressable } from "react-native";
import { StatusBar } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";
import Navigation from "./Navigation";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

const App = () => {

  function MyStack() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="BottomNavigation"
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
          }} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Tasks App",
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#222f3e",
              color: "red",
            },
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("TaskFormScreen")}
              >
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="TaskFormScreen"
          component={TaskFormScreen}
          options={{
            title: 'Create a Task',
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
          }}
        />
      </Stack.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#222f3e" />
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
