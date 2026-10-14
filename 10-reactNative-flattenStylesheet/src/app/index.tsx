import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const styleA = StyleSheet.create({ text: { color: "red", fontSize: 16 }});
const styleB = StyleSheet.create({ text: { fontSize: 24, fontWeight: "bold" } });

const flat = StyleSheet.flatten([styleA.text, styleB.text]);

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={flat}>HomeScreen!</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen
