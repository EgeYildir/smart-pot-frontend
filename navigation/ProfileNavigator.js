import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PostScreen from '../screens/PostScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator();

const ProfileNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
);

export default ProfileNavigator;


