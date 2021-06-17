import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Form, FormInput, SubmitButton } from './custom-item-lib'
import commentApi from '../api/comment'
import useApi from '../hooks/useApi'
import useAuth from '../auth/useAuth'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({ 
    comment: Yup.string().label("Comment").min(1),
})

export default function CommentInput({ postID }) {
    const addCommentApi = useApi(commentApi.addComment);
    const authContext = useAuth();
    const userID = authContext.user.userId;

    const handleSubmit = async ({comment}) => {
        const result = await addCommentApi.request(comment, userID, postID);
    }

    return (
        <View>
            <Form
                initialValues={{comment: ""}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormInput 
                    name="comment"
                    keyboardType="default"
                    placeholder="Make a comment"
                />
                <SubmitButton text="Comment" />
            </Form>
        </View>
    )
}

const styles = StyleSheet.create({})
