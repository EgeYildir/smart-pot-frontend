import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import useAuth from '../auth/useAuth';

import ProfileNavigator from './ProfileNavigator'
import SettingsNavigator from './SettingsNavigator'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const authContext = useAuth();

    return(
    <Drawer.Navigator 
        initialRouteName="Profile"
        drawerPosition="right"
        drawerType="slide"
        backBehavior="initialRoute"
        drawerContent={props => {
            return (
                <DrawerContentScrollView {...props}>
                  <DrawerItemList {...props} />
                  <DrawerItem label="Logout" onPress={() => authContext.logout()} />
                </DrawerContentScrollView>
            )}}
    >
        <Drawer.Screen name="Profile" component={ProfileNavigator} />
        <Drawer.Screen name="Settings" component={SettingsNavigator} />
    </Drawer.Navigator>
    )
}

export default DrawerNavigator;