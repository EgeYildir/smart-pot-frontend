import React, { useState } from 'react'
import { View, ScrollView, Alert } from 'react-native'
import { Form, FormInput, SubmitButton, Screen } from '../components/custom-item-lib'
import * as Yup from 'yup'
import postsApi from '../api/posts'
import useAuth from '../auth/useAuth'
import { FormImagePicker } from '../components/default'

const validationSchema = Yup.object().shape({
    plant: Yup.string().required().label("Plant"),
    temperature: Yup.string().required().label("Temperature"),
    humidity: Yup.string().required().label("Humidity"),
    light: Yup.string().required().label("Light"),
    info: Yup.string().required().label("Information"),
    images: Yup.array(), //.min(1, "Please select at least one image.")
})

export default function AddPostScreen() {
    const authContext = useAuth();
    const userID = authContext.user.userId;

    const handleSubmit = async (post, { resetForm }) => {
        const result = await postsApi.addPost(post, userID);
        console.log("Result is: " + result);
        if (result?.ok ?? false)
            Alert.alert("Could not post");
        else Alert.alert("Success!");
        console.log('Success');

        resetForm();
    }

    return (
        <Screen>
            <ScrollView>
            <Form
                initialValues={{plant: "", temperature: "", humidity: "", light: "", info: "", images: [],}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormInput
                    name="plant"
                    placeholder="Plant Name"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <FormInput 
                    name="temperature"
                    placeholder="Temperature"

                />
                <FormInput 
                    name="humidity"
                    placeholder="Humidity"

                />
                <FormInput 
                    name="light"
                    placeholder="Light"
                />
                <FormInput 
                    name="info"
                    placeholder="Information"
                />
                <FormImagePicker 
                    name="images"
                />
                <SubmitButton 
                    text="Submit"
                />
            </Form>
            </ScrollView>
        </Screen>
    )
}
