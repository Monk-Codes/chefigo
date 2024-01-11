import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../chefigo.svg";
import "./navbar.scss";
const NavBar = () => {
 return (
  <Fragment>
   <div className="nav">
    <Link className="logo-container" to="/">
     <div>
      <Logo />
     </div>
    </Link>
    <div className="nav-container">
     <Link className="nav-link" to="/shop">
      Shop
     </Link>
     <Link className="signIn" to="/sign-In">
      Signin
     </Link>
    </div>
   </div>
   <Outlet />
  </Fragment>
 );
};
export default NavBar;
