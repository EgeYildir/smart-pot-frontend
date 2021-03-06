import React, { useState, useContext } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Button, Form, FormInput, SubmitButton } from '../components/custom-item-lib'
import * as Yup from 'yup'
import assets from '../config/assets'
import authApi from '../api/auth'
import jwtDecode from 'jwt-decode'
import AuthContext from '../auth/context'
import authStorage from '../auth/storage'

//TODO: Edit validation schema according to backend needs.
const validationSchema = Yup.object().shape({ 
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

export default function LoginScreen({ navigation }) {
    const authContext = useContext(AuthContext);
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);//Try to login with email and password.

        if (!result.ok) return setLoginFailed(true);

        //If success, decode data and store user.
        setLoginFailed(false);
        const user = jwtDecode(result.data);
        authContext.setUser(user);
        authStorage.storeToken(result.data);
    }

    return (
        <ImageBackground
            source={assets.backgroundImage}
            style={styles.background}
            blurRadius={2}
        >
            <View style={styles.container}>
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
