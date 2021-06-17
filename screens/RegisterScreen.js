import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Alert } from 'react-native'
import { Button, Form, FormInput, SubmitButton, LinearGradient } from '../components/custom-item-lib'
import { ActivityIndicator } from '../components/default'
import * as Yup from 'yup'
import authApi from '../api/auth'
import useApi from '../hooks/useApi'
import colors from '../config/colors'

const validationSchema = Yup.object().shape({ 
    firstname: Yup.string().required().label("Firstname"),
    lastname: Yup.string().required().label("Lastname"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

export default function RegisterScreen({ navigation }) {
    const signupApi = useApi(authApi.signup);
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = await signupApi.request(userInfo);
        console.log("Result: ", result);

        if (result?.data?.error ?? true) {
            setError(result.data.error);
            Alert.alert(result.data.error);
        } else {
            setError("An unexpected error occured ");
            Alert.alert("An unexpected error occured ");
        }

        if (result?.ok ?? true){
            Alert.alert("Successfully created account");
        }
    }

    return (
        <>
            <ActivityIndicator visible={signupApi.loading} />
            <View style={styles.container} >
                <ScrollView>
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
                            keyboardType="default"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <SubmitButton  
                            text="Register"
                        />
                    </Form>
                    <Button
                        style={styles.lightBtn}
                        textStyle={styles.heavyText}
                        text="Already have account?"
                        onPress={() => {
                            navigation.goBack();
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
        padding: 10,
        height: "100%",
    },
    lightBtn: {
        backgroundColor: "rgba(0,0,0,0)",
    },
    heavyText: {
        color: colors.text,
    },
})
