import axios from "axios";

export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};


export const getComments = () => {
    return axios.get('/api/comments')
};

export const getCrawlComments = crawlId => {
    return axios.get(`/api/comments/${crawlId}`)
};

export const writeComment = data => {
    return axios.post('/api/comments/', data)
}


// export const fetchAllComments = () => {
//     return axios.get("/api/comments/");
// };

// export const fetchComment = (id) => {
//     return axios.get(`/api/comments/${id}`);
// };

// export const updateComment = (comment) => {

//     return axios.patch(`/api/comments/${comment.id}`, comment);
// };

// export const createComment = async (commentData) => {
//     let create_comment = await axios.post("/api/comments", commentData);
//     console.log("CommentAll=======>", create_comment);
//     return create_comment;
// };

// export const deleteComment = async (id) => {
//     let commentById = await axios.delete(`/api/comments/${id}`);
//     return commentById;
// };

// export const getCommentByCrawl = async (crawlId) => {
//     let getComment = await axios.get(`/api/crawls/users/${crawlId}`);
//     console.log("Data=========>", getComment)
//     return getComment;
// }

// export const getCommentByCrawl = async (crawlId) => {
//     let comments = await axios.get(`/api/comments/${crawlId}`);
//     console.log("Data=========>", comments)
//     return comments;
// }