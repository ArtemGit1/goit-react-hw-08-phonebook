import React from 'react';
// import { authSelectors } from 'redux/auth';
import { UserMenu } from './UserMenu/userMenu';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
// import { useSelector } from 'react-redux';
import { Header } from './StylesAppBar.styled';
import { useAuth } from 'hooks';


export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <Header >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header >

    )
}


