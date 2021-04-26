import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Button, Text } from '../components/custom-item-lib'
import { Error, RoundPicture, Post } from '../components/default';
import useApi from '../hooks/useApi'
import userDataApi from '../api/userData'
import postsApi from '../api/posts'
import useAuth from '../auth/useAuth'

export default function ProfileScreen({ navigation }) {
    const [loading, setLoading] = useState(false);
    const authContext = useAuth();
    const userID = authContext.user.userId;

    const getUserApi = useApi(userDataApi.getUserData);
    const getPostsApi = useApi(postsApi.getUserPosts);
    
    useEffect(() => {
        getUserApi.request(userID);
        getPostsApi.request(userID);
    },[]);

    return (
        <View style={styles.container}>
            <Button text="Logout" 
                onPress={() => authContext.logout()}
            />
            {getUserApi.data != null ?
            <View >
            <ActivityIndicator animating={loading} size="large" />
            
            <Text text={getUserApi.data.User.firstName + " " + getUserApi.data.User.lastName} />
            <Button text="Logout" 
                onPress={() => authContext.logout()}
            />
            <Button text="Add post" 
                onPress={() => navigation.navigate("AddPostScreen")}
            />
            </View> : null}
            {getPostsApi.data != null ? 
                <View>
                    <FlatList 
                        data={getPostsApi.data.Posts}
                        keyExtractor={post => post.id}
                        renderItem={({ item }) => (
                            <Post
                                picture={item.images[0]}
                                name={item.plant}
                            />
                        )}
                    />
                </View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: 10,
    },
    picture: {
        height: 150,
        width: 150,
    },
    content: {
        alignItems: "stretch",
        alignSelf: "stretch",
    },
})
