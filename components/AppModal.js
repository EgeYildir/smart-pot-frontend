import React from 'react'
import { Alert, Modal, StyleSheet, View } from 'react-native'
import AppButton from './AppButton'
import AppText from './AppText'

export default function AppModal({ modalVisible, setModalVisible, message, closeBtnText, acceptable, acceptBtnText }) {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal closed.");
                }}
            >
                <View style={styles.modalView}>
                    <AppText text={message} />
                    <AppButton 
                        text={closeBtnText}
                        onPress={() => {
                            setModalVisible(false);
                        }}
                    />
                    {acceptable && <AppButton 
                        text={acceptBtnText}
                        onPress={() => {

                        }}
                    />}
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
})
