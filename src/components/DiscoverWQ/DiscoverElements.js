import styled from "styled-components";

export const DiscoverContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 1px; 
    
    background: #eaf2f9;
    align-items: center;
    justify-content: center;
`

export const DiscBG = styled.div`
    position: absolute;
    top: -78px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImagBG = styled.img`
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
`

export const DisCoverWrp = styled.div`
    // background: rgb(0, 47, 109);
    width: 90%;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 20%;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 968px) {
        padding-left: 10%;
    }

    
`

export const DiscovRw1 = styled.div`
    display: flex;
    height: 150px;
    max-width: 1100px;
    border: none;
    box-shadow: 10px 10px 20px 18px rgba(20, 20, 20, 0.4);
    align-items: center;
    transition: .3s all ease-in-out;
    margin-top: 37px;

    &:hover{
        transition: .3s all ease-in-out;
        box-shadow: 10px 10px 20px 18px rgba(20, 48, 82, 0.815);
    }

    @media screen and (max-width: 960px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col1'` : `'col2 col2'`)};
    }
`

export const DscColmn1 = styled.div`
    margin-bottom: 15px;
    // padding: 0 15px;
    grid-area: col1; 
`

export const DscColmn2 = styled.div`
    margin-bottom: 15px;
    // padding: 0 15px;
    grid-area: col2; 
`

export const ImageBG = styled.div`
    position: relative;
    margin-top:19px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

`

export const Img = styled.img`
    height: 150px;
    width: auto;
`

export const TextWrp = styled.div`
    // width: 50%;
    // height: 100%;
    // padding: 8px;
`

export const Heading = styled.h1`
    // margin-bottom: 24px;
    // font-size: 40px;
    // line-height: 16px;
    // font-weight: 700;
    // color: black;

    // @media screen and (max-width: 490px){
    //     font-size:30px;
    // }
`

export const Description = styled.p`
    // max-width: 440px;
    // margin-bottom: 35px;
    // font-size: 18px;
    // line-height: 24px;
    // color: black;
`