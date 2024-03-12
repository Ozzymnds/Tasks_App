import React, { useEffect, useState } from "react";
import { TextInput, Pressable, Text, StyleSheet } from "react-native";
import { CommonActions } from '@react-navigation/native';
import { SaveTask, GetTask, UpdateTask } from "../api";
import Layout from "../components/Layout";

const TaskFormScreen = ({ navigation, route }) => {
    const [task, setTask] = useState({
        title: "",
        description: "",
    });
    const [editing, setEditing] = useState(false);


    useEffect(() => {
        if (route.params && route.params.id) {
            setEditing(true);
            navigation.setOptions({
                headerTitle: "Updating a Task",
                headerTintColor: "#304a95",
                headerStyle: {
                    backgroundColor: "#4d9664",

                }
            });
            (async () => {
                const task = await GetTask(route.params.id);
                setTask({ title: task.title, description: task.description });
            })();
        }
    }, []);

    const handleSubmit = async () => {
        try {
            if (!editing) {
                await SaveTask(task);
            } else {
                console.log(route.params.id, task)
                await UpdateTask(route.params.id, { ...task });
            }
            navigation.dispatch(CommonActions.goBack());
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (name, value) => setTask({ ...task, [name]: value });

    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholder="Write a Title"
                placeholderTextColor="#576574"
                value={task.title}
                onChangeText={(text) => handleChange("title", text)}
            />

            <TextInput
                style={styles.inputText}
                placeholder="Write a short Description"
                placeholderTextColor="#576574"
                value={task.description}
                onChangeText={(text) => handleChange("description", text)}
                multiline={true}
                textAlignVertical="top"
            />

            {!editing ? (
                <Pressable style={styles.buttonSave} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Save Task</Text>
                </Pressable>
            ) : (
                <Pressable style={styles.buttonUpdate} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Update Task</Text>
                </Pressable>
            )}
        </Layout>
    );
};

const styles = StyleSheet.create({
    input: {
        width: "90%",
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#5c9bbb",
        height: 40,
        color: "#ffffff",
        textAlign: "left",
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    inputText: {
        width: "90%",
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#5c9bbb",
        minHeight: 100,
        color: "#ffffff",
        textAlignVertical: "top",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonSave: {
        paddingVertical: 12,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "#5c9bbb",
        width: "90%",
        alignSelf: "center",
    },
    buttonUpdate: {
        paddingVertical: 12,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "#FFC300",
        width: "90%",
        alignSelf: "center",
    },
    buttonText: {
        color: "#222f3e",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
});


export default TaskFormScreen;