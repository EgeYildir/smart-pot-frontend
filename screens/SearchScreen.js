import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Screen } from '../components/custom-item-lib'
import { SearchBar, SearchResult } from '../components/default'
import useApi from '../hooks/useApi'
import searchResultsApi from '../api/searchResults'

export default function SearchScreen() {
    const getSearchApi = useApi(searchResultsApi.getSearchResults);
    const [query, setQuery] = useState("");
    const [pagenumber, setPagenumber] = useState(1);

    return (
        <Screen>
            <SearchBar 
                onChangeText={(text) => {
                    if(text.length > 2){
                        setQuery(text);
                        getSearchApi.request(query, pagenumber);
                    }
                }}
            />
            <FlatList
                data={getSearchApi.data}
                keyExtractor={result => result.id}
                renderItem={({ item }) => (
                    <SearchResult 
                        title={item.plant}
                    />
                )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "stretch",
        height: "100%",
    }
})
