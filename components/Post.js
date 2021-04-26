import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { Card, Text } from './custom-item-lib'
import  RoundPicture  from './RoundPicture'

export default function Post({ picture, name, points, postID, navigation }) {
    return (
        <TouchableHighlight
            onPress={() => {
                navigation.navigate("PostScreen", { id: postID })
            }}
        >
            <Card style={styles.container}>
                <RoundPicture style={styles.picture} source={picture} />
                <Text text={name} />
            </Card>
        </TouchableHighlight>
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
