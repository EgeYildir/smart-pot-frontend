import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Button, Form, FormInput, SubmitButton } from '../components/custom-item-lib'
import * as Yup from 'yup'
import assets from '../config/assets'
import authApi from '../api/auth'
import auth from '../api/auth'

const validationSchema = Yup.object().shape({ 
    firstname: Yup.string().required().label("Firstname"),
    lastname: Yup.string().required().label("Lastname"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

export default function RegisterScreen({ navigation }) {
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = await authApi.signup(userInfo);
        console.log(userInfo);

        if (!result) {
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error occured: " + result.data.error);
                console.log(result);
            }
            return;
        }

        const { data: authToken } = await authApi.login(userInfo.email, userInfo.password);
        auth.login(authToken);
    }

    return (
        <ImageBackground
            source={assets.backgroundImage}
            style={styles.background}
            blurRadius={2}
        >
            <View style={styles.container}>
                <Form
                    initialValues={{firstname: "", lastname: "", email: "", password:""}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <FormInput 
                        name="firstname"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="Firstname"
                        textContentType="emailAddress"
                    />
                    <FormInput 
                        name="lastname"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="Lastname"
                        textContentType="emailAddress"
                    />
                    <FormInput 
                        name="email"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <FormInput
                        name="password"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton  
                        text="Register"
                    />
                    <Button
                        text="Already have account?"
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />
                </Form>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "stretch",
        alignSelf: "stretch",
        padding: 10,
    },
    background: {
        resizeMode: "cover",
        justifyContent: "flex-start",
        alignSelf: "stretch",
        height: "100%",
    }
})
