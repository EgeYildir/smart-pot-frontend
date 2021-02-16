import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from './custom-item-lib'

export default function PlantStat({ value }) {
    return (
        <View>
            <Text text={value} style={styles.value} />
        </View>
    )
}

const styles = StyleSheet.create({
    value: {
        fontSize: 30,
    },
})
