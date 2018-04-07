import { connect } from "react-redux";

import { guestOnly } from "../utils/auth";
import Register from "../components/Register";

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(guestOnly(Register));
