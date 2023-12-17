import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

export const useAuth = () => {
    const isLoggedIn = useSelector(authSelectors.selectUserIsLoggedIn);
    const isRefreshing = useSelector(authSelectors.selectUserRefreshing);
    const user = useSelector(authSelectors.selectUserName);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};