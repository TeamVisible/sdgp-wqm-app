import React from 'react';
import './style.css';

import Nethre300 from '../../images/Crew/nethre300x300C.png';
import Supipi300 from '../../images/Crew/Supipi.png';
import Naveen300 from '../../images/Crew/naveen300x300C.png';
import Shenal300 from '../../images/Crew/Shenal300x300C.png';
import Akshi300 from '../../images/Crew/Akshi300x300C.png';
import Lakindu300 from '../../images/Crew/Lakindu300x300.png';

const Content = [
    {
        id: 'nethre', 
        name: 'Nethre',
        degree: 'Computer Science',
        tasks: '',
        rnd_pic: Nethre300,
        facebook: '',
        linkedIn: 'https://www.linkedin.com/in/nethre-perera-5789a71b8',
        github: '',
             
    },{
        id: 'supipi',
      
        name: 'Supipi',
        degree: 'Software Engineer',
        tasks: '',
        rnd_pic: Supipi300,
        facebook: '',
        linkedIn: 'https://www.linkedin.com/in/supipi-nelumika-16289b1ab',
        github: '',
        
    },{
        id: 'naveen',
    
        name: 'Naveen',
        degree: 'Computer Science',
        tasks: '',
        rnd_pic: Naveen300,
        facebook: '',
        linkedIn: '',
        github: '',
        
    },{
        id: 'shenal',
      
        name: 'Shenal',
        degree: 'Software Engineering',
        tasks: '',
        rnd_pic: Shenal300,
        facebook: '',
        linkedIn: '',
        github: '',
        
    },{
        id: 'lakindu',
        
        name: 'Lakindu',
        degree: 'Software Engineering',
        tasks: '',
        rnd_pic: Lakindu300,
        facebook: '',
        linkedIn: 'https://www.linkedin.com/in/lakindu-lankageeganage-0746481a6',
        github: '',
        
    },{
        id: 'akshi',
    
        name: 'Akshi',
        degree: 'Computer Science',
        tasks: '',
        rnd_pic: Akshi300,
        facebook: '',
        linkedIn: 'https://www.linkedin.com/in/akshi-mahakumarage-0394a71a6',
        github: '',
        
    }
];

const AboutUs = () => {
    return (
        <div className='container' id='aboutUs'>
            <h1>Crew</h1>
            <div className='card-grid'>
                {Content.map((prop,index) => (
                    <a href={prop.linkedIn} className='card' key={index}>
                        <div className="card-background" style={{backgroundImage: `url(${prop.rnd_pic})`}}></div>
                        <span className='card-content' >
                            <h3 className='card-heading'>{prop.name}</h3>
                            {/* <p className='card-category'>{prop.degree}</p> */}
                        </span>
                    </a>
                ))}
            </div>
        </div>


    )
}

export default AboutUs

