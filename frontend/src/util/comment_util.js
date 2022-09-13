import axios from "axios";

export const fetchAllComments = () => {
    return axios.get("/api/comments/");
};

export const fetchComment = (id) => {
    return axios.get(`/api/comments/${id}`);
};

export const updateComment = (comment) => {

    return axios.patch(`/api/comments/${comment.id}`, comment);
};

export const createComment = async (comment) => {
    let commentAll = await axios.post("/api/comments");
    console.log("CommentAll=======>", commentAll);
    return commentAll;
};

export const deleteComment = async (id) => {
    let commentById = await axios.delete(`/api/comments/${id}`);
    return commentById;
};