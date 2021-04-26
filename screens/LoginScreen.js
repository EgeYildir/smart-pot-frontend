import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Form, FormInput, Screen, SubmitButton, LinearGradient } from '../components/custom-item-lib'
import * as Yup from 'yup'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'
import colors from '../config/colors'

//TODO: Edit validation schema according to backend needs.
const validationSchema = Yup.object().shape({ 
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

export default function LoginScreen({ navigation }) {
    const authContext = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        //Try to login with email and password.
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);

        //If success, decode data and store user.
        setLoginFailed(false);
        authContext.login(result.data.Token);
    }

    return (
        <Screen style={styles.container} >
            <LinearGradient />
            <Form
                initialValues={{email: "", password:""}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormInput 
                    name="email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    placeholder="Username or Email"
                    textContentType="emailAddress"
                />
                <FormInput
                    name="password"
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton  
                    text="Login"
                />
            </Form>
            <Button 
                text="Forgot password?"
                style={styles.lightBtn}
                textStyle={styles.heavyText}
                onPress={() => {
                    console.log("Renew Password"); // TODO: Fix this area.
                }}
            />
            {/* Button navigate to the register screen. */}
            <Button 
                text="Create Account"
                style={styles.lightBtn}
                textStyle={styles.heavyText}
                onPress={() => {
                    navigation.push("Register");
                }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignSelf:"stretch",
        padding: 10,
        paddingTop: 10,
        height: "100%",
    },
    lightBtn: {
        backgroundColor: "rgba(0,0,0,0)",
    },
    heavyText: {
        color: colors.text,
    },
})
