import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Button, Modal, Form, FormInput, SubmitButton } from '../components/custom-item-lib'
import * as Yup from 'yup'

const backgroundImage = { uri: "http://images.unsplash.com/photo-1517021818302-9b520a06c834?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" };

export default function LoginScreen({ navigation }) {
    //const [modalVisible, setModalVisible] = useState(false);
    const validationSchema = Yup.object().shape({ 
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    })

    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.background}
            blurRadius={2}
        >
            <View style={styles.container}>
                <Form
                    initialValues={{email: "", password:""}}
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
                        text="Login"
                    />
                    <Button 
                        text="Create Account"
                        onPress={() => {
                            navigation.push("Register")
                        }}
                    />
                    
                </Form>

                {/*
                <Modal 
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    message="Modal visible."
                    closeBtnText="Cancel"
                    acceptable={true}
                    acceptBtnText="Accept"
                />
                */}
                
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
    title: {
        alignSelf:"center",
        margin: 5,
    },
    background: {
        resizeMode: "cover",
        justifyContent: "flex-start",
        alignSelf: "stretch",
        height: "100%",
    },
})
