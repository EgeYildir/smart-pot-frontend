import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NotificationsScreen from '../screens/NotificationsScreen'
import PlantScreen from '../screens/PlantScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Plant" component={PlantScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
)

export default TabNavigator;