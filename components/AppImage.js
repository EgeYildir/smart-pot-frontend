import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height ;

export default function AppImage({ source, style }) {
    return (
        <View style={[styles.container, style]}>
            <Image 
                source={{
                    uri: source,
                }}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "stretch",
    },
    image: {
        height: width,
        width: width,
    },
})
