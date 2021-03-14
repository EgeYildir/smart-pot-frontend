import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Button, Text } from '../components/custom-item-lib'
import { RoundPicture, Post } from '../components/default';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi'
import userDataApi from '../api/userData'

export default function ProfileScreen() {
    const authContext = useAuth();
    const {data: user, error, loading, request: loadUserData} = useApi(userDataApi.getUserData);
    console.log(user);

    useEffect(() => {
        loadUserData();
    },[]);

    return (
        <View style={styles.container}>
            <RoundPicture source={user.image} style={styles.picture} />
            <Text text={user.firstname + " " + user.lastname} />
            <View style={styles.content}>
                <Button 
                    text="Log Out"
                    onPress={() => authContext.logout()}
                />
                {/*<FlatList 
                    data={posts}
                    keyExtractor={post => post.id.toString()}
                    renderItem={({ item }) => (
                        <Post 
                            picture={item.images[0]}
                            name={item.plant}
                        />
                    )}
                    />*/}
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
