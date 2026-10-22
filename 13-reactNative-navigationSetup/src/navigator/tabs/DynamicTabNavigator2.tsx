import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import SearchScreen from "../../screens/SearchScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackScreens() { 
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Details" component={DetailScreen} />
      </HomeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() { 
    const { height, width } = useWindowDimensions();

    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#d60dc2b9",
          tabBarInactiveTintColor: "#e3a60ddc",
        }}
      >
        <Tab.Screen
          name="Overview"
          component={HomeStackScreens}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "rocket" : "rocket-outline"}
                size={size * 1.25}
                color={color}
              />
            ),
            tabBarStyle: {
              height: 0.085 * height,
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "rocket" : "rocket-outline"}
                size={size * 1.25}
                color={color}
              />
            ),
            tabBarStyle: {
              height: 0.085 * height,
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "rocket" : "rocket-outline"}
                size={size * 1.25}
                color={color}
              />
            ),
            tabBarStyle: {
              height: 0.085 * height,
            },
          }}
        />
      </Tab.Navigator>
    );
}

export default function DynamicTabNavigator2() { 
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
