import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { injectGlobal } from "styled-components";

class Navbar extends PureComponent {
  render() {
    const { user: { role, name }, children } = this.props;
    return (
      <div>
        <h1>
          Hi {role} {name}
        </h1>
        <Link to="/">Home</Link> |&nbsp;
        <Link to="/register">Register</Link> |&nbsp;
        <Link to="/dashboard">Dashboard</Link> |&nbsp;
        <Link to="/login">Login</Link>
        {children}
      </div>
    );
  }
}

export default Navbar;

injectGlobal`
a {
  text-decoration: none;
  &:link, &:visited {
    color: blue;
  }
}
`;
