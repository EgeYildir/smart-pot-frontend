import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Button } from '../components/custom-item-lib'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import PostScreen from '../screens/PostScreen'
import AddPostScreen from '../screens/AddPostScreen'
import ProfileScreen from '../screens/ProfileScreen'
import colors from '../config/colors'

const Stack = createStackNavigator();

const ProfileNavigator = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen}
            options={{
                headerRight: () => (
                    <Button 
                        text={<MaterialCommunityIcons name="menu" size={30} color={colors.dark} />}
                        style={styles.hamburger}
                        onPress={() => navigation.toggleDrawer()}
                    />
                )
            }}
        />
        <Stack.Screen name="PostScreen" component={PostScreen} />
        <Stack.Screen name="AddPostScreen" component={AddPostScreen} />
    </Stack.Navigator>
);

const styles = StyleSheet.create({
    hamburger: {
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgb(50,50,50)",
        marginTop: 0,
    },
});


export default ProfileNavigator;


