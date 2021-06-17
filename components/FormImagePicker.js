import React from 'react'
import ImageInputList from './ImageInputList'
import { useFormikContext } from 'formik'
import { ErrorMessage } from './custom-item-lib'
import AppImagePicker from './AppImagePicker'

export default function FormImagePicker({ name }) {
    const { setFieldValue, values, errors, touched } = useFormikContext();

    const imageUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
        console.log(name);
    };

    const handleRemove = (uri) => {
        setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri));
    };

    return (
        <>
            <ImageInputList 
                imageUris={imageUris} 
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}
