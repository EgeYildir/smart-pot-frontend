import React from 'react'
import AppButton from './AppButton'
import { useFormikContext } from 'formik'

export default function AppSubmitButton({ text }) {
    const { handleSubmit } = useFormikContext();
    
    return (
        <AppButton text={text} onPress={handleSubmit} />
    )
}