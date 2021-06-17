import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Text } from './custom-item-lib'
import  RoundPicture  from './RoundPicture'

export default function SearchResult({ title, picture }) {
    return (
        <Card style={styles.container}>
            <RoundPicture style={styles.picture} source={picture} />
            <Text text={title} style={styles.text} />
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
    text: {
        marginLeft: 5,
    },
})
