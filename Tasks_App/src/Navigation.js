// Navigation.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Tasks App"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bookmark" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: "#304a95",
                    tabBarInactiveTintColor: "#304a95",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#4d9664",
                    },
                    headerTintColor: "#304a95",
                    tabBarStyle: {
                        backgroundColor: "#4d9664"
                    },
                }}
            />
            <Tab.Screen
                name="Add a task"
                component={TaskFormScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="plus" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: "#283747",
                    tabBarInactiveTintColor: "#283747",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#4d9664",
                    },
                    headerTintColor: "#304a95",
                    tabBarStyle: {
                        backgroundColor: "#4d9664"
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default Navigation;
