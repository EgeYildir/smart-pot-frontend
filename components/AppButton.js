import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'

export default function AppButton({ text, onPress, style, lightTheme }) {
    return (
        <View>
        {lightTheme ?
            <TouchableOpacity style={[styles.lightButton, style]} onPress={onPress}>
            <AppText style={styles.lightText} text={text}/>
            </TouchableOpacity>
            :
            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                <AppText style={styles.text} text={text}/>
            </TouchableOpacity>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginTop: 10,
    },
    text: {
        color: colors.light,
    },
    lightButton: {
        backgroundColor: colors.light,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginTop: 10,
    },
    lightText: {
        color: colors.text,
    },
})
