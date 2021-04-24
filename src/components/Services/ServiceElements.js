import styled from "styled-components";
import ServiceBG from '../../images/Underwater.jpg';


export const ServiceContainer = styled.div`
    color: white;
    top: -78px;
    background: url(${ServiceBG});
    height: 700px;
    transform: translateY(-25px);
    padding: 80px;
    text-align: center;
    

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const ServiceWrper = styled.div`
    /* height: 100%; */
    display: flex;
    width: 100%;
    top: -78px;
    margin-top: 8%;
    margin-left: auto;
    margin-right: auto;
    padding: 0 24px;
    text-align: justify;
    justify-content: space-between;
`

export const ServiceRw = styled.div`
    display: grid;
    top: -70px;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    justify-items: left;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col2 col1'`)};
    z-index: 1;

    @media screen and (max-width: 960px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col1'` : `'col2 col2'`)};
        z-index: 1;
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    z-index: 1; 
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    z-index: 1; 
`

export const Textwrper = styled.div`
    width: 500px;
    height: 400px;
    padding-top: 0;
    padding-bottom: 60px;
    z-index: 1;
`

export const TopLine = styled.p`
    color: green;
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 15px;
    z-index: 1;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 16px;
    font-weight: 900;
    color: White;
    z-index: 1;

    @media screen and (max-width: 490px){
        font-size:30px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    margin-top: 20px;
    font-size: 18px;
    line-height: 24px;
    color: White;
    z-index: 1;
`

export const ButnWrp = styled.div` 
    display: flex;
    justify-content: flex-start;
    z-index: 1;
`
export const Textwrper2 = styled.div`
    width: 500px;
    height: 400px;
    padding-top: 0;
    padding-bottom: 60px;
    z-index: 1;
`