import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Card } from './custom-item-lib'

export default function DataBlock({ value, text, style }) {
    return (
        <Card>
            <Text text={text} />
            <Text text={value} style={[styles.value,style]} />
        </Card>
    )
}

const styles = StyleSheet.create({
    value: {
        fontSize: 30,
    },
})
