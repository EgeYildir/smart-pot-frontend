import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'
import { TextInput } from './custom-item-lib'

export default function SearchBar({ ...props }) {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Search"
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "stretch",
        marginHorizontal: 5,
    },
})
