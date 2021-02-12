import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Button, Form, FormInput, SubmitButton } from '../components/custom-item-lib'
import * as Yup from 'yup'
import assets from '../config/assets'

export default function RegisterScreen({ navigation }) {
    const validationSchema = Yup.object().shape({ 
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
        passwordCheck: Yup.string().required().min(4).label("Password Check"),
    })

    return (
        <ImageBackground
            source={assets.backgroundImage}
            style={styles.background}
            blurRadius={2}
        >
            <View style={styles.container}>
                <Form
                    initialValues={{email: "", password:"", passwordCheck:""}}
                    onSubmit={values => console.log(values)}
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
                        keyboardType="number-pad"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <FormInput
                        name="passwordCheck"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        placeholder="Password Check"
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
