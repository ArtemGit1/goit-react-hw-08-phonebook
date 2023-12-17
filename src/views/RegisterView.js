import { Container, H2 } from "./views.styled";
import RegisterForm from "components/Forms/RegistrationForm";
const RegisterView = () => {

    return (
        <Container>
            <H2>Registration</H2>
            <RegisterForm />
        </Container >
    )
}
export default RegisterView;
