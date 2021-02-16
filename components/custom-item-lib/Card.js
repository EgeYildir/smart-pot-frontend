import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../../config/colors'

export default function Card({ children, style }) {
    return (
        <View style={[styles.container, style]}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 2,
    },
})
