import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loginUser, logoutUser } from "../actions/user";
import { loginForward } from "../utils/auth";
import Login from "../components/Login";

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = dispatch => ({
  loginUser: bindActionCreators(loginUser, dispatch),
  logoutUser: bindActionCreators(logoutUser, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(
  loginForward(Login)
);
