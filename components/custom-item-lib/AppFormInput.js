import React from 'react'
import { View } from 'react-native'
import { useFormikContext } from 'formik'
import AppTextInput from './AppTextInput'
import AppErrorMessage from './AppErrorMessage'

export default function AppformField({ name, ...props }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <View>
            <AppTextInput 
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...props}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    )
}