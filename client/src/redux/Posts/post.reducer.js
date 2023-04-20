import { ADD_POST, POST_ERROR, POST_LOADING, POST_SUCCESS } from "./post.type";


const initialState = {
    posts: [],
    error: false,
    loading: false
};
export const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_POST: {
            return {
                ...state,
                loading: false,
                posts: [...state.posts, payload]
            }
        }
        case POST_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case POST_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload || true
            }
        }
        case POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                posts: payload
            }
        }
        default: {
            return state;
        }
    }
}