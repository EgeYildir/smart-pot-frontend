import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Card, Text } from './custom-item-lib'
import  RoundPicture  from './RoundPicture'
import StarButton from './StarButton'
import postsApi from '../api/posts'

export default function Post({ picture, name, votes, postID, navigation, userID }) {
    let checkStarred = votes.includes(userID);
    const [starred, setStarred] = useState(checkStarred);
    const [starCount, setStarCount] = useState(votes.length);
    
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("PostScreen", { id: postID })
            }}
        >
            <Card style={styles.container}>
                <View style={styles.textContainer}>
                    <RoundPicture style={styles.picture} source={picture} />
                    <Text text={name} style={styles.text} />
                    <View style={styles.votes} >
                        <Text text={starCount} />
                        <StarButton 
                            isStarred={starred}
                            onPress={() => {
                                postsApi.setVote(postID, userID)
                                setStarred(!starred);
                                setStarCount((!starred) ? starCount + 1 : starCount - 1);
                            }}
                        />
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        alignSelf: "stretch",
    },
    picture: {
        height: 50,
        width: 50,
    },
    text: {
        marginLeft: 10,
    },
    votes: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        alignItems: "center",
        flex: 1,
    },
    textContainer: {
        flexDirection: "row",
        width: "100%",
        alignSelf: "stretch",
        alignItems: "center",
        flex: 1,
    },
})
