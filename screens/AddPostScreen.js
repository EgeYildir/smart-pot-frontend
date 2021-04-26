import React from 'react'
import { View } from 'react-native'
import { Form, FormInput, SubmitButton, Screen } from '../components/custom-item-lib'
import * as Yup from 'yup'
import postsApi from '../api/posts'
import useAuth from '../auth/useAuth'

const validationSchema = Yup.object().shape({
    plant: Yup.string().required().label("Plant"),
    temperature: Yup.string().required().label("Temperature"),
    humidity: Yup.string().required().label("Humidity"),
    light: Yup.string().required().label("Light"),
    info: Yup.string().required().label("Information"),
})

export default function AddPostScreen() {
    const authContext = useAuth();
    const userID = authContext.user.userId;

    const handleSubmit = async (post, { resetForm }) => {
        const result = await postsApi.addPost(post, userID);
        console.log("Result is: " + result);
        /*if (!result.ok)
            console.log("Could not post");
        console.log('Success');*/

        resetForm();
    }

    return (
        <Screen>
            <Form
                initialValues={{plant: "", temperature: "", humidity: "", light: "", info: "",}}
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
                <SubmitButton 
                    text="Submit"
                />
            </Form>
        </Screen>
    )
}
