import React from 'react';
import alert from '../../images/svg/alert.svg';
import healthy from '../../images/svg/healthy.svg';
import future from '../../images/svg/pred.svg';
import './style.css';

const property= [{
    svg: healthy,
    description: 'You can find out about the purity of the water you use by texting through ideaMart.'
},{
    svg: alert,
    description: 'Our service can quickly alert you to a flood message via SMS to your mobile phone.'
},{
    svg: future, 
    description: 'If you have registered with our service you will be able to know the water level of the reservoir you want.'
}]

const Discover = () => {
    return (
        <>
            <div className='Container' id='services'>
                <h2>Our Sevices</h2>
                <div className='contentwrper'>
                    {property.map((prop, index) => (
                        <div className='content'>
                            <img src={prop.svg} alt='service' style={{width: 200}}/>
                            <p>{prop.description}</p> 
                        </div>
                    ))}                    
                </div>
            </div>
        </>
    )
}

export default Discover
