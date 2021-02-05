import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import { Formik } from 'formik'

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <Formik 
                initialValues={{ email: "", password:""}}
                onSubmit={values => console.log(values)}
            >
                {({handleChange, handleSubmit}) => (
                    <>
                        <AppText style={styles.title} text="Register" />
                        <AppTextInput 
                            autoCorrect={false}
                            keyboardType="email-address"
                            placeholder="Username or Email"
                            onChangeText={handleChange("email")}
                            textContentType="emailAddress"
                        />
                        <AppTextInput
                            autoCorrect={false}
                            keyboardType="number-pad"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                            onChangeText={handleChange("password")}
                        />
                        <AppTextInput
                            autoCorrect={false}
                            keyboardType="number-pad"
                            placeholder="Password Check"
                            secureTextEntry
                            textContentType="password"
                            onChangeText={handleChange("passwordCheck")}
                        />
                        <AppButton  
                            text="Register"
                            onPress={() => {

                            }}
                        />
                    </>
                )}
                </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        alignSelf: "stretch",
    }
})
