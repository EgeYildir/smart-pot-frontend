import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

export default function AppActivityIndicator({ visible = false}) {
    if (!visible) return null;
    return (
        <View style={styles.overlay} >
            <LottieView 
                autoPlay
                loop
                source={require("../assets/animations/9131-loading-green.json")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "white",
        height: "100%",
        width: "100%",
    },
})