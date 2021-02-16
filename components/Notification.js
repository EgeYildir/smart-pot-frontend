import React from 'react'
import { StyleSheet } from 'react-native'
import { Card } from './custom-item-lib'
import { RoundPicture } from './default'
import { Text } from './custom-item-lib'

export default function Notification({ pictureSource, notifName, notifText }) {
    return (
        <Card style={styles.container} >
            <RoundPicture source={pictureSource} style={styles.picture} />
            <Text text={notifName} style={styles.nameText} />
            <Text text={notifText} />
        </Card>
    )
}

const styles = StyleSheet.create({
    picture: {
        height: 50,//Round picture needs width and height specified.
        width: 50,
    },
    container: {
        flexDirection: "row",
    },
    nameText: {
        fontWeight: "bold",
    },
})
