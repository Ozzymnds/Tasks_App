import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TextInput, Pressable, Alert, ScrollView } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "../credenciales";

export default function LoginScreen(props) {
    // Variables de estado para el email y la contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Función para registro
    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('User created')
                props.navigation.navigate('BottomNavigation');
            })
            .catch(error => {
                console.log(error);
                Alert.alert('Error', 'El usuario o la contraseña no es correcta', error);
            });
    }


    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("Signed in")
                props.navigation.navigate('BottomNavigation');
            })
            .catch(error => {
                console.log(error);
                Alert.alert('Error', 'El usuario o la contraseña no es correcta', error);
            });
    }

    return (
        <ScrollView contentContainerStyle={styles.padre}>
            <View>
                <Text style={styles.bienvenida}>
                    ¡Bienvenido a la aplicación para almacenar tus tareas!
                </Text>
                <Text style={styles.info}>
                    Para iniciar la app regístrate o usa un correo ya almacenado previamente gracias a Firebase
                </Text>
            </View>
            <View>
                <Image source={require('../assets/taskImage.png')} style={styles.profile} />
            </View>

            <View style={styles.card}>
                <View style={styles.textBox}>
                    <TextInput
                        placeholder='correo@gmail.com'
                        style={{ paddingHorizontal: 15 }}
                        onChangeText={(text) => setEmail(text)} />
                </View>
                <View style={styles.textBox}>
                    <TextInput
                        placeholder='Password'
                        style={{ paddingHorizontal: 15 }}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)} />
                </View>
                <View style={styles.padreButton}>
                    <Pressable
                        style={styles.buttonBox}
                        onPress={handleSignIn}>
                        <Text style={styles.text}>Sign In</Text>
                    </Pressable>
                </View>
                <View style={styles.padreButton}>
                    <Pressable
                        style={styles.buttonBox}
                        onPress={handleCreateAccount}>
                        <Text style={styles.text}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    padre: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: 'white'
    },
    bienvenida: {
        fontSize: 30,
        color: '#222f3e',
        textAlign: 'center',
        marginVertical: 20,
    },
    info: {
        fontSize: 15,
        color: '#222f3e',
        textAlign: 'center',
        marginVertical: 20,
    },
    card: {
        margin: 20,
        width: "90%",
        padding: 20,
        height: 370,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textBox: {
        paddingVertical: 20,
        backgroundColor: '#cccccc10',
        borderRadius: 30,
        marginVertical: 10,
    },
    padreButton: {
        alignItems: 'center',
    },
    buttonBox: {
        backgroundColor: '#222f3e',
        padding: 10,
        borderRadius: 30,
        paddingVertical: 20,
        width: 150,
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        color: 'white'
    }
})
