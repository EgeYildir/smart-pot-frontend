import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from './custom-item-lib'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function Header() {
    return (
        <Text>
            <MaterialCommunityIcons name="leaf" size={25} color={colors.primary} />
            <Text text=" Smart Pot   " style={styles.title} />
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: colors.primary,
    },
})
