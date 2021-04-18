import React from 'react'

import {
    Container,
    Formwrap,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SignInElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <Formwrap>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign In</FormH1>
                            <FormLabel htmlFor='for'>Email/Username</FormLabel>
                            <FormInput type='email' name='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' name='pswd' required/>
                            <FormButton type='Submit'>Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </Formwrap>
            </Container>
        </>
    )
}

export default SignIn

