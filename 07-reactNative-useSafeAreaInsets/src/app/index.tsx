import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import {
  useSafeAreaInsets,
  SafeAreaProvider,
  initialWindowMetrics
} from "react-native-safe-area-context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  // return (
  //   <SafeAreaProvider
  //     initialMetrics={initialWindowMetrics}
  //     style={{
  //       backgroundColor: "#9edd31",
  //       paddingTop: initialWindowMetrics?.insets.top,
  //       paddingLeft: initialWindowMetrics?.insets.left,
  //       paddingBottom: initialWindowMetrics?.insets.bottom
  //     }}
  //   >
  //     <View
  //       style={{
  //         backgroundColor: "#cacaf5",
  //         paddingTop: initialWindowMetrics?.insets.top,
  //         paddingLeft: initialWindowMetrics?.insets.left,
  //         paddingBottom: initialWindowMetrics?.insets.bottom
  //       }}
  //     >
  //       <Text>Hello App!</Text>
  //     </View>
  //   </SafeAreaProvider>
  // );

  return (
    <View
      style={{
        backgroundColor: "red",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar barStyle={"dark-content"} />
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
