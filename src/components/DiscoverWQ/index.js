import React from 'react';
import Img1 from '../../images/card 1.jpg';
import BGimg from '../../images/BGimg.jpg';

import{
    DiscoverContainer,
    DisCoverWrp,
    DiscovRw1,
    ImageBG,
    DscColmn1,
    DscColmn2,
    Img,
    TextWrp,
    Heading,
    Description,
    DiscBG,
    ImagBG
} from './DiscoverElements'

const Discover = () => {
    return (
        <>
            <DiscoverContainer id='services'>
                <DiscBG>
                    <ImagBG src={BGimg} type='jpg/png'/>
                </DiscBG>
                <DisCoverWrp>
                    <DiscovRw1>
                        <DscColmn1>
                            <ImageBG>
                                <Img src={Img1} type='jpg/png'/>
                            </ImageBG>
                        </DscColmn1>
                        <DscColmn2>
                            <TextWrp>
                                <Heading>
                                    About the Device..
                                </Heading>
                                <Description>
                                    description
                                </Description>
                            </TextWrp>
                        </DscColmn2>
                    </DiscovRw1>
                    <DiscovRw1>
                        <DscColmn1>
                            <ImageBG>
                                <Img src={Img1} type='jpg/png'/>
                            </ImageBG>
                        </DscColmn1>
                        <DscColmn2>
                            <TextWrp>
                                <Heading>
                                    About the Device..
                                </Heading>
                                <Description>
                                    description
                                </Description>
                            </TextWrp>
                        </DscColmn2>
                    </DiscovRw1>
                    <DiscovRw1>
                        <DscColmn1>
                            <ImageBG>
                                <Img src={Img1} type='jpg/png'/>
                            </ImageBG>
                        </DscColmn1>
                        <DscColmn2>
                            <TextWrp>
                                <Heading>
                                    About the Device..
                                </Heading>
                                <Description>
                                    description
                                </Description>
                            </TextWrp>
                        </DscColmn2>
                    </DiscovRw1>
                    <DiscovRw1>
                        <DscColmn1>
                            <ImageBG>
                                <Img src={Img1} type='jpg/png'/>
                            </ImageBG>
                        </DscColmn1>
                        <DscColmn2>
                            <TextWrp>
                                <Heading>
                                    About the Device..
                                </Heading>
                                <Description>
                                    description
                                </Description>
                            </TextWrp>
                        </DscColmn2>
                    </DiscovRw1>
                </DisCoverWrp>
            </DiscoverContainer>
        </>
    )
}

export default Discover
