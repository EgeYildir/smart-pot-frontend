import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Button, Text } from '../components/custom-item-lib'
import { RoundPicture, Post } from '../components/default';

const userData = {
    id: "1",
    email: "johndoe@gmail.com",
    firstName: "John",
    lastName: "Doe",
    image: "https://picsum.photos/200",
};

const posts = [
    {
        id: "1",
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
    },
];

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <RoundPicture source={userData.image} style={styles.picture} />
            <Text text={userData.firstName + " " + userData.lastName} />
            <View style={styles.content}>
                <Button 
                    text="Log Out"
                    onPress={() => {
                        //TODO: Readjust logout button after debugging.
                    }}
                />
                <FlatList 
                    data={posts}
                    keyExtractor={post => post.id.toString()}
                    renderItem={({ item }) => (
                        <Post 
                            picture={item.images[0]}
                            name={item.plant}
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
