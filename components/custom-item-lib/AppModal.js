import React from 'react'
import { Alert, Modal, StyleSheet, View } from 'react-native'
import colors from '../../config/colors'
import AppButton from './AppButton'
import AppText from './AppText'

export default function AppModal({ modalVisible, setModalVisible, message, closeBtnText, acceptable, acceptBtnText }) {
    return (
        <View style={styles.centeredView}>
            {/**
             * Example usage for modal:
             * 
             * <Modal 
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    message="Modal visible."
                    closeBtnText="Cancel"
                    acceptable={true}
                    acceptBtnText="Accept"
                />

             */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal closed.");
                }}
            >
                <View style={styles.modalView}>
                    <AppText text={message} /> {/* Modal message shown here. */}
                    <View style={styles.buttonContainer}>
                        <AppButton 
                            style={styles.cancelButton}
                            textStyle={styles.cancelText}
                            text={closeBtnText}
                            onPress={() => {
                                setModalVisible(false); //Pressing cancel renders modal invisible.
                            }}
                        />
                        {/* Showing an accept button is optional. */}
                        {acceptable && <AppButton 
                            style={styles.acceptButton}
                            text={acceptBtnText}
                            onPress={() => {
                                //TODO: Add onAccept property for this component.
                            }}
                        />}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    acceptButton: {
        marginLeft: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 5,
    },
    cancelButton: {
        backgroundColor: colors.light,
        marginRight: 5,
    },
    cancelText: {
        color: colors.text,
    },
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
        paddingTop: 15,
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
