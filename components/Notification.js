import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Text } from './custom-item-lib'
import  RoundPicture  from './RoundPicture'

export default function Notification({ pictureSource, notifName, notifText }) {
    return (
        <Card style={styles.container} >
            <RoundPicture source={pictureSource} style={styles.picture} />
            <Text>{/** This kind of wrapping is to make two text objects inline while preventing overflow */}
                <Text text={notifName} style={styles.nameText} /> 
                <Text text={notifText} />
            </Text>
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
