import client from './client'

const endpoint = '/post/';

const getPost = ( id ) => client.get(endpoint + id);

const getUserPosts = ( id ) => client.get(endpoint+ "user/" + id + "/1/10");

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
        images: ["https://picsum.photos/50/50"],
        info: post.info,
    }

    client.post(endpoint + "new", form);
}

export default {
    getPost,
    getUserPosts,
    addPost,
}