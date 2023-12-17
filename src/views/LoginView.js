import { Container, H2 } from "./views.styled";
import SignForm from "components/Forms/SignForm";

const LoginView = () => {
    return (
        <Container>
            <H2>Login</H2>
            <SignForm />
        </Container>
    )
}
export default LoginView;
