import React from 'react'
import { StyleSheet, View } from 'react-native'
import useApi from '../hooks/useApi'
import postsApi from '../api/posts'

export default function PostScreen() {
    const {data: post, error, loading, request: loadPosts} = useApi(postsApi.getPosts);

    return (
        <View>
            
        </View>
    )
}

const styles = StyleSheet.create({})
