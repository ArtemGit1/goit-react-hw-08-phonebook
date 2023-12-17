
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "components/RestrictedRoute/RestrictedRoute";
import { lazy } from "react";
const HomeView = lazy(() => import('../views/HomeView'));
const ContactView = lazy(() => import('../views/ContactView'));
const LoginView = lazy(() => import('../views/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));

export const HOME_ROUTE = '/';
export const CONTACTS_ROUTE = '/contacts';
export const LOGIN_ROUTE = '/login';
export const REGISTER_ROUTE = '/register';

export const appRoutes = [
    {
        path: HOME_ROUTE,
        element: <HomeView />,
    },
    {
        path: CONTACTS_ROUTE,
        element: <PrivateRoute>
            <ContactView />
        </PrivateRoute>,
    },
    {
        path: LOGIN_ROUTE,
        element: <RestrictedRoute redirectTo={CONTACTS_ROUTE}>
            <LoginView />
        </RestrictedRoute>,
    },
    {
        path: REGISTER_ROUTE,
        element: <RestrictedRoute redirectTo={CONTACTS_ROUTE}>
            <RegisterView />
        </RestrictedRoute>,
    },
];