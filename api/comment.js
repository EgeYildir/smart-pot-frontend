import client from './client'

const endpoint = '/comment/';

const pageSize = 5;

const getByPost = ( postID, pageNumber ) => client.get(endpoint + "post/" + postID + "/" + pageSize + "/" + pageNumber);

const addComment = ( content, userID, postID ) => {
    let form = {
        userId: userID,
        postId: postID,
        content: content,
    }

    client.post(endpoint + "new", form);
}

export default {
    getByPost,
    addComment,
}
