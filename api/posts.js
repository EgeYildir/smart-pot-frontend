import client from './client'

const endpoint = '/post/';

const getPost = ( id ) => client.get(endpoint + id);

const getUserPosts = ( id ) => client.get(endpoint + "user/" + id + "/1/10");

const addPost = (post, userID) => {
    let form = {
        userId: userID,
        plant: post.plant,
        envData:
        {
            humidity: post.humidity,
            temperature: post.temperature,
            light: post.light,
        },
        images: post.images,
        info: post.info,
    }

    client.post(endpoint + "new", form);
}

const setVote = ( postID, userID ) => {
    let post = {
        userId: userID,
        postId: postID,
    }   
    
    client.post(endpoint + "vote", post);
}

export default {
    getPost,
    getUserPosts,
    addPost,
    setVote,
}