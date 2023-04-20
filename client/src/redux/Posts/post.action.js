import axios from "axios";
import { backend_url } from '../../Pages/BackendURL';
import { ADD_POST, POST_ERROR, POST_LOADING, POST_SUCCESS } from "./post.type";

export const getPosts = () => async (dispatch) => {
    dispatch({ type: POST_LOADING });
    try {
        let res = await axios.get(`${backend_url}/posts/get`);
        dispatch({ type: POST_SUCCESS, payload: res.data });
    } catch (e) {
        dispatch({ type: POST_ERROR, payload: e.message });
    }
};

export const addPosts = (message) => async (dispatch) => {
    dispatch({ type: POST_LOADING });
    try {
        let res = await axios.post(`${backend_url}/posts/post`, message);
        alert(`${res.msg}`);
        dispatch({ type: ADD_POST, payload: res.data.post });
    } catch (e) {
        dispatch({ type: POST_ERROR, payload: e.message });
    }
};