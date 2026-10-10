import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const USERS = [
  { id: "1", name: "Alice Johnson", role: "Designer" },
  { id: "2", name: "Bob Smith", role: "Developer" },
  { id: "3", name: "Carol White", role: "Manager" },
  { id: "4", name: "David Brown", role: "Developer" },
  { id: "5", name: "Eve Davis", role: "Designer" },
];

const HomeScreen = () => {
  return (
    <FlatList
      contentContainerStyle={{
        padding: 16,
        alignItems: "center",
      }}
      style={{
        backgroundColor: "#c11a1a"
      }}
      // horizontal
      data={USERS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={{ fontSize: 20, padding: 20, color: "#c0fc28" }}>{item.name}</Text>
      )}
      ItemSeparatorComponent={() => (
        <View style={{ height: 5, backgroundColor: "blue" }} />
      )}
    />
  );
}

export default HomeScreen;

const styles = StyleSheet.create({})