import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../../images/logo.png'

import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    NavIcon,
    NavigationMenu,
    NavigationItems,
    NavigationLinks,
    NavigationBtn,
    NaviBtnLink
} from './Navelements'

const NavigationBar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/"><img src={logo} alt='logo' style={{height: 90, marginTop: 10}}/></NavLogo>
                    <NavIcon onClick={toggle}>
                        <FaBars /> {/* Three bars media query */}
                    </NavIcon>
                    <NavigationMenu>
                        <NavigationItems>
                            <NavigationLinks to="about">WHO WE ARE</NavigationLinks>
                        </NavigationItems>
                        <NavigationItems>
                            <NavigationLinks to="discover">DISCOVER</NavigationLinks>
                        </NavigationItems>
                        <NavigationItems>
                            <NavigationLinks to="services">SERVICES</NavigationLinks>
                        </NavigationItems>
                    </NavigationMenu>
                    <NavigationBtn>
                        <NaviBtnLink to="discover"><strong>Check the Quality</strong></NaviBtnLink>
                    </NavigationBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default NavigationBar;
