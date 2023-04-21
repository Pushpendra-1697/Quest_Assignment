import axios from "axios";
import { backend_url } from '../../Pages/BackendURL';
import { POST_ERROR, POST_LOADING, POST_SUCCESS } from "./post.type";

export const getPosts = (page = 1, userName = '') => async (dispatch) => {
    dispatch({ type: POST_LOADING });
    try {
        let res = await axios.get(`${backend_url}/posts/get?page=${page}&limit=20&username=${userName}`);
        dispatch({ type: POST_SUCCESS, payload: res.data });
    } catch (e) {
        dispatch({ type: POST_ERROR, payload: e.message });
    }
};
