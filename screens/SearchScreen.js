import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Post, SearchBar } from '../components/default'

const results = [
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
]

export default function SearchScreen() {
    return (
        <View>
            <SearchBar 
                onChangeText={() => {
                    //TODO: Fill this method.
                }}
            />
            <FlatList //FlatList returns search results inside.
                data={results}
                keyExtractor={result => result.id.toString()}
                renderItem={({ item }) => (
                    <Post //TODO: Change this to search result component.
                        picture={item.images[0]}
                        name={item.plant}
                    />
                )}
            />
        </View>
    )
}
