import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Text } from './custom-item-lib'
import  RoundPicture  from './RoundPicture'

export default function Notification({ pictureSource, notifName, notifText }) {
    return (
        <Card style={styles.container} >
            <RoundPicture source={pictureSource} />
            <Text style={styles.text}>{/** This kind of wrapping is to make two text objects inline while preventing overflow */}
                <Text text={notifName} style={styles.nameText} /> 
                <Text text={notifText} style={styles.notifText} />
            </Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    nameText: {
        fontWeight: "bold",
        fontSize: 17,
    },
    notifText: {
        fontSize: 17,
    },
    text:{
        flex: 1,
        marginLeft: 8,
    }
})
