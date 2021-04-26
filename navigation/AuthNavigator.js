import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text } from '../components/custom-item-lib'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

import colors from '../config/colors'

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{
                headerTitle: props => 
                <Text>
                    <MaterialCommunityIcons name="leaf" size={25} color={colors.primary} />
                    <Text text=" Smart Pot   " style={styles.title} />
                </Text> ,
                headerTitleAlign: "center",
            }} 
        />
        <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{
                headerTitle: props => 
                <Text>
                    <MaterialCommunityIcons name="leaf" size={25} color={colors.primary} />
                    <Text text=" Smart Pot   " style={styles.title} />
                </Text> ,
                headerTitleAlign: "center",
            }} 
        />
    </Stack.Navigator>
)

const styles = StyleSheet.create({
    title: {
        color: colors.primary,
    }
})


export default AuthNavigator;