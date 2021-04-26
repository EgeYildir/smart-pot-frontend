import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import useAuth from '../auth/useAuth';

import ProfileScreen from '../screens/ProfileScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const authContext = useAuth();
    return(
    <Drawer.Navigator drawerContent={props => {
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => authContext.logout()} />
        </DrawerContentScrollView>
    }} >
        <Drawer.Screen name="Profile" component={ProfileScreen} 
            options={{
                //drawerLabel: () => null,
                //title: null,
                //drawerIcon: () => null,
            }} 
        />
    </Drawer.Navigator>
    )
}

export default DrawerNavigator;