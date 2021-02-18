import React from 'react'
import { View } from 'react-native'
import { Form, FormInput } from '../components/custom-item-lib'
import * as Yup from 'yup'

export default function AddPostScreen() {

    const validationSchema = Yup.object().shape({
        plant: Yup.string().required().label("Plant"),
        temperature: Yup.string().required().label("Temperature"),
        humidity: Yup.string().required().label("Humidity"),
        light: Yup.string().required().label("Light"),
    })

    return (
        <View>
            <Form
                initalValues={{plant: "", temperature: "", humidity: "", light: ""}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormInput
                    name="plant"
                    placeholder="Plant Name"
                />
                <FormInput 
                    name="temperature"
                    placeholder="Temperature"

                />
                <FormInput 
                    name="humidity"
                    placeholder="Humidity"

                />
                <FormInput 
                    name="light"
                    placeholder="Light"
                />
            </Form>
        </View>
    )
}
