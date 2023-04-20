import axios from "axios";
import { backend_url } from '../../Pages/BackendURL';
import { ADD_USER, USER_ERROR, USER_LOADING, USER_SUCCESS } from "./user.type";

export const getUsers = () => async (dispatch) => {
    dispatch({ type: USER_LOADING });
    try {
        let res = await axios.get(`${backend_url}/users/get`);
        dispatch({ type: USER_SUCCESS, payload: res.data });
    } catch (e) {
        dispatch({ type: USER_ERROR, payload: e.message });
    }
};

export const addUser = (message) => async (dispatch) => {
    dispatch({ type: USER_LOADING });
    try {
        let res = await axios.post(`${backend_url}/users/post`, message);
        alert(`${res.msg}`);
        dispatch({ type: ADD_USER, payload: res.data.user });
    } catch (e) {
        dispatch({ type: USER_ERROR, payload: e.message });
    }
};