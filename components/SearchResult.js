import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Text } from './custom-item-lib'
import { RoundPicture } from './default'

export default function SearchResult({ title, pictureUri }) {
    return (
        <Card style={styles.container}>
            <RoundPicture style={styles.picture} source={pictureUri} />
            <Text text={title} />
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