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
  Dana_Home,
  Dana_Add,
  Edit_Dana,
  Agenda_Home,
  Agenda_Add,
  Agenda_Edit,
  User_Home,
  User_Add,
  User_Edit,
  Profile_Home,
  Profile_Email,
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
        <Stack.Screen name="Agenda_Home" component={Agenda_Home}></Stack.Screen>
        <Stack.Screen name="Agenda_Add" component={Agenda_Add}></Stack.Screen>
        <Stack.Screen name="Agenda_Edit" component={Agenda_Edit}></Stack.Screen>
        <Stack.Screen name="User_Home" component={User_Home}></Stack.Screen>
        <Stack.Screen name="User_Add" component={User_Add}></Stack.Screen>
        <Stack.Screen name="User_Edit" component={User_Edit}></Stack.Screen>
        <Stack.Screen
          name="Profile_Email"
          component={Profile_Email}
        ></Stack.Screen>
        <Stack.Screen name="Home" component={TabMenu}></Stack.Screen>
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
      <Tab.Screen name="Users" component={Profile_Home} />
    </Tab.Navigator>
  );
}
