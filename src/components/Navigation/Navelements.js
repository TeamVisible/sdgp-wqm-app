import styled from 'styled-components';
import {Link as LinkRout} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav? '#000': 'transparent')};
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-Size: 40px;
    position: sticky;
    top: 0;
    z-Index: 10;
    transition: 0.8s all ease;

    @media screen and (max-width: 950px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-Content: space-between;
    height: 78px;
    width: 100%;
    z-index: 1;
    padding: 0 5%;
`

export const NavLogo = styled(LinkRout)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 40px;
    display: flex;
    align-Items: center;
    margin-left: 24px;
    font-weight: 600;
    text-decoration: none;
`
export const NavIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-Size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavigationMenu =styled.ul`
    display: flex;
    align-Items: center;
    list-style: none;
    text-align: center;
    margin-right: -24px;

    @media screen and (max-width: 968px){
        display: none;
    }
    
`
export const NavigationItems = styled.li`
    height: 100%;
    font-size: 16px;

    
`

export const NavigationLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0px 10px;
    height: 100%;
    padding-top: 30px;
    cursor: pointer;
    transition: .3s ease-in;

    &.active {
        border-bottom: 2px solid #03fcdb;
        transition: .3s;
    }
`

export const NavigationLinkToSignUp = styled(LinkRout)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0px 10px;
    height: 100%;
    padding-top: 30px;
    cursor: pointer;

    &.active {
        border-bottom: 2px solid #03fcdb;
        transition: .3s;
    }
`

export const NavigationBtn = styled.nav`
    display: flex;
    height: 100%;
    align-items: center;

    @media screen and (max-width: 961px){
        display: none;
    }
`

export const NaviBtnLink = styled(LinkScroll)`
    border-radius: 2px;
    background: none;
    white-space: nowrap;
    height: 60%;
    margin-top: 12px;
    padding: 13px 21px;
    color: white;
    font-size:16px;
    outline: none;
    border: 3px solid aqua;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;
    font-weight: 700;

    &:hover{
        background: aqua;
        color: white;
        
    }
`