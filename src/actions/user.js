export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export const loginUser = payload => ({ type: LOGIN_USER, payload });
export const loginUserSuccess = data => ({
  type: LOGIN_USER_SUCCESS,
  payload: data
});
export const loginUserFailed = error => ({
  type: LOGIN_USER_FAILED,
  payload: error
});

export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAILED = "LOGOUT_USER_FAILED";

export const logoutUser = () => ({ type: LOGOUT_USER });
export const logoutUserSuccess = data => ({
  type: LOGOUT_USER_SUCCESS,
  payload: data
});
export const logoutUserFailed = error => ({
  type: LOGOUT_USER_FAILED,
  payload: error
});
