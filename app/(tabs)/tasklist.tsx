import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const existingTasks = await AsyncStorage.getItem("tasks");
        if (existingTasks) {
          setTasks(JSON.parse(existingTasks));
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const toggleTaskCompletion = async (id: string) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      console.error("Error updating task completion:", error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskContainer}>
      asdasd
      <TouchableOpacity
        style={[
          styles.task,
          item.completed ? styles.taskCompleted : styles.taskIncomplete,
        ]}
        onPress={() => toggleTaskCompletion(item.id)}
      >
        <Text style={styles.taskText}>{item.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  taskList: {
    flex: 1,
    width: "100%",
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  task: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
  },
  taskCompleted: {
    backgroundColor: "#D3FFD3",
  },
  taskIncomplete: {
    backgroundColor: "#FFE5E5",
  },
  taskText: {
    fontSize: 18,
  },
  deleteText: {
    color: "red",
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    color: "blue",
  },
});

export default TaskList;
