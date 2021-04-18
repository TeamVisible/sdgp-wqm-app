import styled from 'styled-components';

export const TemaContainer = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 950px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: -80px;
        right: 0;
        left: 0;
        bottom: 0;
        background: 
            linear-gradient(
                180deg, 
                rgba(0,0,0,0.1) 50%, 
                rgba(0,0,0,0.5) 75%),
            Linear-gradient(
                180deg, 
                rgba(0,0,0,0.1) 76%,
                rgba(0,0,0,0.6) 100%
            )
        ;
        z-index: 1;
    }
`;

export const TeamBG = styled.div`
    position: absolute;
    top: -78px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%
    overflow: hidden;
`;

export const VdoBG = styled.video`
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
`;

export const TeamContent = styled.div`
    z-Index: 1;
    max-width: 1200px;
    position: absolute; 
    padding: 8px 24px;
    flex-direction: column;
    align-items: center;

`;

export const TeamP = styled.p`
    margin-top: 24px;
    color: white;
    font-size: 24px;
    text-align: left;
    max-width: 600px; 

    @media screen and (max-width: 960px){
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`;
