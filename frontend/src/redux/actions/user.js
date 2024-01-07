// actions/user.js
import axios from "axios";
import { server } from "../../server";

// Action Types
export const LoadUserRequest = "LoadUserRequest";
export const LoadUserSuccess = "LoadUserSuccess";
export const LoadUserFail = "LoadUserFail";
export const clearErrors = "clearErrors";

// Action Creators
export const loadUserRequest = () => ({
  type: LoadUserRequest,
});

export const loadUserSuccess = (user) => ({
  type: LoadUserSuccess,
  payload: user,
});

export const loadUserFail = (error) => ({
  type: LoadUserFail,
  payload: error,
});

export const clearErrorsAction = () => ({
  type: clearErrors,
});

// Async Action Creator (using Redux Thunk for asynchronous actions)
export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());

    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });

    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    dispatch(loadUserFail(error.response ? error.response.data.message : "Unknown error"));
  }
};
