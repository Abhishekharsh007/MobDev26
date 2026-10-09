import { StyleSheet, Text, View, ScrollView, Button, Switch } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  const items = Array.from({ length: 2 }, (_, i) => `Item ${i + 1}`);
  const [theme, setTheme] = React.useState(false);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "yellow" }}
      contentContainerStyle={{
        padding: 16,
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <View
          key={item}
          style={{
            backgroundColor: "white",
            padding: 16,
            borderWidth: 5,
            borderBlockColor: "#26e092",
            borderLeftColor: "#26e092",
            borderRightColor: "#26e092",
            borderRadius: 10,
            marginBottom: 15,
            shadowColor: "#f0079e",
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Text style={{fontSize: 20}}>{item}</Text>
        </View>
      ))}

      <Button
        title="Click Me"
        color={"green"}
        onPress={() => alert("Hello Sir!")}
      />

      <Switch
        value={theme}
        onValueChange={setTheme}
        trackColor={{ false: "#0ddd", true: "#6c63ff" }}
        thumbColor={"pink"}
      />
    </ScrollView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({})