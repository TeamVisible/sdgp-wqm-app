import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkRout} from 'react-router-dom';

export const DropdqnContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(31, 46, 63);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%':'0')};
    top: ${({isOpen}) => (isOpen ? '0%':'-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: red;
`

export const ClsIcon = styled.div`
    position: absolute;
    top: 20px;
    right: 24px;
    background: transparent;
    font-Size: 1.8rem;
    cursor: pointer;
    outline: none;
`

export const DropdqnWrap = styled.div`
    color: white;
    
`

export const DropdqnMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grit-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 960px){
        grit-template-rows: repeat(6,80px);
    }
`

export const DropdqnLink = styled(LinkScroll)`
    align-items: center;
    justify-content: center;
    font-size: 30px;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-out;
    color: rgb(40, 140, 255);
    cursor: pointer;
    padding: 20px 0;

    &:hover{
        color: white;
        text-shadow: 2px 2px 4px #000000;
        transition: .2s ease-in-out;
    }
`

export const DropdqnLinkA = styled(LinkRout)`

    align-items: center;
    justify-content: center;
    font-size: 30px;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-out;
    color: rgb(40, 140, 255);
    cursor: pointer;
    padding: 20px 0;

    &:hover{
        color: white;
        text-shadow: 2px 2px 4px #000000;
        transition: .2s ease-in-out;
    }
`

export const DropdqnBtnWrp = styled.div`
    display: flex;
    justify-content: center;

`

export const DropdqnRout = styled(LinkRout)`
    border-radius: 50px;
    background: red;
    white-space: nowrap;
    height: 60px;
    margin-top: 3%;
    padding: 10px 20px;
    color: white;
    font-size:26px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover{
        background: white;
        color: red;
    }
`