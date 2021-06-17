import React from 'react'
import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
import AppText from './AppText'

export default function AppErrorMessage({ error, visible }) {
    if (!visible || !error) return null;

    return (
        <AppText style={styles.error} text={error} />
    )
}

const styles = StyleSheet.create({
    error: {
        color: colors.error,
        marginLeft: 10,
        fontSize: 17,
    }
})
