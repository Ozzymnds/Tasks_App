// Layout.js
import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#4d9664" />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        backgroundColor: "#4d9664",
        flex: 1,
        alignItems: "center",
    },
    title: {
        color: "#ffffff",
        fontSize: 20,
        textAlign: "center",
        marginTop: 10,
    },
});

export default Layout;
