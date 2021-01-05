import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'

export default function AppButton({ text, onPress, style }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <AppText style={styles.text} text={text}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    text: {
        color: colors.light,
    }
})
