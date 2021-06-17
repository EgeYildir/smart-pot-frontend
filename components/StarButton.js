import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

export default function StarButton({ isStarred, onPress, style }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress} >
            {isStarred ? 
                <MaterialCommunityIcons name="star" size={25} color={colors.primary} />
            :
                <MaterialCommunityIcons name="star-outline" size={25} color={colors.primary} />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        margin: 5,
    },
})
