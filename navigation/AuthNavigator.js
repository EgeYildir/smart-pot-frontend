import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Header } from '../components/default'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'


const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{
                headerTitle: props => 
                <Header /> ,
                headerTitleAlign: "center",
            }} 
        />
        <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{
                headerTitle: props => 
                <Header /> ,
                headerTitleAlign: "center",
            }} 
        />
        <Stack.Screen 
            name="ForgotPassword" 
            component={ForgotPasswordScreen} 
            options={{
                headerTitle: props => 
                <Header /> ,
                headerTitleAlign: "center",
            }} 
        />
    </Stack.Navigator>
)

const styles = StyleSheet.create({})


export default AuthNavigator;