import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Button, Text, TextInput, Modal, Form } from '../components/custom-item-lib'

const backgroundImage = { uri: "http://images.unsplash.com/photo-1517021818302-9b520a06c834?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" };

export default function LoginScreen() {
    const [modalVisible, setModalVisible] = useState(false)
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
                    <Text style={styles.title} text="Login" />
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
                    <Button  
                        text="Login"
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    />
                </Form>
                <Modal 
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    message="Modal visible."
                    closeBtnText="Cancel"
                    acceptable={true}
                    acceptBtnText="Accept"
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "stretch",
        alignSelf:"stretch",
        marginTop: 40,
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
    }
})
