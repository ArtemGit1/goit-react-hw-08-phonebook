import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import { FormViews, Button, Input } from "./Formik.styled";

const SignForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.currentTarget.elements.userEmail.value;
        const password = e.currentTarget.elements.userPassword.value;

        const formData = {
            email,
            password,
        };

        dispatch(authOperations.logIn(formData));
    };
    return (
        <FormViews onSubmit={handleSubmit} autoComplete="off">
            <label>
                <span>
                    <Input type="email" name="userEmail" placeholder="Enter your email..." required />
                </span>
            </label>
            <label>
                <span>
                    <Input type="password" name="userPassword" placeholder="Enter your password..." required minLength={7} />
                </span>
            </label>
            <Button type="submit">Login</Button>
        </FormViews>
    );
};

export default SignForm;


