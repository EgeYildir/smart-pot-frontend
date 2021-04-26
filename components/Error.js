import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from './custom-item-lib'

export default function Error({ style, onPress }) {
    return (
        <View style={[styles.errorContainer, style]} >
            <Text text="Oops, something went wrong..." style={styles.text} />
            <Button text="Try Again" onPress={onPress} style={styles.button} />
        </View>
    )
}

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        height: "100%",
    },
    text: {
        margin: 10,
    },
    button: {
        alignSelf: "stretch",
        margin: 10,
    },
})
