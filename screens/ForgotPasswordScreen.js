import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import { Form, FormInput, LinearGradient, Screen, SubmitButton } from '../components/custom-item-lib'

const validationSchema = Yup.object().shape({ 
    email: Yup.string().required().email().label("Email"),
})

export default function ForgotPasswordScreen() {

    const handleSubmit = async ( email ) => {

    }

    return (
        <Screen style={styles.container} >
            <LinearGradient />
            <Form
                initialValues={{email: ""}}
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
                <SubmitButton text="Send Verification Mail" />
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
