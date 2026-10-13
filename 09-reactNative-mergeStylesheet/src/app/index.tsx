import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  const isActive = true;

  const buttonStyle = StyleSheet.compose(
    styles.button,
    isActive ? styles.activeButton : null
  )

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>First Text</Text>
      </View>
      <View style={[styles.button, isActive && styles.activeButton]}>
        <Text style={styles.buttonText}>Second Text</Text>
      </View>

      {/* @ts-ignore */}
      <View style={buttonStyle}>
        <Text style={styles.buttonText}>Third Text</Text>
      </View>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#ccc'  // Default grey
  },
  activeButton: {
    backgroundColor: '#6C63FF', // Override to purple when active
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
})
