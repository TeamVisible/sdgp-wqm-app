import React, { Component } from 'react'

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

class SignIn extends Component{

    // componentDidMount() {
    //     const recipeUrl = 'http://localhost:8080/api/recipes';
    //     const postBody = {
    //         type: "hot",
    //         limit: 10
    //     };
    //     const requestMetadata = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(postBody)
    //     };
    
    //     fetch(recipeUrl, requestMetadata)
    //         .then(res => res.json())
    //         .then(recipes => {
    //             this.setState({ recipes });
    //         });
    // }

    // const[isOpen, setIsOpen] = useState(false)

    // const toggle = () =>{
    //     setIsOpen(!isOpen);
    // };

    render () {
        return (
            <>
                {/* <DropdoqnSidebar isOpen={isOpen} toggle={toggle}/>
                <NavigationBar toggle={toggle}/> */}
                <Container>
                    <Formwrap>
                        <FormContent>
                            <Form action='../../Controllers/SignIn.php' method='POST'>
                                <FormH1>Sign In</FormH1>
                                <FormLabel htmlFor='for'>Email/Username</FormLabel>
                                <FormInput type='email' name='email' required/>
                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput type='password' name='pswd' required/>
                                <FormButton type='Submit' onClick='proccess()'>Continue</FormButton>
                                <Text>Forgot Password</Text>
                            </Form>
                        </FormContent>
                    </Formwrap>
                </Container>
            </>
        )
    }

    

}

export default SignIn

