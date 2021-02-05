import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'
import AppModal from '../components/AppModal'
import { Formik } from 'formik'

const backgroundImage = { uri: "https://www.panelplus.co.th/uploads/collection/5be55-white-mk630n.jpg" };

export default function LoginScreen() {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.background}
        >
            <View style={styles.container}>
                <Formik 
                    initialValues={{ email: "", password:""}}
                    onSubmit={values => console.log(values)}
                >
                    {({handleChange, handleSubmit}) => (
                        <>
                            <AppText style={styles.title} text="Login" />
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
                            <AppButton  
                                text="Login"
                                onPress={() => {
                                    setModalVisible(true);
                                }}
                            />
                        </>
                    )}
                </Formik>
                <AppModal 
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
        justifyContent: "center",
        alignSelf: "stretch",
    }
})
