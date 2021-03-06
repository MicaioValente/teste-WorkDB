import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function MainStack() {

    return <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen 
            name="Home"
            component={Home}
        />

    </Stack.Navigator>;
}
