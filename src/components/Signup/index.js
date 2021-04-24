import React,{useState} from 'react'
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
} from './SignupElements'
import DropdoqnSidebar from '../SidebarCompo';
import NavigationBar from '../Navigation'

const SignUp = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <DropdoqnSidebar isOpen={isOpen} toggle={toggle}/>
            <NavigationBar toggle={toggle}/>
            <Container>  
                <Formwrap>
                    <FormContent>
                        <Form action='#' method='POST'>
                            <FormH1>Sign In</FormH1>
                            
                            <FormLabel htmlFor='for'>First Name</FormLabel>
                            <FormInput type='text' name='fname' required/>
                        
                        
                            <FormLabel htmlFor='for'>Last Name</FormLabel>
                            <FormInput type='text' name='sname' required/> 
                        
                        
                            <FormLabel htmlFor='for'>Home Address</FormLabel>
                            <FormInput type='text' name='address' required/>
                        
                        
                            <FormLabel htmlFor='for'>City</FormLabel>
                            <FormInput type='text' name='city' required/>
                        
                            <FormLabel htmlFor='for'>Province</FormLabel>
                            <FormInput type='text' name='province' required/>
                        
                            <FormLabel htmlFor='for'>Email/Username</FormLabel>
                            <FormInput type='email' name='email' required/>
                        
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' name='pswd' required/>
                        
                            <FormLabel htmlFor='for'>Confirm-Password</FormLabel>
                            <FormInput type='password' name='cpswd' required/>

                            <FormButton type='Submit' name='signup'>Submit</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </Formwrap>
            </Container>
        </>
    )
}

export default SignUp


