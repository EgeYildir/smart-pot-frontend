import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { RoundPicture } from '../components/default'
import { Text } from '../components/custom-item-lib'

import useApi from '../hooks/useApi'
import postsApi from '../api/posts'

export default function PostScreen({ navigation, route }) {
    const {data: post, error, loading, request: loadPost} = useApi(postsApi.getPost);
    const postID = JSON.stringify(route.params.postID);

    useEffect(() => {
        loadPost(postID);
    }, []);

    return (
        <View style={styles.container} >
            <RoundPicture source={post.images[0]} style={styles.picture} />
            <Text text={post.plant} />
            <View style={styles.dataContainer} >
                <DataBlock 
                    text="Temperature"
                    value={post.envData.temperature}
                    style={styles.temperature}
                />
                <DataBlock 
                    text="Humidity"
                    value={post.envData.humidity}
                    style={styles.humidity}
                />
            </View>
            <View style={styles.dataContainer} >
                <DataBlock 
                    text="Light"
                    value={post.envData.light}
                    style={styles.light}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    dataContainer: {
        flexDirection: "row",
        alignItems: "stretch",
        alignSelf: "stretch",
    },
    picture: {
        height: 150,
        width: 150,
    },
})
