import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useWindowDimensions } from "react-native";

function HomeScreen() { 
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
        </View>
    );
}

function SearchScreen() { 
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Search</Text>
        </View>
    )
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Profile</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() { 
    const { height, width } = useWindowDimensions();

    return (
        <Tab.Navigator initialRouteName='Search'
            // screenOptions={{ headerShown: true }}
            screenOptions={
                ({ route }) => ({
                    tabBarStyle: {
                        height: 0.08 * height,
                        paddingBottom: 10
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'green',
                    tabBarIcon: ({ focused, color, size }) => { 
                        const icon = route.name === "Home"
                            ? focused ? "home" : 'home-outline'
                            : route.name === "Search"
                                ? focused ? "search" : "search-outline"
                                : focused ? "chatbubble" : "chatbubble-outline"

                        return <Ionicons name={icon} size={size} color={color} />
                    }
                })
            }
        >
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    title: 'DashBoard',
                    tabBarLabel: 'Start'
                }}

            />
            <Tab.Screen name='Search' component={SearchScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen}
                options={{
                    tabBarBadge: width,
                }}
            />
        </Tab.Navigator>
    );
}

export default function DynamicTabNavigator() { 
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
