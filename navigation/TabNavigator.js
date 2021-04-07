import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import NotificationsScreen from '../screens/NotificationsScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'

import PlantNavigator from './PlantNavigator'
import ProfileNavigator from './ProfileNavigator'

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Plant" component={PlantNavigator} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
)

export default TabNavigator;