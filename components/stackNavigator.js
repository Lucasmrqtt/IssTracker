import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";
import IssLocation from "../screens/issLocation";
import Meteors from "../screens/meteors";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator()

export default class StackNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false}}>
          <Stack.Screen name = "home" component={HomeScreen} />
          <Stack.Screen name = "issLocation" component={IssLocation} />
          <Stack.Screen name = "meteors" component={Meteors} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


