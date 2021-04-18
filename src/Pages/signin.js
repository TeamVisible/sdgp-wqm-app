import React,{useState} from 'react'
import SignIn from '../components/SignIn'
import DropdoqnSidebar from '../components/SidebarCompo'
import NavigationBar from '../components/Navigation'

const SignInPage = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <DropdoqnSidebar isOpen={isOpen} toggle={toggle}/>
            <NavigationBar toggle={toggle}/>
            <SignIn/>
        </>
    )
}

export default SignInPage