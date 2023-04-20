import { ADD_USER, USER_ERROR, USER_LOADING, USER_SUCCESS } from "./user.type";


const initialState = {
    users: [],
    error: false,
    loading: false
};
export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USER: {
            return {
                ...state,
                loading: false,
                users: [...state.users, payload]
            }
        }
        case USER_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case USER_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload || true
            }
        }
        case USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: payload
            }
        }
        default: {
            return state;
        }
    }
}