import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button} from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation<any>();

  return (
      <View style={{
          padding: 10,
          gap: 15,
          margin: 10
      }}>
        <Text>HomeScreen</Text>
        {/* <Button screen={"Details"}>Go to details</Button> */}
        <Button onPress={() => navigation.navigate("Details", { username: "Abhishek" })}>
          Go to details page
        </Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})