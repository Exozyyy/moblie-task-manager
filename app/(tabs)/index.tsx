import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const MainWindow: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <Text style={styles.subtitle}>Manage your tasks with ease</Text>

      <Link href='/tasklist' asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Tasks</Text>
        </TouchableOpacity>
      </Link>

      <Link href='/newtask' asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create New Task</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#4FD1C5",
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MainWindow;
