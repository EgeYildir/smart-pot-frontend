import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../../config/colors'

export default function Separator() {
    return (
        <View style={styles.separator}></View>
    )
}

const styles = StyleSheet.create({
    separator: {
        width: "90%",
        height: 1,
        backgroundColor: colors.text,
    },
})
