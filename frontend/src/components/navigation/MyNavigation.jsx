import { NavLink } from "react-router-dom";
import classes from "./MyNavigation.module.css";
const MyNavigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.brand}>
          <NavLink to="/dashboard">
          </NavLink>
        </li>
        <ul className={classes.pageLinks}>
          <li>
            <NavLink to="/manage-users" activeClassName={classes.active}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/job-providers" activeClassName={classes.active}>
              Job Providers
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobs" activeClassName={classes.active}>
              Jobs
            </NavLink>
          </li>
          <li>
           
          </li>
        </ul>
        <li className={classes.user}>
          <NavLink to="#prof">Admin Name</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MyNavigation;
