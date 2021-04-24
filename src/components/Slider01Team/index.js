import React from 'react'
import './Slider.css'

const Content = [{
    id: 1,
    title: 'Turbidity Value',
    description: 'the maximum level of turbidity in ',
    description2: 'finished drinking water at 1 NTU and at no time >5 NTU',
    color: '#00C49F'
}, {
    id: 2,
    title: 'pH Value',
    description: 'The pH of most drinking-water lies',
    description2: 'within the range 6.5–8.5.',
    color: '#FFBB28'
}];
const delay = 3000;

const TeamSlider = () => {

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
        
        <div className='slideshow'>
            <div className='slideshowsliders' style={{transform:`translate3d(${-index*100}%, 0, 0)`}}>
                {Content.map((block,index) => (
                    <div className='slide' key={index} style={{block}}>
                        <h1>{block.title}</h1>
                        <p>{block.description}</p>
                        <p>{block.description2}</p>
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
    )
}

export default TeamSlider
