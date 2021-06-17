import React, { useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import { DataBlock, Image, Comment, CommentInput } from '../components/default'
import { Text, Button } from '../components/custom-item-lib'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import useApi from '../hooks/useApi'
import postsApi from '../api/posts'
import commentApi from '../api/comment'
import userDataApi from '../api/userData'
import colors from '../config/colors'
import { FlatList } from 'react-native-gesture-handler'
import useAuth from '../auth/useAuth'

const plantData = 
    {
        id: 1,
        userId: "1",
        plant: "Strawberry",
        envData:
        {
            humidity: "62",
            temperature: "16",
            light: "100",
        },
        images: [
            {
                id: "1",
                uri: "https://picsum.photos/id/1080/200",
            },
            {
                id: "2",
                uri: "https://picsum.photos/id/189/200",
            }
        ],
        date: "06.06.06",
    };

export default function PostScreen({ navigation, route }) {
    const {data: post, error, loading: loading, request: loadPost} = useApi(postsApi.getPost);
    const postID = route.params.id;
    const getCommentApi = useApi(commentApi.getByPost);
    const getUserApi = useApi(userDataApi.getUserData);
    const authContext = useAuth();
    const userID = authContext.user.userId;

    //<Text text={post.votes} /><Image source={plantData.images[0]} style={styles.image} />

    useEffect(() => {
        loadPost(postID);
        getCommentApi.request(postID, 0);
        getUserApi.request(userID);
    }, []);


    console.log(getUserApi.data);
    //const postdata = post.Posts[0];

    return (
        <ScrollView  nestedScrollEnabled={true}>
        <View style={styles.container} >
            {post != null ? <>
                
                <View style={styles.cardContainer} >
                    <Text text={post.Posts.plant} style={styles.title} />
                    <View style={styles.voteContainer} >
                        
                        <MaterialCommunityIcons name="star" size={25} color={colors.primary} />
                    </View>
                    <View style={styles.dataContainer}>
                        <DataBlock 
                            text="Temperature"
                            value={post.Posts.envData.temperature}
                            style={styles.temperature}
                        />
                        <DataBlock 
                            text="Humidity"
                            value={post.Posts.envData.humidity}
                            style={styles.humidity}
                        />
                    </View>
                    <View style={styles.dataContainer} >
                        <DataBlock 
                            text="Light"
                            value={post.Posts.envData.light}
                            style={styles.light}
                        />
                        
                    </View>
                    <CommentInput postID={postID} />
                    {getCommentApi.data != null ? 
                    <View>
                        <FlatList 
                            data={getCommentApi.data.Comments}
                            keyExtractor={comment => comment.id}
                            renderItem={({ item }) => (
                                <Comment
                                    userID={item.userId}
                                    text={item.content}
                                />
                            )}
                            refreshing={loading}
                            onRefresh={() => getCommentApi.request(postID, 0)}
                            nestedScrollEnabled={true}
                        />
                    </View> : 
                    <View>
                        <Text text="Could not retrieve comments!" />
                        <Button
                            text="Try Again"
                            onPress={() => getCommentApi.request(postID, 0)}
                        />
                    </View> }
                </View>
            </> : 
            <View>
                <Text text="Could not retrieve data!" />
                <Button
                    text="Try Again"
                    onPress={() => loadPost(userID)}
                />
            </View> }
            
        </View>
        </ScrollView>
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
    cardContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        marginTop: "40%",
        paddingTop: 25,
        padding: 15,
    },
    voteContainer: {
        flexDirection: "row",
        margin: 5,
        marginLeft: 10,
    },
    image: {
        position: "absolute",
    },
    title: {
        marginLeft: 10,
        fontSize: 25,
        fontWeight: "bold",
    },
    temperature: {
        color: "red",
        width: "100%",
    },
    humidity: {
        color: "blue",
    },
    light: {
        color: "green",
    },
    airQuality: {
        color: "yellow",
    },
    
})
