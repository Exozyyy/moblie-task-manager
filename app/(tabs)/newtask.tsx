import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NewTask: React.FC = () => {
  const [task, setTask] = useState("");

  const handleCreateTask = async () => {
    if (task.trim()) {
      try {
        const existingTasks = await AsyncStorage.getItem("tasks");
        const tasks = existingTasks ? JSON.parse(existingTasks) : [];

        const newTask = {
          id: Date.now().toString(),
          name: task,
          completed: false,
        };
        tasks.push(newTask);

        await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
        setTask("");
        Alert.alert("Success", "Task created successfully");
      } catch (error) {
        console.error("Error saving task:", error);
        Alert.alert("Error", "Failed to create task");
      }
    } else {
      Alert.alert("Error", "Task name cannot be empty");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Task</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter task name'
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
        <Text style={styles.buttonText}>Create Task</Text>
      </TouchableOpacity>
      <Link href='/' style={styles.link}>
        <Text>Back to Home</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#4FD1C5",
    borderRadius: 25,
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    color: "blue",
  },
});

export default NewTask;
