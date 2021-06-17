import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppImagePicker from './AppImagePicker'

export default function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    /**
     * 
     */
    
    return (
        <View style={styles.container} >
            {imageUris.map((uri) => (
                <AppImagePicker 
                    imageUri={uri} 
                    key={uri} 
                    onChangeImage={() => {onRemoveImage(uri)}} 
                />
            ))}
            <AppImagePicker onChangeImage={(uri) => {onAddImage(uri)}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
})
