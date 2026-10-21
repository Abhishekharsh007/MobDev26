import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const DetailScreen = ({ route }: any) => {
    const navigation = useNavigation<any>();
    const { username } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Harsh",
          
            // 1. Style the header background container
            headerStyle: {
                backgroundColor: "#f4511e",  // Change this to your preferred color
                elevation: 10,                 // Shadow for Android
                shadowOpacity: 0.2,            // Shadow for iOS
            },

            // 2. Style the header back button and default text color
            headerTintColor: "#08f63b",

            // 3. Style the title text typography
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
            },

            // 4. Center the title text (Optional: forces centering on Android too)
            headerTitleAlign: "center",

            // 5. Animation
            animation: 'slide_from_bottom',
        });
    }, [navigation]);

    return (
        <View>
            <Text>DetailScreen: {username}</Text>
            <Button title='Go Profile' onPress={() => navigation.navigate("Profile")} />
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})
