import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button} from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation<any>();
  return (
    <View>
      <Text>Profile Screen</Text>
      
      {/* popToTop and replace */}
      <Button onPress={() => navigation.popTo("Home")}>
        <Text>Go to Home Screen</Text>
      </Button>
    </View>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({})