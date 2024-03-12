import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const TaskItem = ({ task, handleDelete }) => {
    const navigation = useNavigation();

    return (
        <View>
            <Pressable
                style={styles.itemContainer}
                onPress={() => navigation.navigate("TaskFormScreen", { id: task.id })}
            >
                <View style={styles.itemContent}>
                    <Text style={styles.itemTitle}>{task.title}</Text>
                    <Text style={styles.itemDescription}>{task.description}</Text>
                </View>
                <Pressable
                    style={styles.deleteButton}
                    onPress={() => handleDelete(task.id)}
                >
                    <Icon name="trash" style={styles.trashIcon} />
                </Pressable>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#5c9bbb',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    itemContent: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF', // Color de título blanco
    },
    itemDescription: {
        fontSize: 14,
        color: '#FFFFFF', // Color de descripción blanco
    },
    deleteButton: {
        backgroundColor: '#E74C3C', // Color de botón de eliminar rojo
        padding: 8,
        borderRadius: 5,
    },
    trashIcon: {
        color: '#FFFFFF', // Color del icono blanco
        fontSize: 20,
    },
});







export default TaskItem;