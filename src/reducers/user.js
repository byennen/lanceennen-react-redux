import { LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from "../actions/user";

const reducer = (
  state = {
    name: "",
    role: "guest"
  },
  action
) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
    case LOGOUT_USER_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
