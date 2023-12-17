import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import { FormViews, Button, Input } from "./Formik.styled";


const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(authOperations.register({
            name: form.elements.userName.value,
            email: form.elements.userEmail.value,
            password: form.elements.userPassword.value,
        }));
        form.reset();
    };

    return (
        <FormViews onSubmit={handleSubmit} autoComplete="off">
            <label>
                <span>
                    <Input type="text" name="userName" placeholder="Enter your name..." required />
                </span>
            </label>
            <label>
                <span>
                    <Input type="email" name="userEmail" placeholder="Enter your email..." required />
                </span>
            </label>
            <label>
                <span>
                    <Input
                        type="password"
                        name="userPassword"
                        required
                        placeholder="Enter your password..."
                        minLength="6"
                        maxLength="12"
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                        title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
                    />
                </span>
            </label>
            <Button type="submit" >Register</Button>
        </FormViews>
    );
};

export default RegisterForm;



