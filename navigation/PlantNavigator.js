import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PlantScreen from '../screens/PlantScreen'
import PlantDetailsScreen from '../screens/PlantDetailsScreen'

const Stack = createStackNavigator();

const PlantNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Plant" component={PlantScreen} />
        <Stack.Screen name="Plant Details" component={PlantDetailsScreen} />
    </Stack.Navigator>
)

export default PlantNavigator;