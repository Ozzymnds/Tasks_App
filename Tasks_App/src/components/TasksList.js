import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Alert, RefreshControl } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { DeleteTask, GetTasks } from "../api";
import TaskItem from "./TaskItem";

const TasksList = ({ navigation }) => {
    const [tasks, setTasks] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const isFocused = useIsFocused();

    const getTasks = async () => {
        try {
            const tasks = await GetTasks();
            setTasks(tasks);
        } catch (error) {
            console.log(error);
        }
    };

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await getTasks();
        setRefreshing(false);
    }, []);

    const handleDelete = async (id) => {
        await DeleteTask(id);
        await getTasks();
    };

    useEffect(() => {
        getTasks();
        console.log("called");
    }, [isFocused]);

    const renderItem = ({ item }) => (
        <TaskItem task={item} handleDelete={handleDelete} />
    );

    return (
        <SafeAreaView style={{ flex: 1, width: "90%" }}>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={["#78e08f"]}
                        progressBackgroundColor="#0a3d62"
                    />
                }
            />
        </SafeAreaView>
    );
};

export default TasksList;