import styled from "styled-components";
import ServiceBG from '../../images/Underwater.jpg';


export const ServiceContainer = styled.div`
    color: white;

    

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const ServiceWrper = styled.div`
    display: grid;
    background: url(${ServiceBG});;
    height: 800px;
    width: 100%:
    margin-left: auto;
    margin-right: auto;
    padding: 0 24px;
    justify-content: center;

    // :before{
    //     // height: 800px;
    //     // width: 100%:
    //     content: '';
    //     position: absolute;
    //     top: 1030px;
    //     right: 0;
    //     left: 0;
    //     bottom: -825px;
    //     background: 
    //         linear-gradient(
    //             180deg, 
    //             rgba(0,0,0,0.1) 50%, 
    //             rgba(255,255,255,0.05) 75%),
    //         Linear-gradient(
    //             180deg, 
    //             rgba(0,0,0,0.1) 76%,
    //             rgba(255,255,255,0.07) 100%
    //         )
    //     ;
    //     z-index: 1;
    // }

`

export const ServiceRw = styled.div`
    display: grid;
    grid-auto-column: minmax(auto, 1fr);
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
    max-width: 542px;
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
    margin-bottom 15px;
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
    max-width: 555px;
    height: 100%;
    z-index: 1;
`

// export const ImageWrp = styled.div`
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: -1;
//     overflow: hidden;
// `

// export const Img = styled.img`
//     height: 100%;
//     width: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
//     background: black;
// `