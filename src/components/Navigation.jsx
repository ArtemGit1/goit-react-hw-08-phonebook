// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import { HOME_ROUTE, CONTACTS_ROUTE } from "../constants/route";
import { Link } from "./StylesAppBar.styled";
// import { authSelectors } from "redux/auth";
import { useAuth } from "hooks";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Link to={HOME_ROUTE}>Home</Link>
      {isLoggedIn && <Link to={CONTACTS_ROUTE}>Phonebook</Link>}
    </nav>
  )
    
};

