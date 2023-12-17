import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const RegistrationSchema = yup.object().shape({
    username: yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: yup.string()
        .email('Invalid email')
        .required('Required'),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Required"),
});

export const SignSchema = yup.object().shape({
    email: yup.string()
        .email('Invalid email')
        .required('Required'),
    password: yup
        .string()
        .min(5)
        .required("Required"),
});

// { touched.email && errors.email && <div>{errors.email}</div> }
// { touched.username && errors.username && <div>{errors.username}</div> }

/* <Container>
    <Title>Login</Title>
    <FormViews
        initialValues={{
            email: '',
            password: '',
        }}
        validationSchema={SignSchema}
        onSubmit={(values, { resetForm }) => {
            dispatch(authOperations.register(values));
            resetForm();
        }}
    >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <FormField onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    placeholder="Enter your email..." />
                {touched.email && errors.email && <Error>{errors.email}</Error>}

                <Input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    placeholder="Enter your password..." />
                {touched.password && errors.password && <Error>{errors.password}</Error>}

                <ButtonViews type="submit">Login</ButtonViews>
            </FormField>
        )}
    </FormViews>


</Container> */