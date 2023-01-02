import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  Splash,
  Home,
  OnBoarding,
  Login,
  Forgot,
  Fasilitas,
  Users,
  DetailFasilitas,
  Dana_Home,
  Dana_Add,
  Edit_Dana,
  Aduan,
  Warga,
} from "./src/screens/Index";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
        <Stack.Screen name="OnBoarding" component={OnBoarding}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Forgot" component={Forgot}></Stack.Screen>
        <Stack.Screen name="Dana_Home" component={Dana_Home}></Stack.Screen>
        <Stack.Screen name="Dana_Add" component={Dana_Add}></Stack.Screen>
        <Stack.Screen name="Dana_Edit" component={Edit_Dana}></Stack.Screen>
        <Stack.Screen name="Home" component={TabMenu}></Stack.Screen>
        <Stack.Screen
          name="DetailFasilitas"
          component={DetailFasilitas}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

export function TabMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Fasilitas") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Users") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#00A187",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Dashboard" component={Home} />
      <Tab.Screen name="Fasilitas" component={Fasilitas} />
      <Tab.Screen name="Users" component={Users} />
    </Tab.Navigator>
  );
}
