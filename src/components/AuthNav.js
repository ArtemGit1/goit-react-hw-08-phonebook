import React from 'react';
import { LOGIN_ROUTE, REGISTER_ROUTE } from 'constants/route';
import { Link } from "./StylesAppBar.styled";


export const AuthNav = () => {
    return (
        <div>
            <Link to={LOGIN_ROUTE}>Log In</Link>
            <Link to={REGISTER_ROUTE}>Registration</Link>
        </div>
    )
}


