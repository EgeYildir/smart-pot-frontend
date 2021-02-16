import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Text } from './custom-item-lib'
import { RoundPicture } from './default'

export default function Post({ picture, name, points }) {
    return (
        <Card style={styles.container}>
            <RoundPicture style={styles.picture} source={picture} />
            <Text text={name} />
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    picture: {
        height: 50,
        width: 50,
    },
})
