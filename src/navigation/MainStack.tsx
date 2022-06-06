import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../screens/Preload';
import Presentation from '../screens/Presentation';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import NewPassword from '../screens/NewPassword';
import TemporaryPassword from '../screens/TemporaryPassword';
import SetBasicInfos from '../screens/SetBasicInfos';
import SetBasicInfosReminder from '../screens/SetBasicInfosReminder';
import Home from './Tabs'
import SymptomsStack from './stack/SymptomsStack';
import Reminder from "../screens/Reminder";
import CreateReminder from "../screens/CreateReminder";
import Feddback from "../screens/Feedback";
import Docs from "../screens/Docs";

const Stack = createStackNavigator();

export default function MainStack() {

    return <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen 
            name="Preload"
            component={Preload}
        />
            <Stack.Screen 
            name="Presentation" 
            component={Presentation} 
        />
        <Stack.Screen 
            name="Login" 
            component={Login} 
        />
        <Stack.Screen 
            name="ForgotPassword" 
            component={ForgotPassword} 
        />
        <Stack.Screen 
            name="NewPassword" 
            component={NewPassword} 
        />
        <Stack.Screen 
            name="TemporaryPassword" 
            component={TemporaryPassword} 
        />
        <Stack.Screen 
            name="SetBasicInfos" 
            component={SetBasicInfos} 
        />
        <Stack.Screen 
            name="SetBasicInfosReminder" 
            component={SetBasicInfosReminder} 
        />
        <Stack.Screen 
            name="Home" 
            component={Home} 
        />
        <Stack.Screen 
            name="Symptoms" 
            component={SymptomsStack} 
        />
        <Stack.Screen 
            name="Reminder" 
            component={Reminder} 
        />
        <Stack.Screen 
            name="CreateReminder" 
            component={CreateReminder} 
        />
        <Stack.Screen 
            name="Feedback" 
            component={Feddback} 
        />
        <Stack.Screen 
            name="Docs" 
            component={Docs} 
        />

    </Stack.Navigator>;
}
