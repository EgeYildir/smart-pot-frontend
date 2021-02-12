import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from '../components/custom-item-lib'

export default function ProfileScreen() {
    return (
        <View>
            <Text text="Username" />
            <Button 
                text="Log Out"
                onPress={() => {
                    
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
