import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <StatusBar style="dark" />
        <View style={styles.card}>
          <Text>Hello Abhishek!</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>HomeScreen</Text>
          <Text style={styles.subtitle}>Hello</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    margin: 16,

    /* For Android */
    elevation: 20,

    /* For IOS */
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {},
  subtitle: {}
})
