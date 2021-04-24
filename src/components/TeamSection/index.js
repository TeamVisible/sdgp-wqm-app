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
    title: 'Team Visible',
    description1: 'Our main goal is to increase awareness for drinkable',
    description2: 'water and make a halt for kidney diseases caused ',
    description3: 'by consumption of contaminated water drastically,',
    description4: 'which will create a generation free ',
    description5: 'from kidney disorders in Sri Lanka.'
    
},{
    title: 'Impact',
    description1: 'As an impact, this project intends to create a water',
    description2: 'water quality measuring device which uses a IOT',
    description3: '(Internet of Things) device to monitor different',
    description4: 'attributes in water such as the oxygen level,',
    description5: 'water level, pH values and the turbidity.'

},{
    title: 'Vision ',
    description1: 'To reaffirm and promote all people right to safe drinking ',
    description2: ' water. With a focus on developing partnerships with ',
    description3: 'rural communities throughout Sri Lanka, we intend to effect ',
    description4: 'change at the provincial, and federal levels as well as',
    description5: ' within civil society and industries involved in the ',
    description6: 'protection and production of public water supplies.'
    
}];
const delay = 7000;

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
                        <h5 id='topic'>Safe water protects and save life</h5>
                        <div className='slideshow'>
                            <div className='slideshowsliders' style={{transform:`translate3d(${-index*100}%, 0, 0)`}}>
                                {Content.map((block,index) => (
                                    <div className='slide' key={index} style={{block}}>
                                        <h1>{block.title}</h1>
                                        <br/><br/>
                                        <p>{block.description1}</p>
                                        <p>{block.description2}</p>
                                        <p>{block.description3}</p>
                                        <p>{block.description4}</p>
                                        <p>{block.description5}</p>
                                        <p>{block.description6}</p>
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
