import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextInput, Button } from '../components/custom-item-lib'
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
                        <Text style={styles.title} text="Register" />
                        <TextInput 
                            autoCorrect={false}
                            keyboardType="email-address"
                            placeholder="Username or Email"
                            onChangeText={handleChange("email")}
                            textContentType="emailAddress"
                        />
                        <TextInput
                            autoCorrect={false}
                            keyboardType="number-pad"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                            onChangeText={handleChange("password")}
                        />
                        <TextInput
                            autoCorrect={false}
                            keyboardType="number-pad"
                            placeholder="Password Check"
                            secureTextEntry
                            textContentType="password"
                            onChangeText={handleChange("passwordCheck")}
                        />
                        <Button  
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
