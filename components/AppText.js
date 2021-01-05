import React from 'react'
import { StyleSheet, Text, Platform } from 'react-native'
import colors from '../config/colors'

export default function AppText({ text, style }) {
    return (
        <Text style={[styles.text, style]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: colors.text,
        fontFamily: "Arial",
        justifyContent: "center",
        alignItems: "center",
        ...Platform.select({
            ios: {
                fontFamily: "Avenir",
            },
            android: {
                fontFamily: "Roboto",
            },
        })
    }
})
