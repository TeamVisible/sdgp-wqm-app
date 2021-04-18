import React from 'react'
import {Button} from '../ButtonElement';
import {
    ServiceContainer,
    ServiceWrper,
    ServiceRw,
    Column1,
    Column2,
    TopLine,
    Heading,
    Subtitle,
    ButnWrp,
    Textwrper2,
    Textwrper,
    
} from './ServiceElements';

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


const Services = () => {

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
            <ServiceContainer id='discover'>
                <ServiceWrper>
                    <ServiceRw>
                        <Column1>
                            <Textwrper2>
                                <Heading>Values</Heading>
                                <Subtitle>if user logged in then the values appears</Subtitle>
                            </Textwrper2>
                        </Column1>
                        <Column2>
                            <Textwrper>
                                
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

                                <TopLine>Top Line</TopLine>
                                <ButnWrp>
                                    <Button to='signup'>SIGN UP</Button>
                                </ButnWrp>
                            </Textwrper>
                        </Column2>
                    </ServiceRw>
                </ServiceWrper>
            </ServiceContainer>
        </>
    )
}

export default Services