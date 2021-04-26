import React from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import colors from '../../config/colors'

export default function AppLinearGradient({ style }) {
    return (
        <LinearGradient
            colors={['transparent' , colors.dark]}
            style={[styles.gradient, style]}
        />
    )
}

const styles = StyleSheet.create({
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "40%",
    },
})
