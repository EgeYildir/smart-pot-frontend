import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Button, Form, FormInput, SubmitButton } from '../components/custom-item-lib'
import * as Yup from 'yup'
import assets from '../config/assets'

export default function LoginScreen({ navigation }) {

    //TODO: Edit validation schema according to backend needs.
    const validationSchema = Yup.object().shape({ 
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    })

    return (
        <ImageBackground
            source={assets.backgroundImage}
            style={styles.background}
            blurRadius={2}
        >
            <View style={styles.container}>
                <Form
                    initialValues={{email: "", password:""}}
                    //TODO: Form submit probably shouldn't log these values.
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
                        keyboardType="default"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton  
                        //Submit button does nothing at the moment.
                        text="Login"
                    />
                    {/* Button navigate to the register screen. */}
                    <Button 
                        text="Create Account"
                        onPress={() => {
                            navigation.push("Register");
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
        alignSelf:"stretch",
        padding: 10,
    },
    background: {
        resizeMode: "cover",
        justifyContent: "flex-start",
        alignSelf: "stretch",
        height: "100%",
    },
})
