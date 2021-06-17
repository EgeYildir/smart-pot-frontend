import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import { Screen, Form, FormInput, SubmitButton } from '../components/custom-item-lib'

const validationSchema = Yup.object().shape({ 
    password: Yup.string().required().email().label("Password"),
})

export default function ChangePasswordScreen() {

    const handleSubmit = async ({ password }) => {

    }

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{password: ""}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormInput 
                    name="password"
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <FormInput 
                    name="password"
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Password (Again)"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton text="Change Password" />
            </Form>
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
})
