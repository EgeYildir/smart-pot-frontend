import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'


export default function Screen({ style, children }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: StatusBar.currentHeight,
    },
})
