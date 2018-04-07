import { connect } from "react-redux";

import { userOnly } from "../utils/auth";
import Dashboard from "../components/Dashboard";

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(userOnly(Dashboard));
