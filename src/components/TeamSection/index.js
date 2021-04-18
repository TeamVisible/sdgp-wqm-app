import React from 'react';
// import { Button } from 'react-scroll';
import Video from '../../Videos/TeamVB.mp4';
import './Slider.css'
// import {Button} from '../ButtonElement';
import{
    TemaContainer,
    VdoBG,
    TeamBG,
    TeamContent,
    TeamP,
} from './TeamElements'

const Content = [{
    title: 'O2 Value',
    description: 'abc',
    color: '#0088FE'
},{
    title: 'turbidity Value',
    description: 'def',
    color: '#00C49F'
},{
    title: 'pH Value',
    description: 'ghi',
    color: '#FFBB28'
}];
const delay = 3000;

const Team = () => {

    const [index, setIndex] = React.useState(0);
    const timeOut = React.useRef(null);

    function resetTimeOut(){
        if(timeOut.current){
            clearTimeout(timeOut.current)
        }
    }

    React.useEffect(() => {
        resetTimeOut();
        timeOut.current = setTimeout(() => 
            setIndex((prevIndex) => 
                prevIndex === Content.length - 1 ? 0 : prevIndex + 1
            ),
            delay
        );
        return () => {resetTimeOut();};
        
    },[index]);


    return (
        <>
            <TemaContainer id='about'>
                <TeamBG>
                    <VdoBG autoPlay loop muted src={Video} type='video/mp4'/>
                </TeamBG>
                <TeamContent>
                    <TeamP>
                        <div className='slideshow'>
                            <div className='slideshowsliders' style={{transform:`translate3d(${-index*100}%, 0, 0)`}}>
                                {Content.map((block,index) => (
                                    <div className='slide' key={index} style={{block}}>
                                        <h1>{block.title}</h1>
                                        <p>{block.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='slideshowdots'>
                                {Content.map((_,idx) => (
                                    <div key={idx} 
                                    className={`slideshowdot ${index === idx ? "active":""}`}
                                    onClick ={() => {
                                        setIndex(idx);
                                    }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </TeamP>                
                </TeamContent>     
            </TemaContainer>  
        </>
    )
}

export default Team
