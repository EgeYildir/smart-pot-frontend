import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Text } from './custom-item-lib'
import RoundPicture from './RoundPicture'

export default function Comment({ name, text, pictureUri }) {
    return (
        <Card style={styles.container}>
            <RoundPicture style={styles.picture} picture={pictureUri} />
            <View style={styles.textContainer} >
                <Text text={name} />
                <Text text={text} />
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    textContainer: {
        flexDirection: "column",
    },
    picture: {
        height: 50,
        width: 50,
    },
})
