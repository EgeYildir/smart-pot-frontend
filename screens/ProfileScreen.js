import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View, FlatList } from 'react-native'
import { Button, Text } from '../components/custom-item-lib'
import { Error, RoundPicture, Post, ImagePicker, Image } from '../components/default';
import useApi from '../hooks/useApi'
import userDataApi from '../api/userData'
import postsApi from '../api/posts'
import useAuth from '../auth/useAuth'

const userData = {
    username: "Ege Yıldır",
    image: "https://picsum.photos/id/1038/700/700",
}

export default function ProfileScreen({ navigation }) {

/**{(getUserApi.data != null && getUserApi.error == null) ?
            <View >
            <ActivityIndicator animating={loading} size="large" />
            
            <Text text={getUserApi.data.User.firstName + " " + getUserApi.data.User.lastName} />
            <Button text="Logout" 
                onPress={() => authContext.logout()}
            />
            
            </View> : null} 
            
            
            <FlatList 
                        data={getPostsApi.data.Posts}
                        keyExtractor={post => post.id}
                        renderItem={({ item }) => (
                            <Post
                                postID={item.id}
                                name={item.plant}
                                navigation={navigation}
                            />
                        )}
                        refreshing={getPostsApi.loading}
                        onRefresh={() => getPostsApi.request(userID)}
                    />
            */

    const [refreshing, setRefreshing] = useState(false);
    const authContext = useAuth();
    const userID = authContext.user.userId;

    const [imageUri, setImageUri] = useState();

    const getUserApi = useApi(userDataApi.getUserData);
    const getPostsApi = useApi(postsApi.getUserPosts);
    
    useEffect(() => {
        getUserApi.request(userID);
        getPostsApi.request(userID);
    },[]);

    //console.log(getPostsApi.data);
    //console.log(getUserApi.error);

    return (
        <View style={styles.container}>
            <ActivityIndicator visible={getUserApi.loading} />
            {(getUserApi.data != null && !getUserApi.error) ? 
            <>
                <Image source={userData.image} style={styles.image} />
                <View style={styles.cardContainer}>
                    <Text text={getUserApi.data.User.firstName + " " + getUserApi.data.User.lastName} style={styles.title} />
                    <Text text={getUserApi.data.User.email} style={styles.infoText} />
                    <Button text="Add post" 
                        onPress={() => navigation.navigate("AddPostScreen")}
                    />
                    {getPostsApi.data != null ? 
                        <View>
                            <FlatList 
                                data={getPostsApi.data.Posts}
                                keyExtractor={post => post.id}
                                renderItem={({ item }) => (
                                    <Post
                                        postID={item.id}
                                        name={item.plant}
                                        navigation={navigation}
                                        votes={item.like}
                                        userID={userID}
                                    />
                                )}
                                refreshing={getPostsApi.loading}
                                onRefresh={() => getPostsApi.request(userID)}
                            />
                        </View> : 
                        <View>
                            <Text text="Could not retrieve posts!" />
                            <Button
                                text="Try Again"
                                onPress={() => getPostsApi.request(userID)}
                            />
                        </View> }
                </View>
            </> :  
            <View>
                <Text text="Could not retrieve data!" />
                <Button
                    text="Try Again"
                    onPress={() => getUserApi.request(userID)}
                />
            </View> }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
    },
    picture: {
        height: 150,
        width: 150,
    },
    content: {
        alignItems: "stretch",
        alignSelf: "stretch",
    },
    cardContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        marginTop: "50%",
        paddingTop: 25,
        padding: 15,
    },
    image: {
        position: "absolute",
    },
    title: {
        fontSize: 25,
        marginLeft: 15,
        fontWeight: "bold",
    },
    infoText: {
        margin: 15,
    },
})
