import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import * as Yup from 'yup'
import { Form, FormInput } from '../components/custom-item-lib'
import { ActivityIndicator } from '../components/default'


const nameValidationSchema = Yup.object().shape({ 
    firstname: Yup.string().required().label("Firstname"),
    lastname: Yup.string().required().label("Lastname"),
})
const imageValidationSchema = Yup.object().shape({
    image: Yup.string().min(1, "Please select at least one image."), //.min(1, "Please select at least one image.")
})
const passwordValidationSchema = Yup.object().shape({ 
    password: Yup.string().required().min(4).label("Password"),
})

export default function SettingsScreen() {

/**<ActivityIndicator visible={false} />
            <View style={styles.container} > 
                <ScrollView>
                    <Form
                        initialValues={{firstname={}, lastname={}}}
                        onSubmit={nameHandleSubmit}
                        validationSchema={nameValidationSchema}
                    >
                        <FormInput />
                        <FormInput />
                    </Form>
                    <Form
                        initialValues={{image={}}}
                        onSubmit={imageHandleSubmit}
                        validationSchema={imageValidationSchema}
                    >
                        <FormInput />
                    </Form>
                    <Form
                        initialValues={{password=""}}
                        onSubmit={passwordHandleSubmit}
                        validationSchema={passwordValidationSchema}
                    >
                        <FormInput />
                        <FormInput />
                    </Form>
                </ScrollView>
            </View> */


    return (
        <View>
            
        </View>
    )
}

const styles = StyleSheet.create({})
