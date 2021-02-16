import React from 'react'
import { View } from 'react-native'
import { TextInput } from './custom-item-lib'

export default function SearchBar({ ...props }) {
    return (
        <View>
            <TextInput 
                placeholder="Search"
                {...props}
            />
        </View>
    )
}
