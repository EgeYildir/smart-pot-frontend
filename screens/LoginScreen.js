import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Alert } from 'react-native'
import { Button, Form, FormInput, SubmitButton } from '../components/custom-item-lib'
import * as Yup from 'yup'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'
import colors from '../config/colors'
import { ActivityIndicator } from '../components/default'
import useApi from '../hooks/useApi'

//TODO: Edit validation schema according to backend needs.
const validationSchema = Yup.object().shape({ 
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

export default function LoginScreen({ navigation }) {
    const authContext = useAuth();
    const loginApi = useApi(authApi.login);
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        //Try to login with email and password.
        const result = await loginApi.request(email, password);

        if (result?.data?.error ?? false) {
            setLoginFailed(result.data.error);
            Alert.alert(result.data.error);
        }
        
        //If success, decode data and store user.
        if (result?.ok ?? true){
            setLoginFailed(false);
            authContext.login(result.data.Token);
        }
    }

    return (
        <>
            <ActivityIndicator visible={loginApi.loading} />
            <View style={styles.container} >
                <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainer} >
                    <Form
                        initialValues={{email: "", password:""}}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
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
                            navigation.push("ForgotPassword");
                        }}
                    />
                    <Button 
                        text="Create Account"
                        style={styles.lightBtn}
                        textStyle={styles.heavyText}
                        onPress={() => {
                            navigation.push("Register");
                        }}
                    />
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignSelf: "stretch",
        height: "100%",
        padding: 10,
    },
    lightBtn: {
        backgroundColor: "rgba(0,0,0,0)",
    },
    heavyText: {
        color: colors.text,
    },
})
