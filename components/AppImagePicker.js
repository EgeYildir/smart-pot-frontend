import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import * as ImagePicker from 'expo-image-picker'

export default function AppImagePicker({ imageUri, onChangeImage }) {

    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!granted) alert("You need permission to access camera roll.");
    };

    const handlePress = () => {
        if(!imageUri) selectImage();
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            console.log(result);
            if(!result.cancelled) onChangeImage(result.uri);
        } catch (error) {
            console.log("Error reading an image", error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container} >
                {!imageUri ? 
                    <MaterialCommunityIcons name="camera" size={40} color={colors.dark} />
                :
                    <Image source={{uri:imageUri}} style={styles.image} />
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 5,
        height: 100,
        width: 100,
        justifyContent: "center",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
})
