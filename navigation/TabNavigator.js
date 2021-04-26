import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import NotificationsScreen from '../screens/NotificationsScreen'
import SearchScreen from '../screens/SearchScreen'

import PlantNavigator from './PlantNavigator'
import ProfileNavigator from './ProfileNavigator'

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator >
        <Tab.Screen 
            name="Profile" 
            component={ProfileNavigator} 
            options={{
                tabBarLabel: () => {return null},
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
            }}
        />
        <Tab.Screen 
            name="Plant" 
            component={PlantNavigator} 
            options={{
                tabBarLabel: () => {return null},
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="leaf" size={size} color={color} />
            }}
        />
        <Tab.Screen 
            name="Search" 
            component={SearchScreen} 
            options={{
                tabBarLabel: () => {return null},
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="magnify" size={size} color={color} />
            }}
        />
        <Tab.Screen 
            name="Notifications" 
            component={NotificationsScreen} 
            options={{
                tabBarLabel: () => {return null},
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="bell" size={size} color={color} />
            }}
        />
        
    </Tab.Navigator>
)

export default TabNavigator;