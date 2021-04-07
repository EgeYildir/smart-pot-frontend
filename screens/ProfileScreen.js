import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Button, Text } from '../components/custom-item-lib'
import { RoundPicture, Post } from '../components/default';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi'
import userDataApi from '../api/userData'

const item = {
    id: 1,
    plant: "Rose",
    images: ["https://picsum.photos/200/300"]
}

export default function ProfileScreen({ navigation }) {
    const authContext = useAuth();
    const {data: user, error, loading, request: loadUserData} = useApi(userDataApi.getUserData);

    useEffect(() => {
        loadUserData();
    },[]);

    return (
        <View style={styles.container}>
            {error && <>
                <Text text="Oops, something went wrong..." />
                <Button text="Retry" onPress={loadUserData} />
            </>
            }
            <ActivityIndicator animating={loading} size="large" />
            <RoundPicture source={user.image} style={styles.picture} />
            <Text text={user.firstname + " " + user.lastname} />
            <Post 
                picture={item.images[0]}
                name={item.plant}
                navigation={navigation}
                postID={item.id}
            />
            <View style={styles.content}>
                <Button 
                    text="Log Out"
                    onPress={() => authContext.logout()}
                />
                <FlatList 
                    data={posts}
                    keyExtractor={post => post.id.toString()}
                    renderItem={({ item }) => (
                        <Post 
                            picture={item.images[0]}
                            name={item.plant}
                            navigation={navigation}
                            postID={post.id}
                        />
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
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
