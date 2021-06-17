import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HeaderBackButton } from '@react-navigation/stack'

import SettingsScreen from '../screens/SettingsScreen'

const Stack = createStackNavigator();

const SettingsNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={({ navigation }) => ({
                headerLeft: () => (<HeaderBackButton onPress={() => navigation.navigate("Profile")} />),
            })}
        />
    </Stack.Navigator>
)

export default SettingsNavigator;