import styled from "styled-components";

export const Container =styled.div`
    min-height: 698px;
    position: fixed;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        110deg,
        rgba(33, 53, 70, 0.514),
        rgba(175, 216, 252, 0.514)
    );
`

export const Formwrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px;) {
        height: 80%;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px;) {
        padding: 32px 32px;
    }
`

export const Form = styled.form`
    background: rgb(4, 36, 44);
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 31px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 238, 255, 0.63);

    @media screen and (max-width: 400px;) {
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 38px;
    color: white;
    font-size: 22px;
    font-weight: 400;
    text-align: center; 
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: white;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    background: rgb(31, 32, 44);
    color: whitesmoke;
    border: .4px solid white;
    border-radius: 12px;
    transition: .3s ease-in-out;

    &:active{
        color: black;
        background: rgb(230, 230, 231);
    }
`

export const FormButton = styled.button`
    background: rgb(0, 102, 255);
    padding: 16px 0;
    border: none;
    border-radius: 40px;
    font-size: 20px;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in;

    &:hover{
        color: black;
        background: rgb(230, 230, 231);
    }

    &:active{
        color: white;
        background: rgb(0, 118, 253);
    }
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: aliceblue;
    font-size: 15px;
`