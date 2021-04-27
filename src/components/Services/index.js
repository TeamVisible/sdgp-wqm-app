import React, { Fragment, useState } from 'react'
import './slyde.css';
import { ServiceWrper } from './ServiceElements'
import { Textwrper2 } from './ServiceElements'
import { Heading } from './ServiceElements'
import { Subtitle } from './ServiceElements'
import { ServiceContainer } from './ServiceElements';
import TeamSlider from '../Slider01Team/index'


const Services = () => {
    const [state, setState] = useState({
        ph: "0",
        tr: "0",
        temp: "0"
    });

    return (
        <>
            <ServiceContainer id='discover'>
                <h1>Present Quality Of Water</h1>
                <ServiceWrper>
                    <TeamSlider />
                    <Textwrper2>
                        <Heading>Values</Heading>
                        <select onChange={(e) => {

                            let xhr = new XMLHttpRequest();
                            let json_obj, status = false;
                            setState({
                                ph:"Loading...",
                                tr:"Loading...",
                                temp:"Loading..."

                            })
                            xhr.open("GET", "https://waterqualityapp.herokuapp.com/api/device/?api_key=95d465b00e9946199553186c4b5d294e&device_id=1", true);
                            xhr.setRequestHeader('Content-Type', 'application/json');
                            xhr.onload = function (e) {
                                console.log(xhr.status);
                                if (xhr.readyState === 4) {
                                    if (xhr.status === 200) {
                                        json_obj = JSON.parse(xhr.responseText);
                                        // eslint-disable-next-line
                                        status = true;
                                        
                                        setState({
                                            ph:json_obj.value['ph value'],
                                            tr:json_obj.value['temperature level'],
                                            temp:json_obj.value['turbidity level']
                                        })
                                        console.log(json_obj)
                                       
                                    } else {
                                        console.error(xhr.statusText);
                                    }
                                }
                            };

                            xhr.onerror = function (e) {
                                console.error(xhr.statusText);
                            };
                            xhr.send(null);

                        }}>
                            <option name='1'>Bolgoda</option>
                            <option name='2'>Kelaniya</option>
                        </select>
                        <Subtitle>pH - {state.ph} </Subtitle>
                        <Subtitle>Turbidity - {state.tr}</Subtitle>
                        <Subtitle>Temperature - {state.temp}</Subtitle>
                    </Textwrper2>
                </ServiceWrper>
            </ServiceContainer>
        </>

    )
}

export default Services