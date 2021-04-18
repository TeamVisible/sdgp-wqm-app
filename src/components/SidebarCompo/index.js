import React from 'react'

import {
    DropdqnContainer,
    ClsIcon,
    CloseIcon,
    DropdqnWrap,
    DropdqnMenu,
    DropdqnLink,
    DropdqnBtnWrp,
    DropdqnRout,
    DropdqnLinkA
} from './SidebarElements'

const DropdoqnSidebar = ({isOpen, toggle}) => {
    return (
        <DropdqnContainer isOpen={isOpen} onClick={toggle}>
            <ClsIcon onClick={toggle}>
                <CloseIcon/>
            </ClsIcon>
            <DropdqnWrap>
                <DropdqnMenu>
                    <DropdqnLinkA to="/">WHO WE ARE</DropdqnLinkA>
                    <DropdqnLink to="discover">DISCOVER</DropdqnLink>
                    <DropdqnLink to="services">SERVICES</DropdqnLink>
                    <DropdqnLink to="news">NEWS UPDATE</DropdqnLink>
                    <DropdqnLinkA to="/signup">SIGN UP</DropdqnLinkA>
                </DropdqnMenu>
                <DropdqnBtnWrp>
                    <DropdqnRout to="/signin">SIGN IN</DropdqnRout>
                </DropdqnBtnWrp>
            </DropdqnWrap>
        </DropdqnContainer>
    )
}

export default DropdoqnSidebar;
