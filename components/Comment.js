import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Text } from './custom-item-lib'
import RoundPicture from './RoundPicture'
import useApi from '../hooks/useApi'
import userDataApi from '../api/userData'

export default function Comment({ userID, text, pictureUri }) {
    const getUserApi = useApi(userDataApi.getUserData);
    const [username, setUsername] = useState("");

    useEffect(() => {
        getUserApi.request(userID);
        getUsername();
    }, []);

    const getUsername = async () => {
        getUserApi.request(userID);
        if(getUserApi.data?.User?.firstName ?? false)
            setUsername(getUserApi.data.User.firstName + " " + getUserApi.data.User.lastName);
    }

    return (
        <Card style={styles.container}>
            <RoundPicture style={styles.picture} picture={pictureUri} />
            <View style={styles.textContainer} >
                <Text text={username} />
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
