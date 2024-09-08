import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Link } from 'expo-router';

const MainWindow = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <Text style={styles.subtitle}>Manage your tasks with ease</Text>

      <Link href='/NEXTLINK'>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's Start!</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 11,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    minWidth: 300,
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#313133',
    fontFamily: '',
    backgroundColor: '#4FD1C5',
    borderRadius: 50,
    shadowColor: '#4FD1C5',
    shadowOffset: { width: 12, height: 12 },
    shadowOpacity: 0.64,
    shadowRadius: 24,
    elevation: 12,
    padding: 10,
    position: 'relative',
  },
  buttonText: {
    fontFamily: 'Nunito',
    letterSpacing: 1.3,
    color: '#fff',
  },
  buttonBefore: {
    position: 'absolute',
    borderRadius: 50,
    width: 312,
    height: 72,
    borderColor: '#00FFCB',
    borderWidth: 6,
    top: '50%',
    left: '50%',
    transform: [{ translateX: -156 }, { translateY: -36 }],
    opacity: 0,
    shadowColor: 'rgba(0,255,203,.64)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.64,
    shadowRadius: 60,
  },
  buttonAfter: {
    position: 'absolute',
    borderRadius: 50,
    width: 30,
    height: 30,
    borderColor: '#00FFCB',
    borderWidth: 6,
    top: '50%',
    left: '50%',
    transform: [{ translateX: -15 }, { translateY: -15 }],
    zIndex: -1,
  },
  buttonHover: {
    transform: [{ translateY: -6 }],
  },
});

export default MainWindow;
